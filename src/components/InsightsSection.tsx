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
      className="py-20 relative"
      data-background-color="#ff0000"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Latest Insights
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Stay ahead with our latest research, industry analysis, and technology trends 
            that shape the future of digital transformation.
          </p>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <article
              key={index}
              className="glass-card card-hover overflow-hidden"
            >
              <div className="aspect-video bg-white/5"></div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-400/30">
                    {insight.category}
                  </span>
                  <span className="text-white/50 text-sm">{insight.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {insight.title}
                </h3>
                <p className="text-white/70 mb-4 line-clamp-3">
                  {insight.description}
                </p>
                <a 
                  href="#" 
                  className="text-purple-300 font-medium hover:text-purple-200 transition-colors"
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;