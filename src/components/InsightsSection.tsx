import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, User } from "lucide-react";

const InsightsSection = () => {
  const insights = [
    {
      title: "The Future of AI in Enterprise: 2025 Predictions and Strategic Implications",
      description: "Explore how artificial intelligence will reshape business operations and drive competitive advantage in the coming year.",
      category: "AI & Analytics",
      author: "Dr. Sarah Chen",
      date: "December 15, 2024",
      readTime: "8 min read",
      type: "Research Report",
      featured: true
    },
    {
      title: "Cloud Migration Success: Lessons from Fortune 500 Transformations",
      description: "Key insights and best practices from successful large-scale cloud adoption projects.",
      category: "Cloud Strategy",
      author: "Michael Rodriguez",
      date: "December 10, 2024",
      readTime: "6 min read",
      type: "Case Study"
    },
    {
      title: "Cybersecurity in 2025: Emerging Threats and Defense Strategies",
      description: "Stay ahead of evolving cyber threats with proactive security frameworks and tools.",
      category: "Security",
      author: "James Walker",
      date: "December 5, 2024",
      readTime: "5 min read",
      type: "Whitepaper"
    }
  ];

  return (
    <section 
      id="insights" 
      className="py-24 bg-background" 
      data-background-color="hsl(var(--scroll-bg-insights))"
    >
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Insights & Thought Leadership
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay ahead with expert perspectives, industry research, and strategic insights 
            that drive innovation and inform critical business decisions.
          </p>
        </div>

        {/* Featured Insight */}
        <div className="mb-12">
          <Card className="card-hover border-0 shadow-large bg-gradient-hero text-white overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Badge variant="secondary" className="bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                    <Badge variant="outline" className="border-white/30 text-white">
                      {insights[0].type}
                    </Badge>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                    {insights[0].title}
                  </h3>
                  
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {insights[0].description}
                  </p>
                  
                  <div className="flex items-center gap-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{insights[0].author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{insights[0].date}</span>
                    </div>
                    <span>{insights[0].readTime}</span>
                  </div>
                  
                  <button className="inline-flex items-center gap-2 text-primary bg-white px-6 py-3 rounded-md font-semibold hover:gap-3 transition-all duration-300 hover:shadow-glow">
                    Read Full Report
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
                
                <div className="relative">
                  <div className="aspect-[4/3] bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <div className="text-center text-white/60">
                      <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-lg flex items-center justify-center">
                        <ArrowRight className="h-8 w-8" />
                      </div>
                      <p className="text-sm">AI Research Visualization</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {insights.slice(1).map((insight, index) => (
            <Card key={index} className="card-hover border-0 shadow-medium bg-card group cursor-pointer">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="text-primary border-primary/30">
                      {insight.category}
                    </Badge>
                    <Badge variant="secondary" className="bg-muted text-muted-foreground">
                      {insight.type}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors leading-tight">
                    {insight.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {insight.description}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{insight.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{insight.date}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-sm text-muted-foreground">{insight.readTime}</span>
                    <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all duration-300">
                      <span>Read More</span>
                      <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Insights */}
        <div className="text-center mt-12">
          <a 
            href="/insights" 
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300 text-lg"
          >
            View All Insights
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;