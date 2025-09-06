import { Heart } from 'lucide-react';

interface FooterProps {
  language: string;
}

export function Footer({ language }: FooterProps) {
  const content = {
    en: {
      copyright: "© 2024 Jane Doe. All rights reserved.",
      madeWith: "Made with",
      and: "and",
      love: "love"
    },
    zh: {
      copyright: "© 2024 简·多伊。保留所有权利。",
      madeWith: "使用",
      and: "和",
      love: "爱心制作"
    },
    'zh-TW': {
      copyright: "© 2024 簡·多伊。保留所有權利。",
      madeWith: "使用",
      and: "和",
      love: "愛心製作"
    },
    de: {
      copyright: "© 2024 Jane Doe. Alle Rechte vorbehalten.",
      madeWith: "Gemacht mit",
      and: "und",
      love: "Liebe"
    }
  };

  const t = content[language as keyof typeof content] || content.en;

  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground">
            {t.copyright}
          </p>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <span>{t.madeWith}</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>{t.and}</span>
            <span>React</span>
          </div>
        </div>
      </div>
    </footer>
  );
}