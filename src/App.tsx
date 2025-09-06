import { useState } from 'react';
import { Navigation } from './components/navigation';
import { HeroSection } from './components/hero-section';
import { AboutSection } from './components/about-section';
import { BlogSection } from './components/blog-section';
import { ProjectsSection } from './components/projects-section';
import { ToolsSection } from './components/tools-section';
import { ContactSection } from './components/contact-section';
import { Footer } from './components/footer';

export default function App() {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        currentLanguage={currentLanguage}
        onLanguageChange={setCurrentLanguage}
      />
      
      <main>
        <HeroSection language={currentLanguage} />
        <ToolsSection language={currentLanguage} />
        <AboutSection language={currentLanguage} />
        <BlogSection language={currentLanguage} />
        <ProjectsSection language={currentLanguage} />
        <ContactSection language={currentLanguage} />
      </main>
      
      <Footer language={currentLanguage} />
    </div>
  );
}