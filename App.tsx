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

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Fungsi ini dipanggil ketika sebuah kartu proyek diklik
  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    window.scrollTo(0, 0); // Gulir ke atas halaman saat proyek dipilih
  };

  // Fungsi ini untuk kembali dari halaman detail ke halaman utama
  const handleBackToMain = () => {
    setSelectedProject(null);
  };

  // Jika ada proyek yang dipilih, tampilkan halaman detailnya
  if (selectedProject) {
    return (
      <main className="container mx-auto max-w-5xl py-8 px-4 sm:px-6 lg:px-8">
        <ProjectDetailPage project={selectedProject} onBack={handleBackToMain} />
        <Footer />
      </main>
    );
  }

  // Jika tidak, tampilkan halaman portofolio utama
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
    </div>
  );
};

export default App;