import { useState, useEffect } from 'react';
import { Moon, Sun, Globe } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

interface NavigationProps {
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
}

export function Navigation({ currentLanguage, onLanguageChange }: NavigationProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = saved ? JSON.parse(saved) : prefersDark;
    
    setIsDark(shouldUseDark);
    document.documentElement.classList.toggle('dark', shouldUseDark);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const languages = {
    en: '🇺🇸 English',
    zh: '🇨🇳 简体中文',
    'zh-TW': '🇹🇼 繁體中文',
    de: '🇩🇪 Deutsch'
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-lg font-medium hover:text-primary/80 transition-colors"
            >
              Portfolio
            </button>
            <div className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => scrollToSection('tools')}
                className="hover:text-primary/80 transition-colors"
              >
                Tools
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="hover:text-primary/80 transition-colors"
              >
                About Me
              </button>
              <button
                onClick={() => scrollToSection('blog')}
                className="hover:text-primary/80 transition-colors"
              >
                Blog
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="hover:text-primary/80 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="hover:text-primary/80 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Globe className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {Object.entries(languages).map(([code, label]) => (
                  <DropdownMenuItem
                    key={code}
                    onClick={() => onLanguageChange(code)}
                    className={currentLanguage === code ? 'bg-accent' : ''}
                  >
                    {label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="sm" onClick={toggleDarkMode}>
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}