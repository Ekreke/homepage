import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectsSectionProps {
  language: string;
}

export function ProjectsSection({ language }: ProjectsSectionProps) {
  const content = {
    en: {
      title: "Featured Projects",
      viewProject: "View Project",
      github: "GitHub",
      projects: [
        {
          title: "EcoShop - Sustainable E-commerce",
          description: "A complete e-commerce platform focused on sustainable products with advanced filtering and recommendation systems.",
          tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
          image: "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc1NzEzMTc3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        },
        {
          title: "HealthTracker Mobile App",
          description: "Cross-platform mobile app for tracking health metrics with AI-powered insights and personalized recommendations.",
          tags: ["React Native", "Firebase", "AI/ML", "HealthKit"],
          image: "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzU3MDQ0Mjc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        },
        {
          title: "Analytics Dashboard Pro",
          description: "Modern analytics dashboard with real-time data visualization and customizable widgets for business intelligence.",
          tags: ["Vue.js", "D3.js", "WebSocket", "MongoDB"],
          image: "https://images.unsplash.com/photo-1554098415-788601c80aef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzU3MTY1NjkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        }
      ]
    },
    zh: {
      title: "精选项目",
      viewProject: "查看项目",
      github: "GitHub",
      projects: [
        {
          title: "EcoShop - 可持续电商平台",
          description: "专注于可持续产品的完整电商平台，具有先进的过滤和推荐系统。",
          tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
          image: "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc1NzEzMTc3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        },
        {
          title: "健康追踪移动应用",
          description: "跨平台移动应用，用于追踪健康指标，具有AI驱动的洞察和个性化建议。",
          tags: ["React Native", "Firebase", "AI/ML", "HealthKit"],
          image: "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzU3MDQ0Mjc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        },
        {
          title: "分析仪表板专业版",
          description: "现代化分析仪表板，具有实时数据可视化和可定制的商业智能小部件。",
          tags: ["Vue.js", "D3.js", "WebSocket", "MongoDB"],
          image: "https://images.unsplash.com/photo-1554098415-788601c80aef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzU3MTY1NjkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        }
      ]
    },
    'zh-TW': {
      title: "精選項目",
      viewProject: "查看項目",
      github: "GitHub",
      projects: [
        {
          title: "EcoShop - 可持續電商平台",
          description: "專注於可持續產品的完整電商平台，具有先進的過濾和推薦系統。",
          tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
          image: "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc1NzEzMTc3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        },
        {
          title: "健康追蹤移動應用",
          description: "跨平台移動應用，用於追蹤健康指標，具有AI驅動的洞察和個性化建議。",
          tags: ["React Native", "Firebase", "AI/ML", "HealthKit"],
          image: "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzU3MDQ0Mjc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        },
        {
          title: "分析儀表板專業版",
          description: "現代化分析儀表板，具有實時數據可視化和可定制的商業智能小部件。",
          tags: ["Vue.js", "D3.js", "WebSocket", "MongoDB"],
          image: "https://images.unsplash.com/photo-1554098415-788601c80aef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzU3MTY1NjkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        }
      ]
    },
    de: {
      title: "Ausgewählte Projekte",
      viewProject: "Projekt ansehen",
      github: "GitHub",
      projects: [
        {
          title: "EcoShop - Nachhaltige E-Commerce",
          description: "Eine vollständige E-Commerce-Plattform mit Fokus auf nachhaltige Produkte mit erweiterten Filter- und Empfehlungssystemen.",
          tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
          image: "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc1NzEzMTc3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        },
        {
          title: "HealthTracker Mobile App",
          description: "Plattformübergreifende Mobile App zur Verfolgung von Gesundheitsmetriken mit KI-gestützten Einblicken und personalisierten Empfehlungen.",
          tags: ["React Native", "Firebase", "AI/ML", "HealthKit"],
          image: "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzU3MDQ0Mjc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        },
        {
          title: "Analytics Dashboard Pro",
          description: "Modernes Analytics-Dashboard mit Echtzeit-Datenvisualisierung und anpassbaren Widgets für Business Intelligence.",
          tags: ["Vue.js", "D3.js", "WebSocket", "MongoDB"],
          image: "https://images.unsplash.com/photo-1554098415-788601c80aef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzU3MTY1NjkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        }
      ]
    }
  };

  const t = content[language as keyof typeof content] || content.en;

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl mb-12 text-center">{t.title}</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {t.viewProject}
                  </Button>
                  <Button size="sm" variant="outline">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}