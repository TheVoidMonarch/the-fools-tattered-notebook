
import React from 'react';
import { motion } from 'framer-motion';
import { Scroll, Search } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import NotePreview from '@/components/NotePreview';

const Notes: React.FC = () => {
  // Sample notes data
  const notes = [
    {
      id: 1,
      title: "On the Art of Magical Notation",
      excerpt: "The process of documenting magical phenomena requires a special approach. One must balance precision with the inherent chaos of arcane energies...",
      date: "Waning Moon, Year of the Phoenix",
      category: "Magical Theory"
    },
    {
      id: 2,
      title: "Conversations with Shadows",
      excerpt: "I've been experimenting with a new technique to communicate with the shadows that linger in the corners of perception. The results have been both fascinating and unsettling...",
      date: "Third Day of Autumn Equinox",
      category: "Experimental Magic"
    },
    {
      id: 3,
      title: "The Geometry of Dreams",
      excerpt: "There appears to be a mathematical precision to the way dreams unfold. I've begun mapping the patterns and have discovered an unexpected connection to ancient symbols...",
      date: "Full Moon, Winter Solstice",
      category: "Dream Research"
    },
    {
      id: 4,
      title: "Forgotten Languages of Power",
      excerpt: "In my studies of ancient texts, I've encountered references to languages that seem to have been intentionally erased from history. The few fragments that remain hint at words with the power to reshape reality...",
      date: "New Moon, Spring Awakening",
      category: "Linguistic Magic"
    },
    {
      id: 5,
      title: "The Fool's Journey",
      excerpt: "Every mage begins as a fool, stumbling through mysteries beyond comprehension. This is not a weakness but a strength—for only the fool has the courage to question everything...",
      date: "Summer Solstice",
      category: "Personal Reflections"
    },
  ];

  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-1 max-w-6xl w-full mx-auto px-4 pb-12">
          <div className="my-8">
            <div className="flex items-center gap-3 mb-8">
              <Scroll className="h-6 w-6 text-arcane" />
              <h1 className="text-3xl font-fell font-bold text-ink">Collected Scrolls</h1>
            </div>
            
            {/* Search bar */}
            <div className="relative max-w-xl mx-auto mb-12">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-ink-faded" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-ink/20 rounded-md bg-parchment-light font-patrick focus:outline-none focus:ring-2 focus:ring-arcane/30 focus:border-arcane/30"
                placeholder="Search through the arcane knowledge..."
              />
            </div>
            
            {/* Notes grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {notes.map((note) => (
                <NotePreview
                  key={note.id}
                  title={note.title}
                  excerpt={note.excerpt}
                  date={note.date}
                  category={note.category}
                  onClick={() => console.log(`Note ${note.id} clicked`)}
                />
              ))}
            </motion.div>
          </div>
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Notes;
