import { NORMAL_TYPES } from "./data";

export type Dimensions = {
  ego: number;
  emotion: number;
  attitude: number;
  action: number;
  social: number;
};

function scoreToLevel(score: number): 'H' | 'M' | 'L' {
  if (score > 2) return 'H';
  if (score < -2) return 'L';
  return 'M';
}

function calculateDistance(vec1: string, vec2: string) {
  const v1 = vec1.split('-');
  const v2 = vec2.split('-');
  const levels = { 'H': 2, 'M': 1, 'L': 0 };
  
  let distance = 0;
  for (let i = 0; i < v1.length; i++) {
    distance += Math.abs(levels[v1[i] as keyof typeof levels] - levels[v2[i] as keyof typeof levels]);
  }
  return distance;
}

export function calculatePersonality(dims: Dimensions, isDrunk: boolean = false) {
  if (isDrunk) {
    return 'DRUNK';
  }

  const userVec = [
    scoreToLevel(dims.ego),
    scoreToLevel(dims.emotion),
    scoreToLevel(dims.attitude),
    scoreToLevel(dims.action),
    scoreToLevel(dims.social),
  ].join('-');

  let minDistance = Infinity;
  let bestMatch = 'HHHH'; // 默认傻乐者

  for (const [code, vec] of Object.entries(NORMAL_TYPES)) {
    const dist = calculateDistance(userVec, vec);
    if (dist < minDistance) {
      minDistance = dist;
      bestMatch = code;
    }
  }

  if (minDistance > 8) {
    return 'HHHH';
  }

  return bestMatch;
}