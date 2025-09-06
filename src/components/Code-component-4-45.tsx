import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

interface ContactSectionProps {
  language: string;
}

export function ContactSection({ language }: ContactSectionProps) {
  const content = {
    en: {
      title: "Let's Connect",
      subtitle: "I'm always interested in new opportunities and collaborations.",
      email: "Email Me",
      emailAddress: "jane.doe@example.com",
      social: "Find me on social media",
      links: [
        { name: "LinkedIn", icon: Linkedin, url: "#" },
        { name: "GitHub", icon: Github, url: "#" },
        { name: "Twitter", icon: Twitter, url: "#" }
      ]
    },
    zh: {
      title: "让我们连接",
      subtitle: "我总是对新的机会和合作感兴趣。",
      email: "发送邮件",
      emailAddress: "jane.doe@example.com",
      social: "在社交媒体上找到我",
      links: [
        { name: "LinkedIn", icon: Linkedin, url: "#" },
        { name: "GitHub", icon: Github, url: "#" },
        { name: "Twitter", icon: Twitter, url: "#" }
      ]
    },
    'zh-TW': {
      title: "讓我們連接",
      subtitle: "我總是對新的機會和合作感興趣。",
      email: "發送郵件",
      emailAddress: "jane.doe@example.com",
      social: "在社交媒體上找到我",
      links: [
        { name: "LinkedIn", icon: Linkedin, url: "#" },
        { name: "GitHub", icon: Github, url: "#" },
        { name: "Twitter", icon: Twitter, url: "#" }
      ]
    },
    de: {
      title: "Lass uns vernetzen",
      subtitle: "Ich bin immer an neuen Möglichkeiten und Kooperationen interessiert.",
      email: "E-Mail senden",
      emailAddress: "jane.doe@example.com",
      social: "Finde mich in sozialen Medien",
      links: [
        { name: "LinkedIn", icon: Linkedin, url: "#" },
        { name: "GitHub", icon: Github, url: "#" },
        { name: "Twitter", icon: Twitter, url: "#" }
      ]
    }
  };

  const t = content[language as keyof typeof content] || content.en;

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl mb-6">{t.title}</h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t.subtitle}
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <CardContent className="flex flex-col items-center space-y-4 p-0">
              <div className="p-4 bg-primary/10 rounded-full">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <div className="text-center">
                <h3 className="mb-2">{t.email}</h3>
                <p className="text-muted-foreground mb-4">{t.emailAddress}</p>
                <Button>
                  <Mail className="mr-2 h-4 w-4" />
                  {t.email}
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <CardContent className="flex flex-col items-center space-y-4 p-0">
              <div className="p-4 bg-primary/10 rounded-full">
                <Linkedin className="h-8 w-8 text-primary" />
              </div>
              <div className="text-center">
                <h3 className="mb-2">{t.social}</h3>
                <div className="flex space-x-4 justify-center">
                  {t.links.map((link, index) => (
                    <Button key={index} variant="outline" size="sm">
                      <link.icon className="h-4 w-4" />
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center space-x-6">
          {t.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="p-3 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label={link.name}
            >
              <link.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}