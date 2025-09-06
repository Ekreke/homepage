import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Figma, Code, Palette, Lightbulb } from 'lucide-react';

interface AboutSectionProps {
  language: string;
}

export function AboutSection({ language }: AboutSectionProps) {
  const content = {
    en: {
      title: "About Me",
      intro: "I'm a passionate UI/UX designer and developer who loves creating beautiful, functional digital experiences. I believe great design should be both visually appealing and solve real problems for users.",
      skills: "Core Skills",
      story: "My Story",
      storyText: "My journey started with a curiosity about how things work and a love for both art and technology. Over the years, I've had the privilege of working on diverse projects, from mobile apps to web platforms, always focusing on user-centered design and clean, efficient code."
    },
    zh: {
      title: "关于我",
      intro: "我是一名充满热情的UI/UX设计师和开发者，热爱创造美观、实用的数字体验。我相信优秀的设计应该既具有视觉吸引力，又能解决用户的实际问题。",
      skills: "核心技能",
      story: "我的故事",
      storyText: "我的旅程始于对事物运作方式的好奇心，以及对艺术和技术的热爱。多年来，我有幸参与了从移动应用到网络平台的各种项目，始终专注于以用户为中心的设计和简洁高效的代码。"
    },
    'zh-TW': {
      title: "關於我",
      intro: "我是一名充滿熱情的UI/UX設計師和開發者，熱愛創造美觀、實用的數位體驗。我相信優秀的設計應該既具有視覺吸引力，又能解決用戶的實際問題。",
      skills: "核心技能",
      story: "我的故事",
      storyText: "我的旅程始於對事物運作方式的好奇心，以及對藝術和技術的熱愛。多年來，我有幸參與了從移動應用到網路平台的各種項目，始終專注於以用戶為中心的設計和簡潔高效的程式碼。"
    },
    de: {
      title: "Über mich",
      intro: "Ich bin eine leidenschaftliche UI/UX-Designerin und Entwicklerin, die es liebt, schöne und funktionale digitale Erlebnisse zu schaffen. Ich glaube, dass großartiges Design sowohl visuell ansprechend sein als auch echte Probleme für Benutzer lösen sollte.",
      skills: "Kernkompetenzen",
      story: "Meine Geschichte",
      storyText: "Meine Reise begann mit der Neugier darauf, wie Dinge funktionieren, und einer Liebe zu Kunst und Technologie. Über die Jahre hatte ich das Privileg, an verschiedenen Projekten zu arbeiten, von mobilen Apps bis hin zu Web-Plattformen, immer mit Fokus auf nutzerzentriertes Design und sauberen, effizienten Code."
    }
  };

  const t = content[language as keyof typeof content] || content.en;

  const skills = [
    { name: 'Figma', icon: Figma },
    { name: 'React', icon: Code },
    { name: 'Design Systems', icon: Palette },
    { name: 'User Research', icon: Lightbulb }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl mb-12 text-center">{t.title}</h2>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t.intro}
            </p>
          </div>
          
          <Card className="p-6">
            <h3 className="text-xl mb-4">{t.skills}</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <skill.icon className="h-5 w-5 text-primary" />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div>
          <h3 className="text-2xl mb-6">{t.story}</h3>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {t.storyText}
          </p>
        </div>
      </div>
    </section>
  );
}