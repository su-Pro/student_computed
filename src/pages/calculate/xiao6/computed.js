const boyScoreStandards = {
  lungCapacity: [
    { score: 100, min: 3200, max: Infinity },
    { score: 95, min: 3100, max: 3199 },
    { score: 90, min: 3000, max: 3099 },
    { score: 85, min: 2750, max: 2999 },
    { score: 80, min: 2500, max: 2749 },
    { score: 78, min: 2400, max: 2499 },
    { score: 76, min: 2300, max: 2399 },
    { score: 74, min: 2200, max: 2299 },
    { score: 72, min: 2100, max: 2199 },
    { score: 70, min: 2000, max: 2099 },
    { score: 68, min: 1900, max: 1999 },
    { score: 66, min: 1800, max: 1899 },
    { score: 64, min: 1700, max: 1799 },
    { score: 62, min: 1600, max: 1699 },
    { score: 60, min: 1500, max: 1599 },
    { score: 50, min: 1410, max: 1499 },
    { score: 40, min: 1320, max: 1409 },
    { score: 30, min: 1230, max: 1319 },
    { score: 20, min: 1140, max: 1229 },
    { score: 10, min: 1050, max: 1139 },
  ],
  fiftyMeter: [
    { score: 100, max: 8.2, min: 0 },
    { score: 95, min: 8.21, max: 8.3 },
    { score: 90, min: 8.31, max: 8.4 },
    { score: 85, min: 8.41, max: 8.5 },
    { score: 80, min: 8.51, max: 8.6 },
    { score: 78, min: 8.61, max: 8.8 },
    { score: 76, min: 8.81, max: 9.0 },
    { score: 74, min: 9.01, max: 9.2 },
    { score: 72, min: 9.21, max: 9.4 },
    { score: 70, min: 9.41, max: 9.6 },
    { score: 68, min: 9.61, max: 9.8 },
    { score: 66, min: 9.81, max: 10.0 },
    { score: 64, min: 10.01, max: 10.2 },
    { score: 62, min: 10.21, max: 10.4 },
    { score: 60, min: 10.41, max: 10.6 },
    { score: 50, min: 10.61, max: 10.8 },
    { score: 40, min: 10.81, max: 11.0 },
    { score: 30, min: 11.01, max: 11.2 },
    { score: 20, min: 11.21, max: 11.4 },
    { score: 10, min: 11.41, max: 11.6 },
  ],
  // 类似方式添加其他项目的评分标准
  bmi: [
    { score: 100, min: 14.7, max: 21.8 },
    { score: 80, max: 14.6, min: 0 }, // 低体重
    { score: 80, min: 21.9, max: 24.5 }, // 超重
    { score: 60, min: 24.6, max: Infinity }, // 肥胖
  ],
  sitAndReach: [
    { score: 100, min: 16.6, max: Infinity },
    { score: 95, min: 15.3, max: 16.5 },
    { score: 90, min: 14.0, max: 15.2 },
    { score: 85, min: 11.5, max: 13.9 },
    { score: 80, min: 9.0, max: 11.4 },
    { score: 78, min: 7.7, max: 8.9 },
    { score: 76, min: 6.4, max: 7.6 },
    { score: 74, min: 5.1, max: 6.3 },
    { score: 72, min: 3.8, max: 5.0 },
    { score: 70, min: 2.5, max: 3.7 },
    { score: 68, min: 1.2, max: 2.4 },
    { score: 66, min: -0.1, max: 1.1 },
    { score: 64, min: -1.4, max: -0.1 },
    { score: 62, min: -2.7, max: -1.5 },
    { score: 60, min: -4.0, max: -2.8 },
    { score: 50, min: -5.0, max: -4.1 },
    { score: 40, min: -6.0, max: -5.1 },
    { score: 30, min: -7.0, max: -6.1 },
    { score: 20, min: -8.0, max: -7.1 },
    { score: 10, min: -9.0, max: -8.1 },
  ],
  jumpRope: [
    { score: 100, min: 157, max: Infinity },
    { score: 95, min: 152, max: 156 },
    { score: 90, min: 147, max: 151 },
    { score: 85, min: 141, max: 146 },
    { score: 80, min: 135, max: 140 },
    { score: 78, min: 128, max: 134 },
    { score: 76, min: 121, max: 127 },
    { score: 74, min: 114, max: 120 },
    { score: 72, min: 107, max: 113 },
    { score: 70, min: 100, max: 106 },
    { score: 68, min: 93, max: 99 },
    { score: 66, min: 86, max: 92 },
    { score: 64, min: 79, max: 85 },
    { score: 62, min: 72, max: 78 },
    { score: 60, min: 65, max: 71 },
    { score: 50, min: 62, max: 64 },
    { score: 40, min: 59, max: 61 },
    { score: 30, min: 56, max: 58 },
    { score: 20, min: 53, max: 55 },
    { score: 10, min: 50, max: 52 },
  ],
  sitUps: [
    { score: 100, min: 51, max: Infinity },
    { score: 95, min: 48, max: 50 },
    { score: 90, min: 45, max: 47 },
    { score: 85, min: 42, max: 44 },
    { score: 80, min: 39, max: 41 },
    { score: 78, min: 37, max: 38 },
    { score: 76, min: 35, max: 36 },
    { score: 74, min: 33, max: 34 },
    { score: 72, min: 31, max: 32 },
    { score: 70, min: 29, max: 30 },
    { score: 68, min: 27, max: 28 },
    { score: 66, min: 25, max: 26 },
    { score: 64, min: 23, max: 24 },
    { score: 62, min: 21, max: 22 },
    { score: 60, min: 19, max: 20 },
    { score: 50, min: 17, max: 18 },
    { score: 40, min: 15, max: 16 },
    { score: 30, min: 13, max: 14 },
    { score: 20, min: 11, max: 12 },
    { score: 10, min: 9, max: 10 },
  ],
  eightTimesFiftyMeter: [
    { score: 100, max: 90, min: 0 }, // 转换为秒 1'30" -> 90
    { score: 95, min: 91, max: 93 }, // 1'33" -> 93
    { score: 90, min: 94, max: 96 }, // 1'36" -> 96
    { score: 85, min: 97, max: 99 }, // 1'39" -> 99
    { score: 80, min: 100, max: 102 }, // 1'42" -> 102
    { score: 78, min: 103, max: 105 }, // 1'45" -> 105
    { score: 76, min: 106, max: 108 }, // 1'48" -> 108
    { score: 74, min: 109, max: 111 }, // 1'51" -> 111
    { score: 72, min: 112, max: 114 }, // 1'54" -> 114
    { score: 70, min: 115, max: 117 }, // 1'57" -> 117
    { score: 68, min: 118, max: 120 }, // 2'00" -> 120
    { score: 66, min: 121, max: 123 }, // 2'03" -> 123
    { score: 64, min: 124, max: 126 }, // 2'06" -> 126
    { score: 62, min: 127, max: 129 }, // 2'09" -> 129
    { score: 60, min: 130, max: 132 }, // 2'12" -> 132
    { score: 50, min: 133, max: 136 }, // 2'16" -> 136
    { score: 40, min: 137, max: 140 }, // 2'20" -> 140
    { score: 30, min: 141, max: 144 }, // 2'24" -> 144
    { score: 20, min: 145, max: 148 }, // 2'28" -> 148
    { score: 10, min: 149, max: 152 }, // 2'32" -> 152
  ],
};

const girlScoreStandards = {
  lungCapacity: [
    { score: 100, min: 2500, max: Infinity },
    { score: 95, min: 2400, max: 2499 },
    { score: 90, min: 2300, max: 2399 },
    { score: 85, min: 2200, max: 2299 },
    { score: 80, min: 2100, max: 2199 },
    { score: 78, min: 2010, max: 2099 },
    { score: 76, min: 1920, max: 2009 },
    { score: 74, min: 1830, max: 1919 },
    { score: 72, min: 1740, max: 1829 },
    { score: 70, min: 1650, max: 1739 },
    { score: 68, min: 1560, max: 1649 },
    { score: 66, min: 1470, max: 1559 },
    { score: 64, min: 1380, max: 1469 },
    { score: 62, min: 1290, max: 1379 },
    { score: 60, min: 1200, max: 1289 },
    { score: 50, min: 1170, max: 1199 },
    { score: 40, min: 1140, max: 1169 },
    { score: 30, min: 1110, max: 1139 },
    { score: 20, min: 1080, max: 1109 },
    { score: 10, min: 1050, max: 1079 },
  ],
  fiftyMeter: [
    { score: 100, max: 8.2, min: 0 },
    { score: 95, min: 8.3, max: 8.3 },
    { score: 90, min: 8.4, max: 8.4 },
    { score: 85, min: 8.5, max: 8.7 },
    { score: 80, min: 8.8, max: 9.0 },
    { score: 78, min: 9.1, max: 9.2 },
    { score: 76, min: 9.3, max: 9.4 },
    { score: 74, min: 9.5, max: 9.6 },
    { score: 72, min: 9.7, max: 9.8 },
    { score: 70, min: 9.9, max: 10.0 },
    { score: 68, min: 10.1, max: 10.2 },
    { score: 66, min: 10.3, max: 10.4 },
    { score: 64, min: 10.5, max: 10.6 },
    { score: 62, min: 10.7, max: 10.8 },
    { score: 60, min: 10.9, max: 11.0 },
    { score: 50, min: 11.1, max: 11.2 },
    { score: 40, min: 11.3, max: 11.4 },
    { score: 30, min: 11.5, max: 11.6 },
    { score: 20, min: 11.7, max: 11.8 },
    { score: 10, min: 11.9, max: 12.0 },
  ],
  // 类似方式添加其他项目的评分标准
  bmi: [
    { score: 100, min: 14.2, max: 20.8 },
    { score: 80, max: 14.1 }, // 低体重
    { score: 80, min: 20.9, max: 23.6 }, // 超重
    { score: 60, min: 23.7, max: Infinity }, // 肥胖
  ],
  sitAndReach: [
    { score: 100, min: 19.9, max: Infinity },
    { score: 95, min: 18.7, max: 19.8 },
    { score: 90, min: 17.5, max: 18.6 },
    { score: 85, min: 15.2, max: 17.4 },
    { score: 80, min: 12.9, max: 15.1 },
    { score: 78, min: 11.8, max: 12.8 },
    { score: 76, min: 10.7, max: 11.7 },
    { score: 74, min: 9.6, max: 10.6 },
    { score: 72, min: 8.5, max: 9.5 },
    { score: 70, min: 7.4, max: 8.4 },
    { score: 68, min: 6.3, max: 7.3 },
    { score: 66, min: 5.2, max: 6.2 },
    { score: 64, min: 4.1, max: 5.1 },
    { score: 62, min: 3.0, max: 4.0 },
    { score: 60, min: 1.9, max: 2.9 },
    { score: 50, min: 1.1, max: 1.8 },
    { score: 40, min: 0.3, max: 1.0 },
    { score: 30, min: -0.5, max: 0.2 },
    { score: 20, min: -1.3, max: -0.6 },
    { score: 10, min: -2.1, max: -1.4 },
  ],
  jumpRope: [
    { score: 100, min: 166, max: Infinity },
    { score: 95, min: 159, max: 165 },
    { score: 90, min: 152, max: 158 },
    { score: 85, min: 144, max: 151 },
    { score: 80, min: 136, max: 143 },
    { score: 78, min: 129, max: 135 },
    { score: 76, min: 122, max: 128 },
    { score: 74, min: 115, max: 121 },
    { score: 72, min: 108, max: 114 },
    { score: 70, min: 101, max: 107 },
    { score: 68, min: 94, max: 100 },
    { score: 66, min: 87, max: 93 },
    { score: 64, min: 80, max: 86 },
    { score: 62, min: 73, max: 79 },
    { score: 60, min: 66, max: 72 },
    { score: 50, min: 63, max: 65 },
    { score: 40, min: 60, max: 62 },
    { score: 30, min: 57, max: 59 },
    { score: 20, min: 54, max: 56 },
    { score: 10, min: 51, max: 53 },
  ],
  sitUps: [
    { score: 100, min: 49, max: Infinity },
    { score: 95, min: 47, max: 48 },
    { score: 90, min: 45, max: 46 },
    { score: 85, min: 42, max: 44 },
    { score: 80, min: 39, max: 41 },
    { score: 78, min: 37, max: 38 },
    { score: 76, min: 35, max: 36 },
    { score: 74, min: 33, max: 34 },
    { score: 72, min: 31, max: 32 },
    { score: 70, min: 29, max: 30 },
    { score: 68, min: 27, max: 28 },
    { score: 66, min: 25, max: 26 },
    { score: 64, min: 23, max: 24 },
    { score: 62, min: 21, max: 22 },
    { score: 60, min: 19, max: 20 },
    { score: 50, min: 17, max: 18 },
    { score: 40, min: 15, max: 16 },
    { score: 30, min: 13, max: 14 },
    { score: 20, min: 11, max: 12 },
    { score: 10, min: 9, max: 10 },
  ],
  eightTimesFiftyMeter: [
    { score: 100, max: 97, min: 0 }, // 1'37" -> 97 seconds
    { score: 95, min: 98, max: 100 }, // 1'40" -> 100 seconds
    { score: 90, min: 101, max: 103 }, // 1'43" -> 103 seconds
    { score: 85, min: 104, max: 106 }, // 1'46" -> 106 seconds
    { score: 80, min: 107, max: 109 }, // 1'49" -> 109 seconds
    { score: 78, min: 110, max: 112 }, // 1'52" -> 112 seconds
    { score: 76, min: 113, max: 115 }, // 1'55" -> 115 seconds
    { score: 74, min: 116, max: 118 }, // 1'58" -> 118 seconds
    { score: 72, min: 119, max: 121 }, // 2'01" -> 121 seconds
    { score: 70, min: 122, max: 124 }, // 2'04" -> 124 seconds
    { score: 68, min: 125, max: 127 }, // 2'07" -> 127 seconds
    { score: 66, min: 128, max: 130 }, // 2'10" -> 130 seconds
    { score: 64, min: 131, max: 133 }, // 2'13" -> 133 seconds
    { score: 62, min: 134, max: 136 }, // 2'16" -> 136 seconds
    { score: 60, min: 137, max: 139 }, // 2'19" -> 139 seconds
    { score: 50, min: 140, max: 143 }, // 2'23" -> 143 seconds
    { score: 40, min: 144, max: 147 }, // 2'27" -> 147 seconds
    { score: 30, min: 148, max: 151 }, // 2'31" -> 151 seconds
    { score: 20, min: 152, max: 155 }, // 2'35" -> 155 seconds
    { score: 10, min: 156, max: 159 }, // 2'39" -> 159 seconds
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

export function calculateEightTimesFiftyMeterScore(timeStr, isBoy) {
  const [minute, second] = timeStr.split(".");
  const time = parseInt(minute) * 60 + parseInt(second);

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
