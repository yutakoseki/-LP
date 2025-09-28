import React from 'react';
import Button from '@/components/ui/Button';
import { FooterContent } from '@/types/matching-app';

interface FooterProps {
  content: FooterContent;
  onCTAClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ content, onCTAClick }) => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* CTA Section */}
      <div className="bg-primary-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            まずは資料請求（無料）
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            テンプレートLPについて詳しく紹介した資料です
          </p>
          <Button
            onClick={onCTAClick}
            variant="secondary"
            size="lg"
          >
            サービス資料をダウンロード
          </Button>
        </div>
      </div>
      
      {/* Company Info */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Details */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold mb-4">{content.companyName}</h3>
              <div className="space-y-2 text-gray-300">
                <p>{content.address}</p>
                {content.phone && (
                  <p>電話: {content.phone}</p>
                )}
                {content.email && (
                  <p>メール: {content.email}</p>
                )}
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">サービス</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#problem" className="hover:text-white transition-colors">課題解決</a></li>
                <li><a href="#feature" className="hover:text-white transition-colors">特長</a></li>
                <li><a href="#cases" className="hover:text-white transition-colors">導入事例</a></li>
                <li><a href="#flow" className="hover:text-white transition-colors">利用の流れ</a></li>
              </ul>
            </div>
            
            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold mb-4">サポート</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#faq" className="hover:text-white transition-colors">よくある質問</a></li>
                <li><a href="#" className="hover:text-white transition-colors">お問い合わせ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>{content.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
