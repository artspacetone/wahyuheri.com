import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ProjectDetailPage from './components/ProjectDetailPage';
import type { Project } from './types';
// --- 1. IMPORT KOMPONEN & DATA BARU ---
import { WhatsAppIcon } from './components/icons/WhatsAppIcon';
import { PERSONAL_INFO } from './constants';


const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    window.scrollTo(0, 0); 
  };

  const handleBackToMain = () => {
    setSelectedProject(null);
  };
  
  // --- 2. PERSIAPKAN LINK WHATSAPP ---
  // Menghapus spasi dan karakter '+' dari nomor telepon
  const whatsAppNumber = PERSONAL_INFO.phone.replace(/[\s+]/g, '');
  const whatsAppLink = `https://wa.me/${whatsAppNumber}`;


  if (selectedProject) {
    return (
      <>
        <main className="container mx-auto max-w-5xl py-8 px-4 sm:px-6 lg:px-8">
          <ProjectDetailPage project={selectedProject} onBack={handleBackToMain} />
          <Footer />
        </main>
        {/* Tombol WhatsApp juga tampil di halaman detail proyek */}
        <a
          href={whatsAppLink}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300"
          aria-label="Contact me on WhatsApp"
        >
          <WhatsAppIcon className="w-8 h-8" />
        </a>
      </>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-700">
      <main className="container mx-auto max-w-5xl py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 space-y-16">
          <Header />
          <About />
          <Experience />
          <Skills />
          <Education />
          <Projects onSelectProject={handleSelectProject} />
        </div>
        <Footer />
      </main>

      {/* --- 3. TAMBAHKAN TOMBOL WHATSAPP DI SINI --- */}
      <a
        href={whatsAppLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300"
        aria-label="Contact me on WhatsApp"
      >
        <WhatsAppIcon className="w-8 h-8" />
      </a>
    </div>
  );
};

export default App;