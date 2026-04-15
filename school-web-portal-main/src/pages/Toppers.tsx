import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, GraduationCap } from "lucide-react";

const toppersData = [
  {
    year: "2025",
    toppers: [
      { name: "Pangarkar Firdous ", percentage: 96.0 },
      { name: "Shaikh Asif Rashid", percentage: 85.0 },
      { name: "Shaikh Arfa Akhtar", percentage: 78.0 },
      { name: "Khan Sakina Banu Juber", percentage: 86.4 },
      { name: "Chundavat Sapna", percentage: 90.2 },
    ],
  },
];

const Toppers = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider animate-fade-in">
            Academic Excellence
          </span>
          <h1
            className="text-3xl md:text-5xl font-bold text-foreground mt-2 mb-6 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Our <span className="text-primary">Star Performers</span>
          </h1>
          <p
            className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Celebrating the outstanding achievements of our students who have excelled in their academic pursuits.
          </p>
        </div>
      </section>

      {/* Toppers Section */}
      {toppersData.map((yearData, yearIndex) => (
        <section
          key={yearIndex}
          className="py-16 md:py-20 bg-background"
        >
          <div className="container mx-auto px-4">
            <SectionHeading
              title="Top Performers"
              subtitle="Our brilliant achievers"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {yearData.toppers.map((topper, index) => (
                <Card
                  key={`${topper.name}`}
                  className="border-0 shadow-md hover:shadow-lg transition-all duration-300 animate-slide-up hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center gap-3">
                      <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                        {index === 0 ? (
                          <Trophy className="w-7 h-7 text-secondary" />
                        ) : (
                          <GraduationCap className="w-7 h-7 text-primary" />
                        )}
                      </div>

                      <h3 className="font-semibold text-foreground">
                        {topper.name}
                      </h3>

                      <div className="text-2xl font-bold text-primary">
                        {topper.percentage}%
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Motivation Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-secondary to-[hsl(25,95%,55%)] text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Trophy className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-2xl md:text-4xl font-bold mb-4 animate-fade-in">
            Your Name Could Be Here!
          </h2>
          <p
            className="text-secondary-foreground/90 text-lg max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            At Central Public English High School, we provide the environment, guidance, and support you need to achieve your dreams. Join us and be a part of our success story.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Toppers;