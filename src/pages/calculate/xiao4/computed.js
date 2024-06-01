const boyScoreStandards = {
  lungCapacity: [
    { score: 100, min: 2600, max: Infinity },
    { score: 95, min: 2500, max: 2599 },
    { score: 90, min: 2400, max: 2499 },
    { score: 85, min: 2150, max: 2399 },
    { score: 80, min: 1900, max: 2149 },
    { score: 78, min: 1820, max: 1899 },
    { score: 76, min: 1740, max: 1819 },
    { score: 74, min: 1660, max: 1739 },
    { score: 72, min: 1580, max: 1659 },
    { score: 70, min: 1500, max: 1579 },
    { score: 68, min: 1420, max: 1499 },
    { score: 66, min: 1340, max: 1419 },
    { score: 64, min: 1260, max: 1339 },
    { score: 62, min: 1180, max: 1259 },
    { score: 60, min: 1100, max: 1179 },
    { score: 50, min: 1030, max: 1099 },
    { score: 40, min: 960, max: 1029 },
    { score: 30, min: 890, max: 959 },
    { score: 20, min: 820, max: 889 },
    { score: 10, min: 750, max: 819 },
  ],
  fiftyMeter: [
    { score: 100, min: 0, max: 8.7 },
    { score: 95, min: 8.8, max: 8.8 },
    { score: 90, min: 8.9, max: 8.9 },
    { score: 85, min: 9.0, max: 9.0 },
    { score: 80, min: 9.1, max: 9.1 },
    { score: 78, min: 9.3, max: 9.3 },
    { score: 76, min: 9.5, max: 9.5 },
    { score: 74, min: 9.7, max: 9.7 },
    { score: 72, min: 9.9, max: 9.9 },
    { score: 70, min: 10.1, max: 10.1 },
    { score: 68, min: 10.3, max: 10.3 },
    { score: 66, min: 10.5, max: 10.5 },
    { score: 64, min: 10.7, max: 10.7 },
    { score: 62, min: 10.9, max: 10.9 },
    { score: 60, min: 11.1, max: 11.1 },
    { score: 50, min: 11.3, max: 11.3 },
    { score: 40, min: 11.5, max: 11.5 },
    { score: 30, min: 11.7, max: 11.7 },
    { score: 20, min: 11.9, max: 11.9 },
    { score: 10, min: 12.1, max: 12.1 },
  ],
  sitAndReach: [
    { score: 100, min: 16.4, max: Infinity },
    { score: 95, min: 15.0, max: 16.3 },
    { score: 90, min: 13.6, max: 14.9 },
    { score: 85, min: 11.7, max: 13.5 },
    { score: 80, min: 9.8, max: 11.6 },
    { score: 78, min: 8.6, max: 9.7 },
    { score: 76, min: 7.4, max: 8.5 },
    { score: 74, min: 6.2, max: 7.3 },
    { score: 72, min: 5.0, max: 6.1 },
    { score: 70, min: 3.8, max: 4.9 },
    { score: 68, min: 2.6, max: 3.7 },
    { score: 66, min: 1.4, max: 2.5 },
    { score: 64, min: 0.2, max: 1.3 },
    { score: 62, min: -1.0, max: 0.1 },
    { score: 60, min: -2.2, max: -1.1 },
    { score: 50, min: -3.2, max: -2.3 },
    { score: 40, min: -4.2, max: -3.3 },
    { score: 30, min: -5.2, max: -4.3 },
    { score: 20, min: -6.2, max: -5.3 },
    { score: 10, min: -7.2, max: -6.3 },
  ],
  jumpRope: [
    { score: 100, min: 137, max: Infinity },
    { score: 95, min: 132, max: 136 },
    { score: 90, min: 127, max: 131 },
    { score: 85, min: 121, max: 126 },
    { score: 80, min: 115, max: 120 },
    { score: 78, min: 108, max: 114 },
    { score: 76, min: 101, max: 107 },
    { score: 74, min: 94, max: 100 },
    { score: 72, min: 87, max: 93 },
    { score: 70, min: 80, max: 86 },
    { score: 68, min: 73, max: 79 },
    { score: 66, min: 66, max: 72 },
    { score: 64, min: 59, max: 65 },
    { score: 62, min: 52, max: 58 },
    { score: 60, min: 45, max: 51 },
    { score: 50, min: 42, max: 44 },
    { score: 40, min: 39, max: 41 },
    { score: 30, min: 36, max: 38 },
    { score: 20, min: 33, max: 35 },
    { score: 10, min: 30, max: 32 },
  ],
  sitUps: [
    { score: 100, min: 49, max: Infinity },
    { score: 95, min: 46, max: 48 },
    { score: 90, min: 43, max: 45 },
    { score: 85, min: 40, max: 42 },
    { score: 80, min: 37, max: 39 },
    { score: 78, min: 35, max: 36 },
    { score: 76, min: 33, max: 34 },
    { score: 74, min: 31, max: 32 },
    { score: 72, min: 29, max: 30 },
    { score: 70, min: 27, max: 28 },
    { score: 68, min: 25, max: 26 },
    { score: 66, min: 23, max: 24 },
    { score: 64, min: 21, max: 22 },
    { score: 62, min: 19, max: 20 },
    { score: 60, min: 17, max: 18 },
    { score: 50, min: 15, max: 16 },
    { score: 40, min: 13, max: 14 },
    { score: 30, min: 11, max: 12 },
    { score: 20, min: 9, max: 10 },
    { score: 10, min: 7, max: 8 },
  ],
  bmi: [
    { score: 100, min: 14.2, max: 20.1 },
    { score: 80, min: -Infinity, max: 14.1 },
    { score: 80, min: 20.2, max: 22.6 },
    { score: 60, min: 22.7, max: Infinity },
  ],
};

const girlScoreStandards = {
  lungCapacity: [
    { score: 100, min: 2000, max: Infinity },
    { score: 95, min: 1900, max: 1999 },
    { score: 90, min: 1800, max: 1899 },
    { score: 85, min: 1700, max: 1799 },
    { score: 80, min: 1600, max: 1699 },
    { score: 78, min: 1530, max: 1599 },
    { score: 76, min: 1460, max: 1529 },
    { score: 74, min: 1390, max: 1459 },
    { score: 72, min: 1320, max: 1389 },
    { score: 70, min: 1250, max: 1319 },
    { score: 68, min: 1180, max: 1249 },
    { score: 66, min: 1110, max: 1179 },
    { score: 64, min: 1040, max: 1109 },
    { score: 62, min: 970, max: 1039 },
    { score: 60, min: 900, max: 969 },
    { score: 50, min: 880, max: 899 },
    { score: 40, min: 860, max: 879 },
    { score: 30, min: 840, max: 859 },
    { score: 20, min: 820, max: 839 },
    { score: 10, min: 800, max: 819 },
  ],
  fiftyMeter: [
    { score: 100, min: 0, max: 8.7 },
    { score: 95, min: 8.8, max: 8.8 },
    { score: 90, min: 8.9, max: 8.9 },
    { score: 85, min: 9.2, max: 9.2 },
    { score: 80, min: 9.5, max: 9.5 },
    { score: 78, min: 9.7, max: 9.7 },
    { score: 76, min: 9.9, max: 9.9 },
    { score: 74, min: 10.1, max: 10.1 },
    { score: 72, min: 10.3, max: 10.3 },
    { score: 70, min: 10.5, max: 10.5 },
    { score: 68, min: 10.7, max: 10.7 },
    { score: 66, min: 10.9, max: 10.9 },
    { score: 64, min: 11.1, max: 11.1 },
    { score: 62, min: 11.3, max: 11.3 },
    { score: 60, min: 11.5, max: 11.5 },
    { score: 50, min: 11.7, max: 11.7 },
    { score: 40, min: 11.9, max: 11.9 },
    { score: 30, min: 12.1, max: 12.1 },
    { score: 20, min: 12.3, max: 12.3 },
    { score: 10, min: 12.5, max: 12.5 },
  ],
  sitAndReach: [
    { score: 100, min: 19.5, max: Infinity },
    { score: 95, min: 18.1, max: 19.4 },
    { score: 90, min: 16.9, max: 18.0 },
    { score: 85, min: 15.0, max: 16.8 },
    { score: 80, min: 13.1, max: 14.9 },
    { score: 78, min: 12.0, max: 13.0 },
    { score: 76, min: 10.9, max: 11.9 },
    { score: 74, min: 9.8, max: 10.8 },
    { score: 72, min: 8.7, max: 9.7 },
    { score: 70, min: 7.6, max: 8.6 },
    { score: 68, min: 6.5, max: 7.5 },
    { score: 66, min: 5.4, max: 6.4 },
    { score: 64, min: 4.3, max: 5.3 },
    { score: 62, min: 3.2, max: 4.2 },
    { score: 60, min: 2.1, max: 3.1 },
    { score: 50, min: 1.3, max: 2.0 },
    { score: 40, min: 0.5, max: 1.2 },
    { score: 30, min: -0.3, max: 0.4 },
    { score: 20, min: -1.1, max: -0.4 },
    { score: 10, min: -1.9, max: -1.2 },
  ],
  jumpRope: [
    { score: 100, min: 149, max: Infinity },
    { score: 95, min: 142, max: 148 },
    { score: 90, min: 135, max: 141 },
    { score: 85, min: 127, max: 134 },
    { score: 80, min: 119, max: 126 },
    { score: 78, min: 112, max: 118 },
    { score: 76, min: 105, max: 111 },
    { score: 74, min: 98, max: 104 },
    { score: 72, min: 91, max: 97 },
    { score: 70, min: 84, max: 90 },
    { score: 68, min: 77, max: 83 },
    { score: 66, min: 70, max: 76 },
    { score: 64, min: 63, max: 69 },
    { score: 62, min: 56, max: 62 },
    { score: 60, min: 49, max: 55 },
    { score: 50, min: 46, max: 48 },
    { score: 40, min: 43, max: 45 },
    { score: 30, min: 40, max: 42 },
    { score: 20, min: 37, max: 39 },
    { score: 10, min: 34, max: 36 },
  ],
  sitUps: [
    { score: 100, min: 47, max: Infinity },
    { score: 95, min: 45, max: 46 },
    { score: 90, min: 43, max: 44 },
    { score: 85, min: 40, max: 42 },
    { score: 80, min: 37, max: 39 },
    { score: 78, min: 35, max: 36 },
    { score: 76, min: 33, max: 34 },
    { score: 74, min: 31, max: 32 },
    { score: 72, min: 29, max: 30 },
    { score: 70, min: 27, max: 28 },
    { score: 68, min: 25, max: 26 },
    { score: 66, min: 23, max: 24 },
    { score: 64, min: 21, max: 22 },
    { score: 62, min: 19, max: 20 },
    { score: 60, min: 17, max: 18 },
    { score: 50, min: 15, max: 16 },
    { score: 40, min: 13, max: 14 },
    { score: 30, min: 11, max: 12 },
    { score: 20, min: 9, max: 10 },
    { score: 10, min: 7, max: 8 },
  ],
  bmi: [
    { score: 100, min: 13.7, max: 19.4 },
    { score: 80, min: -Infinity, max: 13.6 },
    { score: 80, min: 19.5, max: 22.0 },
    { score: 60, min: 22.1, max: Infinity },
  ],
};

export function calculateBMIScore(height, weight, isBoy) {
  // 计算公式使用的是千克（kg）和厘米（cm）作为单位
  const bmi = weight / (height / 100) ** 2; // 计算 BMI
  const scoreStandards = isBoy ? boyScoreStandards.bmi : girlScoreStandards.bmi; // 选择适当的性别标准表

  // 遍历标准表，查找对应的得分区间
  for (let standard of scoreStandards) {
    if (
      (standard.min === undefined || bmi >= standard.min) &&
      (standard.max === undefined || bmi <= standard.max)
    ) {
      return standard.score;
    }
  }

  // 如果没有符合的得分区间，返回未找到得分
  return undefined;
}

export function calculateLungCapacityScore(lungCapacity, isBoy) {
  const standards = isBoy
    ? boyScoreStandards.lungCapacity
    : girlScoreStandards.lungCapacity;

  // Loop through the standards to find where the lung capacity fits
  for (const standard of standards) {
    if (lungCapacity >= standard.min) {
      return standard.score; // Return the score if the lung capacity is greater than or equal to the minimum value for that score bracket
    }
  }

  return 0; // Return a score of 0 if no conditions are met (i.e., below the lowest bracket)
}

export function calculateSitUpsScore(count, isBoy) {
  const standards = isBoy
    ? boyScoreStandards.sitUps
    : girlScoreStandards.sitUps;

  for (const standard of standards) {
    // 检查count是否在当前标准的分数区间内
    if (
      (standard.min === undefined || count >= standard.min) &&
      (standard.max === undefined || count <= standard.max)
    ) {
      return standard.score;
    }
  }

  // 如果没有符合任何标准的区间，返回0分
  return 0;
}

export function calculateEightTimesFiftyMeterScore(time, isBoy) {
  const standards = isBoy
    ? boyScoreStandards.eightTimesFiftyMeter
    : girlScoreStandards.eightTimesFiftyMeter;
  for (const standard of standards) {
    if (
      (standard.min === undefined || time >= standard.min) &&
      (standard.max === undefined || time <= standard.max)
    ) {
      return standard.score;
    }
  }
  return 0;
}

export function calculateFiftyMeterScore(time, isBoy) {
  const standards = isBoy
    ? boyScoreStandards.fiftyMeter
    : girlScoreStandards.fiftyMeter;
  for (const standard of standards) {
    if (
      (standard.min === undefined || time >= standard.min) &&
      (standard.max === undefined || time <= standard.max)
    ) {
      return standard.score;
    }
  }
  return 0;
}

export function calculateSitAndReachScore(count, isBoy) {
  const standards = isBoy
    ? boyScoreStandards.sitAndReach
    : girlScoreStandards.sitAndReach;
  for (const standard of standards) {
    if (
      (standard.min === undefined || count >= standard.min) &&
      (standard.max === undefined || count <= standard.max)
    ) {
      return standard.score;
    }
  }
  return 0;
}

export function calculateJumpRopeScore(count, isBoy) {
  const standards = isBoy
    ? boyScoreStandards.jumpRope
    : girlScoreStandards.jumpRope;
  for (const standard of standards) {
    if (
      (standard.min === undefined || count >= standard.min) &&
      (standard.max === undefined || count <= standard.max)
    ) {
      return standard.score;
    }
  }
  return 0;
}
