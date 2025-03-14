
import React from 'react';
import { motion } from 'framer-motion';
import { Book, Star, Wand } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import NotePage from '../components/NotePage';
import NoteContent from '../components/NoteContent';
import { RandomArcaneSymbol } from '../assets/arcane-symbols';

const About: React.FC = () => {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-1 max-w-6xl w-full mx-auto px-4 pb-8">
          <NotePage 
            title="About The Fool" 
            date="A brief introduction to the keeper of this notebook"
            inkSplatters={4}
          >
            <div className="flex justify-center mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="w-32 h-32 bg-arcane/10 rounded-full flex items-center justify-center">
                  <Wand className="h-12 w-12 text-arcane animate-glow" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-parchment-light rounded-full flex items-center justify-center shadow-md">
                  <Star className="h-5 w-5 text-arcane" />
                </div>
              </motion.div>
            </div>
            
            <NoteContent>
              <p>Greetings, curious soul. I am known simply as "The Fool"—a title I wear with pride rather than shame. For it is only by embracing our foolishness that we open ourselves to true wisdom.</p>
              
              <p className="mt-3">This notebook contains my journey through the realms of knowledge both mundane and arcane. It is imperfect, disorganized, and constantly evolving—much like its keeper.</p>
            </NoteContent>
            
            <NoteContent type="ancient" title="Origins" withSymbol>
              <p>My story begins as many do—with questions. Questions that led to books, books that led to teachers, and teachers who led to more questions. The cycle never ends, and for that I am grateful.</p>
              
              <p className="mt-3">I've studied under various masters across different disciplines, always seeking to understand the connections between seemingly disparate fields of knowledge. This notebook is my attempt to document those connections.</p>
              
              <div className="flex space-x-4 my-6 justify-center">
                <div className="flex flex-col items-center">
                  <RandomArcaneSymbol className="h-8 w-8 mb-2" />
                  <span className="font-patrick text-sm">Perception</span>
                </div>
                <div className="flex flex-col items-center">
                  <RandomArcaneSymbol className="h-8 w-8 mb-2" />
                  <span className="font-patrick text-sm">Connection</span>
                </div>
                <div className="flex flex-col items-center">
                  <RandomArcaneSymbol className="h-8 w-8 mb-2" />
                  <span className="font-patrick text-sm">Transformation</span>
                </div>
              </div>
            </NoteContent>
            
            <NoteContent type="scribble" title="Personal Ramblings">
              <p>Sometimes I wonder if these notes will outlast me. Will someone else find them useful? Or will they simply gather dust, forgotten like so many other attempts to capture fleeting thoughts?</p>
              
              <p className="mt-3">Perhaps it doesn't matter. The act of writing itself transforms thought into something more concrete, more real. And in that transformation, something magical happens.</p>
              
              <div className="border-t border-ink/20 my-4 pt-4 font-shadows">
                <p className="italic text-ink-faded">"The difference between a madman and a scholar is simply the quality of their documentation."</p>
              </div>
            </NoteContent>
            
            <NoteContent type="personal">
              <div className="bg-parchment-dark p-6 rounded-md shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Book className="h-5 w-5 text-arcane" />
                  <h3 className="font-shadows text-lg">Current Areas of Study</h3>
                </div>
                
                <ul className="list-disc list-inside space-y-2">
                  <li>The mathematical patterns underlying natural phenomena</li>
                  <li>Ancient symbolic languages and their modern interpretations</li>
                  <li>The intersection of art and science in understanding consciousness</li>
                  <li>Methods for documenting the undocumentable</li>
                </ul>
              </div>
            </NoteContent>
          </NotePage>
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default About;
