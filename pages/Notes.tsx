
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Scroll, Search, Shield } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import NotePreview from '../components/NotePreview';
import { sampleNotes } from '../data/sampleNotes';
import { Dialog, DialogContent } from "../components/ui/dialog";
import NoteDetail from '../components/NoteDetail';
import { CyberSecurityNote } from '../types';

const Notes: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedNote, setSelectedNote] = useState<CyberSecurityNote | null>(null);

  // Filter notes based on search term
  const filteredNotes = sampleNotes.filter(note => 
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-1 max-w-6xl w-full mx-auto px-4 pb-12">
          <div className="my-8">
            <div className="flex items-center gap-3 mb-8">
              <Shield className="h-6 w-6 text-arcane" />
              <h1 className="text-3xl font-fell font-bold text-ink">Digital Security Grimoire</h1>
            </div>
            
            {/* Search bar */}
            <div className="relative max-w-xl mx-auto mb-12">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-ink-faded" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-ink/20 rounded-md bg-parchment-light font-patrick focus:outline-none focus:ring-2 focus:ring-arcane/30 focus:border-arcane/30"
                placeholder="Search through arcane cybersecurity knowledge..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Notes grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {filteredNotes.map((note) => (
                <NotePreview
                  key={note.id}
                  title={note.title}
                  excerpt={note.content.replace(/<[^>]*>/g, '').substring(0, 120) + '...'}
                  date={note.date}
                  category={note.category}
                  onClick={() => setSelectedNote(note)}
                />
              ))}
            </motion.div>

            {filteredNotes.length === 0 && (
              <div className="text-center py-12">
                <p className="font-patrick text-ink-faded text-lg">
                  No magical knowledge found with those keywords. Try another incantation.
                </p>
              </div>
            )}
          </div>
        </main>
        
        <Footer />

        {/* Note detail dialog */}
        <Dialog open={!!selectedNote} onOpenChange={(open) => !open && setSelectedNote(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-parchment p-0">
            {selectedNote && (
              <NoteDetail note={selectedNote} />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </PageTransition>
  );
};

export default Notes;
