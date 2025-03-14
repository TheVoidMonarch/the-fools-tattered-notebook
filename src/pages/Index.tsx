
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import NoteDetail from '../components/NoteDetail';
import { sampleNotes } from '../data/sampleNotes';

const Index: React.FC = () => {
  // Display the first sample note on the home page
  const featuredNote = sampleNotes[0];

  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-1 max-w-6xl w-full mx-auto px-4 pb-12">
          <div className="my-8">
            <h1 className="text-3xl font-fell font-bold text-ink mb-8 text-center">
              Grimoire of Digital Security
            </h1>
            
            <div className="prose prose-slate mx-auto mb-12 text-center max-w-2xl">
              <p className="font-patrick text-lg text-ink-faded">
                Welcome, apprentice. Within these worn pages lie the ancient arts of cybersecurity, 
                recorded by one who walks the path of digital protection. Study well, for knowledge 
                is your strongest ward against the dark forces that threaten the digital realm.
              </p>
            </div>
            
            <NoteDetail note={featuredNote} />
          </div>
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
