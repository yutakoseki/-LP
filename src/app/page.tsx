'use client';

import React, { useState, useEffect } from 'react';
import Hero from '@/components/sections/Hero';
import Problem from '@/components/sections/Problem';
import Feature from '@/components/sections/Feature';
import Cases from '@/components/sections/Cases';
import Flow from '@/components/sections/Flow';
import FAQ from '@/components/sections/FAQ';
import Footer from '@/components/sections/Footer';
import WaitingListForm from '@/components/WaitingListForm';
import { getContentFromUrl, getContentFromEnv } from '@/utils/content-loader';
import { MatchingAppContent } from '@/types/matching-app';

export default function Home() {
  const [isWaitingListOpen, setIsWaitingListOpen] = useState(false);
  const [content, setContent] = useState<MatchingAppContent | null>(null);

  useEffect(() => {
    // クライアントサイドでコンテンツを読み込み
    const loadedContent = getContentFromUrl();
    setContent(loadedContent);
  }, []);

  const handleCTAClick = () => {
    setIsWaitingListOpen(true);
  };

  const handleCloseWaitingList = () => {
    setIsWaitingListOpen(false);
  };

  // サーバーサイドレンダリング用のフォールバック
  if (!content) {
    const fallbackContent = getContentFromEnv();
    return (
      <main className="min-h-screen">
        <Hero 
          content={fallbackContent.hero} 
          onCTAClick={handleCTAClick}
        />
        
        <Problem content={fallbackContent.problem} />
        
        <Feature content={fallbackContent.feature} />
        
        <Cases content={fallbackContent.cases} />
        
        <Flow content={fallbackContent.flow} />
        
        <FAQ content={fallbackContent.faq} />
        
        <Footer 
          content={fallbackContent.footer} 
          onCTAClick={handleCTAClick}
        />
        
        <WaitingListForm 
          isOpen={isWaitingListOpen}
          onClose={handleCloseWaitingList}
          targetAudience={fallbackContent.targetAudience}
        />
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Hero 
        content={content.hero} 
        onCTAClick={handleCTAClick}
      />
      
      <Problem content={content.problem} />
      
      <Feature content={content.feature} />
      
      <Cases content={content.cases} />
      
      <Flow content={content.flow} />
      
      <FAQ content={content.faq} />
      
      <Footer 
        content={content.footer} 
        onCTAClick={handleCTAClick}
      />
      
      <WaitingListForm 
        isOpen={isWaitingListOpen}
        onClose={handleCloseWaitingList}
        targetAudience={content.targetAudience}
      />
    </main>
  );
}