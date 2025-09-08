import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Calendar, ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BlogSectionProps {
  language: string;
}

export function BlogSection({ language }: BlogSectionProps) {
  const content = {
    en: {
      title: "Latest Articles",
      readAll: "Read All Articles",
      articles: [
        {
          title: "The Future of Design Systems",
          summary: "Exploring how design systems are evolving in 2024 and beyond.",
          date: "Mar 15, 2024",
          tags: ["Design Systems", "UI/UX"],
          image: "https://images.unsplash.com/photo-1516798705208-066b05ced1cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBibG9nJTIwd3JpdGluZ3xlbnwxfHx8fDE3NTcxNDYyNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        },
        {
          title: "User Research in Remote Teams",
          summary: "Best practices for conducting user research when your team is distributed.",
          date: "Mar 8, 2024",
          tags: ["Research", "Remote Work"],
          image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1eCUyMHJlc2VhcmNofGVufDF8fHx8MTc1NzE2NTY1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        },
        {
          title: "Micro-interactions That Matter",
          summary: "How small details can make a big difference in user experience.",
          date: "Mar 1, 2024",
          tags: ["Interaction Design", "UX"],
          image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB0aGlua2luZ3xlbnwxfHx8fDE3NTcxNjU2NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        }
      ]
    },
    zh: {
      title: "最新文章",
      readAll: "阅读所有文章",
      articles: [
        {
          title: "设计系统的未来",
          summary: "探索设计系统在2024年及以后的发展趋势。",
          date: "2024年3月15日",
          tags: ["设计系统", "UI/UX"],
          image: "https://images.unsplash.com/photo-1516798705208-066b05ced1cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBibG9nJTIwd3JpdGluZ3xlbnwxfHx8fDE3NTcxNDYyNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        },
        {
          title: "远程团队中的用户研究",
          summary: "分布式团队进行用户研究的最佳实践。",
          date: "2024年3月8日",
          tags: ["研究", "远程工作"],
          image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1eCUyMHJlc2VhcmNofGVufDF8fHx8MTc1NzE2NTY1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        },
        {
          title: "重要的微交互",
          summary: "小细节如何在用户体验中产生重大影响。",
          date: "2024年3月1日",
          tags: ["交互设计", "用户体验"],
          image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB0aGlua2luZ3xlbnwxfHx8fDE3NTcxNjU2NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        }
      ]
    },
    'zh-TW': {
      title: "最新文章",
      readAll: "閱讀所有文章",
      articles: [
        {
          title: "設計系統的未來",
          summary: "探索設計系統在2024年及以後的發展趨勢。",
          date: "2024年3月15日",
          tags: ["設計系統", "UI/UX"],
          image: "https://images.unsplash.com/photo-1516798705208-066b05ced1cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBibG9nJTIwd3JpdGluZ3xlbnwxfHx8fDE3NTcxNDYyNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        },
        {
          title: "遠程團隊中的用戶研究",
          summary: "分佈式團隊進行用戶研究的最佳實踐。",
          date: "2024年3月8日",
          tags: ["研究", "遠程工作"],
          image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1eCUyMHJlc2VhcmNofGVufDF8fHx8MTc1NzE2NTY1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        },
        {
          title: "重要的微交互",
          summary: "小細節如何在用戶體驗中產生重大影響。",
          date: "2024年3月1日",
          tags: ["交互設計", "用戶體驗"],
          image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB0aGlua2luZ3xlbnwxfHx8fDE3NTcxNjU2NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        }
      ]
    },
    de: {
      title: "Neueste Artikel",
      readAll: "Alle Artikel lesen",
      articles: [
        {
          title: "Die Zukunft von Design-Systemen",
          summary: "Untersuchung der Evolution von Design-Systemen in 2024 und darüber hinaus.",
          date: "15. März 2024",
          tags: ["Design-Systeme", "UI/UX"],
          image: "https://images.unsplash.com/photo-1516798705208-066b05ced1cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBibG9nJTIwd3JpdGluZ3xlbnwxfHx8fDE3NTcxNDYyNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        },
        {
          title: "Nutzerforschung in Remote-Teams",
          summary: "Best Practices für Nutzerforschung bei verteilten Teams.",
          date: "8. März 2024",
          tags: ["Forschung", "Remote-Arbeit"],
          image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1eCUyMHJlc2VhcmNofGVufDF8fHx8MTc1NzE2NTY1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        },
        {
          title: "Micro-Interaktionen, die zählen",
          summary: "Wie kleine Details einen großen Unterschied in der Benutzererfahrung machen können.",
          date: "1. März 2024",
          tags: ["Interaktionsdesign", "UX"],
          image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB0aGlua2luZ3xlbnwxfHx8fDE3NTcxNjU2NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        }
      ]
    }
  };

  const t = content[language as keyof typeof content] || content.en;

  return (
    <section id="blog" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl mb-12 text-center">{t.title}</h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {t.articles.map((article, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                </div>
                <h3 className="mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {article.summary}
                </p>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <a href="https://blog.ekreke.cn/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="group">
              {t.readAll}
              <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}