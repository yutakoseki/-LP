import React from "react";
import Image from "next/image";
import Icon from "@/components/ui/Icon";
import { FeatureContent } from "@/types/matching-app";

interface FeatureProps {
  content: FeatureContent;
}

const Feature: React.FC<FeatureProps> = ({ content }) => {
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

        <div className="space-y-20">
          {content.features.map((feature, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Content */}
              <div
                className={`space-y-6 ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="flex items-center space-x-4">
                  {feature.icon && (
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <Icon
                        name={feature.icon}
                        size="lg"
                        className="text-primary-600"
                      />
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* 特長の詳細リスト */}
                {feature.benefits && feature.benefits.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li
                        key={benefitIndex}
                        className="flex items-center text-gray-600"
                      >
                        <svg
                          className="w-5 h-5 text-secondary-500 mr-3 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Image */}
              {feature.image && (
                <div
                  className={`relative ${
                    index % 2 === 1 ? "lg:col-start-1" : ""
                  }`}
                >
                  <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={feature.image}
                      alt={feature.imageAlt || feature.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
