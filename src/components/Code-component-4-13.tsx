import { Button } from './ui/button';
import { ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  language: string;
}

export function HeroSection({ language }: HeroSectionProps) {
  const content = {
    en: {
      name: "Jane Doe",
      tagline: "UI/UX Designer & Developer",
      cta: "View My Work"
    },
    zh: {
      name: "简·多伊",
      tagline: "UI/UX 设计师与开发者",
      cta: "查看我的作品"
    },
    'zh-TW': {
      name: "簡·多伊",
      tagline: "UI/UX 設計師與開發者",
      cta: "查看我的作品"
    },
    de: {
      name: "Jane Doe",
      tagline: "UI/UX Designerin & Entwicklerin",
      cta: "Meine Arbeit ansehen"
    }
  };

  const t = content[language as keyof typeof content] || content.en;

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl mb-6 tracking-tight">
          {t.name}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t.tagline}
        </p>
        <Button 
          onClick={scrollToProjects}
          size="lg"
          className="group"
        >
          {t.cta}
          <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
}