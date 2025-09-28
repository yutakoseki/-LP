import { MatchingAppContent } from '@/types/matching-app';
import { demandContent } from '@/data/matching-app-demand';
import { supplyContent } from '@/data/matching-app-supply';
import { getConfigFromEnv } from '@/config/lp-config';

export function getContentByAudience(targetAudience: 'demand' | 'supply'): MatchingAppContent {
  return targetAudience === 'demand' ? demandContent : supplyContent;
}

export function getContentFromEnv(): MatchingAppContent {
  const config = getConfigFromEnv();
  return getContentByAudience(config.targetAudience);
}

export function getContentFromUrl(): MatchingAppContent {
  if (typeof window === 'undefined') {
    return demandContent; // サーバーサイドではデフォルトを返す
  }
  
  const urlParams = new URLSearchParams(window.location.search);
  const audience = urlParams.get('audience') as 'demand' | 'supply';
  
  if (audience && (audience === 'demand' || audience === 'supply')) {
    return getContentByAudience(audience);
  }
  
  // 環境変数から読み込み
  return getContentFromEnv();
}
