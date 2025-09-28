import React from "react";
import Icon from "@/components/ui/Icon";
import { FlowContent } from "@/types/matching-app";

interface FlowProps {
  content: FlowContent;
}

const Flow: React.FC<FlowProps> = ({ content }) => {
  return (
    <section className="py-20 bg-white">
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

        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gray-200"></div>

          <div className="grid lg:grid-cols-5 gap-8">
            {content.steps.map((step, index) => (
              <div
                key={index}
                className="relative text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Step number */}
                <div className="relative z-10 mx-auto w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6 shadow-lg">
                  {step.step}
                </div>

                {/* Icon */}
                {step.icon && (
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <Icon
                        name={step.icon}
                        size="lg"
                        className="text-primary-600"
                      />
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for mobile */}
                {index < content.steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-8">
                    <svg
                      className="w-6 h-6 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Flow;
