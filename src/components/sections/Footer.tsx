import React from "react";
import Button from "@/components/ui/Button";
import { FooterContent } from "@/types/matching-app";

interface FooterProps {
  content: FooterContent;
  onCTAClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ content, onCTAClick }) => {
  return (
    <footer className="bg-gray-100 text-gray-900">
      {/* CTA Section */}
      <div className="bg-primary-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            今すぐウェイティングリストに登録
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            サービス開始時に優先的にご案内いたします
          </p>
          <Button onClick={onCTAClick} variant="secondary" size="lg">
            ウェイティングリストに登録
          </Button>
        </div>
      </div>

      {/* Company Info */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">{content.companyName}</h3>
            <div className="space-y-2 text-gray-600">
              <p>{content.address}</p>
              {content.phone && <p>電話: {content.phone}</p>}
              {content.email && <p>メール: {content.email}</p>}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-300 py-6">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <p>{content.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
