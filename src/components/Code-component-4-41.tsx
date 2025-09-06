import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Calculator, Palette, Code, Zap, ExternalLink } from 'lucide-react';

interface ToolsSectionProps {
  language: string;
}

export function ToolsSection({ language }: ToolsSectionProps) {
  const content = {
    en: {
      title: "My Tools",
      useTool: "Use Tool",
      learnMore: "Learn More",
      tools: [
        {
          name: "Color Palette Generator",
          description: "Generate beautiful color palettes from images or create harmonious color schemes for your projects.",
          icon: Palette,
          tags: ["Design", "Colors", "Free"],
          category: "Design Tool"
        },
        {
          name: "CSS Grid Generator",
          description: "Visual tool to create and customize CSS Grid layouts with live preview and code export.",
          icon: Code,
          tags: ["CSS", "Layout", "Web Dev"],
          category: "Development Tool"
        },
        {
          name: "Design System Calculator",
          description: "Calculate spacing, typography scales, and component dimensions for consistent design systems.",
          icon: Calculator,
          tags: ["Design System", "Typography", "Spacing"],
          category: "Design Tool"
        },
        {
          name: "Performance Optimizer",
          description: "Analyze and optimize your website's performance with actionable insights and recommendations.",
          icon: Zap,
          tags: ["Performance", "SEO", "Web"],
          category: "Development Tool"
        }
      ]
    },
    zh: {
      title: "我的工具",
      useTool: "使用工具",
      learnMore: "了解更多",
      tools: [
        {
          name: "配色方案生成器",
          description: "从图像生成美丽的配色方案，或为您的项目创建和谐的色彩搭配。",
          icon: Palette,
          tags: ["设计", "颜色", "免费"],
          category: "设计工具"
        },
        {
          name: "CSS网格生成器",
          description: "可视化工具，用于创建和自定义CSS网格布局，具有实时预览和代码导出功能。",
          icon: Code,
          tags: ["CSS", "布局", "网络开发"],
          category: "开发工具"
        },
        {
          name: "设计系统计算器",
          description: "计算间距、排版比例和组件尺寸，用于一致的设计系统。",
          icon: Calculator,
          tags: ["设计系统", "排版", "间距"],
          category: "设计工具"
        },
        {
          name: "性能优化器",
          description: "分析和优化您网站的性能，提供可操作的洞察和建议。",
          icon: Zap,
          tags: ["性能", "SEO", "网络"],
          category: "开发工具"
        }
      ]
    },
    'zh-TW': {
      title: "我的工具",
      useTool: "使用工具",
      learnMore: "了解更多",
      tools: [
        {
          name: "配色方案生成器",
          description: "從圖像生成美麗的配色方案，或為您的項目創建和諧的色彩搭配。",
          icon: Palette,
          tags: ["設計", "顏色", "免費"],
          category: "設計工具"
        },
        {
          name: "CSS網格生成器",
          description: "可視化工具，用於創建和自定義CSS網格佈局，具有即時預覽和程式碼匯出功能。",
          icon: Code,
          tags: ["CSS", "佈局", "網路開發"],
          category: "開發工具"
        },
        {
          name: "設計系統計算器",
          description: "計算間距、排版比例和組件尺寸，用於一致的設計系統。",
          icon: Calculator,
          tags: ["設計系統", "排版", "間距"],
          category: "設計工具"
        },
        {
          name: "性能優化器",
          description: "分析和優化您網站的性能，提供可操作的洞察和建議。",
          icon: Zap,
          tags: ["性能", "SEO", "網路"],
          category: "開發工具"
        }
      ]
    },
    de: {
      title: "Meine Tools",
      useTool: "Tool verwenden",
      learnMore: "Mehr erfahren",
      tools: [
        {
          name: "Farbpaletten-Generator",
          description: "Generiere schöne Farbpaletten aus Bildern oder erstelle harmonische Farbschemata für deine Projekte.",
          icon: Palette,
          tags: ["Design", "Farben", "Kostenlos"],
          category: "Design-Tool"
        },
        {
          name: "CSS Grid Generator",
          description: "Visuelles Tool zum Erstellen und Anpassen von CSS Grid-Layouts mit Live-Vorschau und Code-Export.",
          icon: Code,
          tags: ["CSS", "Layout", "Web-Entwicklung"],
          category: "Entwicklungs-Tool"
        },
        {
          name: "Design-System-Rechner",
          description: "Berechne Abstände, Typografie-Skalen und Komponenten-Dimensionen für konsistente Design-Systeme.",
          icon: Calculator,
          tags: ["Design-System", "Typografie", "Abstände"],
          category: "Design-Tool"
        },
        {
          name: "Performance-Optimierer",
          description: "Analysiere und optimiere die Performance deiner Website mit umsetzbaren Einblicken und Empfehlungen.",
          icon: Zap,
          tags: ["Performance", "SEO", "Web"],
          category: "Entwicklungs-Tool"
        }
      ]
    }
  };

  const t = content[language as keyof typeof content] || content.en;

  return (
    <section id="tools" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl mb-12 text-center">{t.title}</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {t.tools.map((tool, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow group">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <tool.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="group-hover:text-primary transition-colors">
                        {tool.name}
                      </h3>
                      <Badge variant="outline" className="text-xs">
                        {tool.category}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {tool.description}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {tool.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {t.useTool}
                  </Button>
                  <Button size="sm" variant="outline">
                    {t.learnMore}
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