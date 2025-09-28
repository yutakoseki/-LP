import React from "react";
import Icon from "@/components/ui/Icon";
import { ProblemContent } from "@/types/matching-app";

interface ProblemProps {
  content: ProblemContent;
}

const Problem: React.FC<ProblemProps> = ({ content }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {content.title}
          </h2>
          {content.subtitle && (
            <p className="text-xl text-gray-600 mb-8">{content.subtitle}</p>
          )}
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {content.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                {problem.icon && (
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                      <Icon
                        name={problem.icon}
                        size="xl"
                        className="text-primary-600"
                      />
                    </div>
                  </div>
                )}
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {problem.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
