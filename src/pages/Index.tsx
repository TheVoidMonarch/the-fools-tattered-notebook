
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Book, Scroll, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NotePage from '@/components/NotePage';
import NoteContent from '@/components/NoteContent';
import PageTransition from '@/components/PageTransition';
import { RandomArcaneSymbol } from '@/assets/arcane-symbols';

// Random quotes for the "scribble of the day"
const randomScribbles = [
  "When the arcane ink flows from the pen, reality itself bends to the scholar's will...",
  "Remember: never trust a grimoire that doesn't try to bite your fingers at least once.",
  "Three parts wonder, two parts madness, one part ink. Mix until the universe makes sense.",
  "The difference between a magic trick and true magic? One fools the eye, the other transforms reality.",
  "In the spaces between thoughts, that's where the true magic happens.",
  "To master the arcane, one must first master the art of precise note-taking.",
  "Spilled ink forms patterns of futures yet to unfold.",
  "The fool isn't the one who knows nothing, but the one who questions everything."
];

const Index: React.FC = () => {
  const [randomScribble, setRandomScribble] = useState("");
  
  useEffect(() => {
    // Select a random scribble on initial load
    const randomIndex = Math.floor(Math.random() * randomScribbles.length);
    setRandomScribble(randomScribbles[randomIndex]);
  }, []);
  
  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };
  
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-1 max-w-6xl w-full mx-auto px-4 pb-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <NotePage 
                title="Welcome to The Fool's Tattered Notebook" 
                date="An ongoing collection of arcane knowledge"
                inkSplatters={3}
              >
                <NoteContent>
                  <p>Welcome, wanderer, to this humble collection of arcane notes and rambling insights. These pages contain the scattered thoughts of a fool on the path to understanding the mysteries of existence.</p>
                  
                  <div className="flex items-center gap-2 my-6">
                    <Star className="text-arcane h-5 w-5" />
                    <p className="font-shadows text-lg italic text-arcane">Scribble of the Day:</p>
                    <Star className="text-arcane h-5 w-5" />
                  </div>
                  
                  <blockquote className="border-l-4 border-arcane pl-4 italic font-shadows">
                    "{randomScribble}"
                  </blockquote>
                </NoteContent>
                
                <NoteContent type="ancient" title="On the Nature of Knowledge" withSymbol>
                  <p>The pursuit of knowledge is not a straight path but a winding road filled with unexpected discoveries. As one who has walked this path for years, I've learned that true wisdom comes not from memorizing facts but from questioning the very nature of reality.</p>
                  
                  <p className="mt-2">Within these pages, you'll find my attempts to make sense of the chaotic universe around us—sometimes successful, often not, but always sincere.</p>
                </NoteContent>
                
                <NoteContent type="scribble">
                  <p>Must remember to organize these notes better... the binding is falling apart, and pages are scattered everywhere. Perhaps a table of contents? Or maybe that would impose too much order on what should remain beautifully chaotic.</p>
                  
                  <p className="mt-2">Note to self: Ink stains are a badge of honor for any true scholar!</p>
                </NoteContent>
              </NotePage>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="flex justify-center my-12">
                <div className="flex gap-12 items-center">
                  <motion.div
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="bg-parchment-dark p-6 rounded-md shadow-md flex flex-col items-center text-center max-w-xs"
                  >
                    <Book className="h-8 w-8 mb-4 text-arcane" />
                    <h3 className="font-fell text-xl font-bold mb-2">Recent Entries</h3>
                    <p className="font-patrick text-ink-light">Browse the latest additions to this tattered collection of thoughts.</p>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="bg-parchment-dark p-6 rounded-md shadow-md flex flex-col items-center text-center max-w-xs"
                  >
                    <Scroll className="h-8 w-8 mb-4 text-arcane" />
                    <h3 className="font-fell text-xl font-bold mb-2">Arcane Studies</h3>
                    <p className="font-patrick text-ink-light">Delve into the deeper mysteries contained within these pages.</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <NotePage 
                title="A Fragment of Thought" 
                variant="secondary"
                inkSplatters={1}
              >
                <NoteContent type="personal">
                  <p>The boundaries between imagination and reality blur when one spends too much time in the realm of thought. Sometimes I wonder if the ideas I'm capturing here are truly mine, or if they're whispers from some other dimension.</p>
                  
                  <div className="flex items-center gap-2 my-4">
                    <RandomArcaneSymbol className="h-5 w-5" />
                    <RandomArcaneSymbol className="h-5 w-5" />
                    <RandomArcaneSymbol className="h-5 w-5" />
                  </div>
                  
                  <p>These symbols appeared in my dreams three nights in a row. Their meaning escapes me, but their presence feels significant. Perhaps in time, their purpose will become clear.</p>
                </NoteContent>
              </NotePage>
            </motion.div>
          </motion.div>
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
