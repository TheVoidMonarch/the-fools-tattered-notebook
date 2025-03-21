
import React, { useState } from 'react';
import { useToast } from "../hooks/use-toast";
import { Shield, ZapIcon, Terminal, Check, X, Sparkles, Scroll } from 'lucide-react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "./ui/dialog";
import { Button } from "./ui/button";
import { Alert, AlertDescription } from "./ui/alert";
import NotePage from './NotePage';
import NoteContent from './NoteContent';
import { CyberSecurityNote, QuizQuestion } from '../types';

interface NoteDetailProps {
  note: CyberSecurityNote;
}

const NoteDetail: React.FC<NoteDetailProps> = ({ note }) => {
  const [quizOpen, setQuizOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const { toast } = useToast();

  // Function to trigger a random quiz
  const triggerRandomQuiz = () => {
    if (!note.questions || note.questions.length === 0) {
      toast({
        title: "No magical bindings detected",
        description: "This spell has no associated trials of knowledge.",
      });
      return;
    }

    // Pick a random question
    const randomIndex = Math.floor(Math.random() * note.questions.length);
    setCurrentQuestion(note.questions[randomIndex]);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setQuizOpen(true);
  };

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const submitAnswer = () => {
    if (!selectedAnswer || !currentQuestion) return;
    
    const correct = selectedAnswer === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    setIsAnswered(true);

    if (correct) {
      toast({
        title: "Arcane knowledge absorbed!",
        description: "The grimoire acknowledges your understanding of this magic.",
      });
    } else {
      toast({
        title: "Magical energy fizzles!",
        description: "The arcane patterns require further study for mastery.",
      });
    }
  };

  const closeQuiz = () => {
    setQuizOpen(false);
    setCurrentQuestion(null);
  };

  // Determine the category icon
  const getCategoryIcon = () => {
    switch (note.category.toLowerCase()) {
      case 'network security':
        return <Shield className="text-arcane" size={20} />;
      case 'penetration testing':
        return <ZapIcon className="text-arcane" size={20} />;
      default:
        return <Terminal className="text-arcane" size={20} />;
    }
  };

  return (
    <>
      <NotePage title={note.title} date={note.date} variant="main" inkSplatters={3}>
        <div className="mb-4 flex items-center gap-2">
          {getCategoryIcon()}
          <span className="text-sm font-patrick text-ink-faded italic">{note.category}</span>
        </div>

        <NoteContent>
          <div dangerouslySetInnerHTML={{ __html: note.content }} />
        </NoteContent>

        <div className="mt-6 space-y-2">
          <div className="flex flex-wrap gap-2">
            {note.tags.map((tag, index) => (
              <span key={index} className="inline-block bg-parchment-aged px-2 py-1 rounded-md text-xs font-patrick text-ink-faded">
                #{tag}
              </span>
            ))}
          </div>

          {note.questions && note.questions.length > 0 && (
            <motion.div 
              className="mt-4" 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                variant="outline"
                onClick={triggerRandomQuiz}
                className="font-patrick text-arcane border-arcane/30 hover:bg-arcane/10"
              >
                <Sparkles className="mr-1" size={16} />
                Activate Magical Trial
              </Button>
            </motion.div>
          )}
        </div>
      </NotePage>

      <Dialog open={quizOpen} onOpenChange={setQuizOpen}>
        <DialogContent className="bg-parchment-light border-ink/20 max-w-md">
          <DialogHeader>
            <DialogTitle className="font-fell text-ink text-xl flex items-center gap-2">
              <Scroll size={18} className="text-arcane" />
              Arcane Binding Trial
            </DialogTitle>
            <DialogDescription className="font-patrick text-ink-faded">
              The grimoire's magic compels you to prove your understanding. 
              Those who seek knowledge shall be rewarded.
            </DialogDescription>
          </DialogHeader>

          {currentQuestion && (
            <div className="py-2">
              <p className="font-fell text-ink mb-4">{currentQuestion.question}</p>
              
              <div className="space-y-2">
                {currentQuestion.options.map((option, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <button
                      className={`w-full text-left p-3 rounded-md font-patrick transition-colors ${
                        selectedAnswer === option 
                          ? isAnswered
                            ? isCorrect && selectedAnswer === option
                              ? 'bg-green-100 border-green-500 border'
                              : selectedAnswer === option
                                ? 'bg-red-100 border-red-500 border'
                                : 'bg-parchment-aged border-arcane/40 border'
                            : 'bg-parchment-aged border-arcane/40 border'
                          : 'bg-parchment hover:bg-parchment-aged border border-ink/10'
                      }`}
                      onClick={() => !isAnswered && handleAnswerSelect(option)}
                      disabled={isAnswered}
                    >
                      <div className="flex items-center justify-between">
                        <span>{option}</span>
                        {isAnswered && selectedAnswer === option && (
                          isCorrect ? <Check className="text-green-600" size={18} /> : <X className="text-red-600" size={18} />
                        )}
                      </div>
                    </button>
                  </motion.div>
                ))}
              </div>

              {isAnswered && (
                <Alert className="mt-4 bg-parchment-aged border-ink/20">
                  <AlertDescription>
                    {isCorrect 
                      ? "The grimoire glows with approval! Your understanding of this magic is acknowledged."
                      : `The runes flicker with correction. The proper incantation was: ${currentQuestion.correctAnswer}`
                    }
                  </AlertDescription>
                </Alert>
              )}
            </div>
          )}

          <DialogFooter>
            {!isAnswered ? (
              <Button 
                onClick={submitAnswer} 
                disabled={!selectedAnswer}
                className="font-patrick bg-arcane hover:bg-arcane/90"
              >
                <Sparkles size={16} className="mr-1" />
                Cast Response
              </Button>
            ) : (
              <Button 
                onClick={closeQuiz}
                className="font-patrick"
              >
                Close Grimoire
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default NoteDetail;
