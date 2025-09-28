import React from "react";
import Image from "next/image";
import { CaseContent } from "@/types/matching-app";

interface CasesProps {
  content: CaseContent;
}

const Cases: React.FC<CasesProps> = ({ content }) => {
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
          {content.cases.map((caseStudy, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {caseStudy.image && (
                <div className="relative w-full h-48">
                  <Image
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                    {caseStudy.company}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {caseStudy.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-4">
                  {caseStudy.description}
                </p>

                {caseStudy.result && (
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary-500 rounded-full"></div>
                    <span className="text-sm font-medium text-secondary-700">
                      {caseStudy.result}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
