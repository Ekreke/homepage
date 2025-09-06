import { Button } from './ui/button';
import { ArrowUpRight } from 'lucide-react';

interface HeroSectionProps {
  language: string;
}

export function HeroSection({ language }: HeroSectionProps) {
  const content = {
    en: {
      name: "John Paul",
      tagline: "UI/UX Designer & Developer",
      cta: "Let's Connect"
    },
    zh: {
      name: "简·多伊",
      tagline: "UI/UX 设计师与开发者",
      cta: "Let's Connect"
    },
    'zh-TW': {
      name: "簡·多伊",
      tagline: "UI/UX 設計師與開發者",
      cta: "Let's Connect"
    },
    de: {
      name: "John Paul",
      tagline: "UI/UX Designerin & Entwicklerin",
      cta: "Let's Connect"
    }
  };

  const t = content[language as keyof typeof content] || content.en;

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl mb-6 tracking-tight">
          {t.name}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t.tagline}
        </p>
        <a href="https://bento.me/ekreke" target="_blank" rel="noopener noreferrer">
          <Button 
            size="lg"
            className="group"
          >
            {t.cta}
            <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </a>
      </div>
    </section>
  );
}