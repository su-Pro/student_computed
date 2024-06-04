const boyScoreStandards = {
  lungCapacity: [
    { score: 100, min: 3940, max: Infinity },
    { score: 95, min: 3820, max: 3939 },
    { score: 90, min: 3700, max: 3819 },
    { score: 85, min: 3450, max: 3699 },
    { score: 80, min: 3200, max: 3449 },
    { score: 78, min: 3080, max: 3199 },
    { score: 76, min: 2960, max: 3079 },
    { score: 74, min: 2840, max: 2959 },
    { score: 72, min: 2720, max: 2839 },
    { score: 70, min: 2600, max: 2719 },
    { score: 68, min: 2480, max: 2599 },
    { score: 66, min: 2360, max: 2479 },
    { score: 64, min: 2240, max: 2359 },
    { score: 62, min: 2120, max: 2239 },
    { score: 60, min: 2000, max: 2119 },
    { score: 50, min: 1890, max: 1999 },
    { score: 40, min: 1780, max: 1889 },
    { score: 30, min: 1670, max: 1779 },
    { score: 20, min: 1560, max: 1669 },
    { score: 10, max: 1559, min: 1 },
  ],
  fiftyMeter: [
    { score: 100, max: 7.5, min: 0.01 },
    { score: 95, min: 7.6, max: 7.6 },
    { score: 90, min: 7.7, max: 7.7 },
    { score: 85, min: 7.8, max: 7.8 },
    { score: 80, min: 7.9, max: 7.9 },
    { score: 78, min: 8.0, max: 8.1 },
    { score: 76, min: 8.2, max: 8.3 },
    { score: 74, min: 8.4, max: 8.5 },
    { score: 72, min: 8.6, max: 8.7 },
    { score: 70, min: 8.8, max: 8.9 },
    { score: 68, min: 9.0, max: 9.1 },
    { score: 66, min: 9.2, max: 9.3 },
    { score: 64, min: 9.4, max: 9.5 },
    { score: 62, min: 9.6, max: 9.7 },
    { score: 60, min: 9.8, max: 9.9 },
    { score: 50, min: 10.0, max: 10.1 },
    { score: 40, min: 10.2, max: 10.3 },
    { score: 30, min: 10.4, max: 10.5 },
    { score: 20, min: 10.6, max: 10.7 },
    { score: 10, min: 10.9, max: Infinity },
  ],
  oneThousandMeter: [
    { score: 100, max: 230, min: 0 }, // 3'50" -> 3*60 + 50 = 230
    { score: 95, min: 231, max: 235 }, // 3'55" -> 3*60 + 55 = 235
    { score: 90, min: 236, max: 240 }, // 4'00" -> 4*60 + 0 = 240
    { score: 85, min: 241, max: 247 }, // 4'07" -> 4*60 + 7 = 247
    { score: 80, min: 248, max: 255 }, // 4'15" -> 4*60 + 15 = 255
    { score: 78, min: 256, max: 260 }, // 4'20" -> 4*60 + 20 = 260
    { score: 76, min: 261, max: 265 }, // 4'25" -> 4*60 + 25 = 265
    { score: 74, min: 266, max: 270 }, // 4'30" -> 4*60 + 30 = 270
    { score: 72, min: 271, max: 275 }, // 4'35" -> 4*60 + 35 = 275
    { score: 70, min: 276, max: 280 }, // 4'40" -> 4*60 + 40 = 280
    { score: 68, min: 281, max: 285 }, // 4'45" -> 4*60 + 45 = 285
    { score: 66, min: 286, max: 290 }, // 4'50" -> 4*60 + 50 = 290
    { score: 64, min: 291, max: 295 }, // 4'55" -> 4*60 + 55 = 295
    { score: 62, min: 296, max: 300 }, // 5'00" -> 5*60 + 0 = 300
    { score: 60, min: 301, max: 305 }, // 5'05" -> 5*60 + 5 = 305
    { score: 50, min: 306, max: 325 }, // 5'25" -> 5*60 + 25 = 325
    { score: 40, min: 326, max: 345 }, // 5'45" -> 5*60 + 45 = 345
    { score: 30, min: 346, max: 365 }, // 6'05" -> 6*60 + 5 = 365
    { score: 20, min: 366, max: 385 }, // 6'25" -> 6*60 + 25 = 385
    { score: 10, min: 386, max: 405 }, // 6'45" -> 6*60 + 45 = 405
  ],
  pullUps: [
    { score: 100, min: 14, max: Infinity },
    { score: 95, min: 13, max: 13 },
    { score: 90, min: 12, max: 12 },
    { score: 85, min: 11, max: 11 },
    { score: 80, min: 10, max: 10 },
    { score: 76, min: 9, max: 9 },
    { score: 72, min: 8, max: 8 },
    { score: 68, min: 7, max: 7 },
    { score: 64, min: 6, max: 6 },
    { score: 60, min: 5, max: 5 },
    { score: 50, min: 4, max: 4 },
    { score: 40, min: 3, max: 3 },
    { score: 30, min: 2, max: 2 },
    { score: 20, min: 1, max: 1 },
  ],
  sitAndReach: [
    { score: 100, min: 19.6, max: Infinity },
    { score: 95, min: 17.7, max: 19.5 },
    { score: 90, min: 15.8, max: 17.6 },
    { score: 85, min: 13.7, max: 15.7 },
    { score: 80, min: 11.6, max: 13.6 },
    { score: 78, min: 10.3, max: 11.5 },
    { score: 76, min: 9.0, max: 10.2 },
    { score: 74, min: 7.7, max: 8.9 },
    { score: 72, min: 6.4, max: 7.6 },
    { score: 70, min: 5.1, max: 6.3 },
    { score: 68, min: 3.8, max: 5.0 },
    { score: 66, min: 2.5, max: 3.7 },
    { score: 64, min: 1.2, max: 2.4 },
    { score: 62, min: -0.1, max: 1.1 },
    { score: 60, min: -1.4, max: -0.2 },
    { score: 50, min: -2.6, max: -1.5 },
    { score: 40, min: -3.8, max: -2.7 },
    { score: 30, min: -5.0, max: -3.9 },
    { score: 20, min: -6.2, max: -5.1 },
    { score: 10, max: -7.4, min: -6.3 },
  ],
  standingLongJump: [
    { score: 100, min: 240 },
    { score: 95, min: 233, max: 239 },
    { score: 90, min: 226, max: 232 },
    { score: 85, min: 218, max: 225 },
    { score: 80, min: 210, max: 217 },
    { score: 78, min: 206, max: 209 },
    { score: 76, min: 202, max: 205 },
    { score: 74, min: 198, max: 201 },
    { score: 72, min: 194, max: 197 },
    { score: 70, min: 190, max: 193 },
    { score: 68, min: 186, max: 189 },
    { score: 66, min: 182, max: 185 },
    { score: 64, min: 178, max: 181 },
    { score: 62, min: 174, max: 177 },
    { score: 60, min: 170, max: 173 },
    { score: 50, min: 165, max: 169 },
    { score: 40, min: 160, max: 164 },
    { score: 30, min: 155, max: 159 },
    { score: 20, min: 150, max: 154 },
    { score: 10, max: 153, min: 145 },
  ],
  bmi: [
    { score: 100, min: 15.7, max: 22.5 },
    { score: 80, max: 15.6, min: 0 },
    { score: 80, min: 22.6, max: 25.2 },
    { score: 60, min: 25.3, max: Infinity },
  ],
};

const girlScoreStandards = {
  lungCapacity: [
    { score: 100, min: 2900, max: Infinity },
    { score: 95, min: 2850, max: 2899 },
    { score: 90, min: 2800, max: 2849 },
    { score: 85, min: 2650, max: 2799 },
    { score: 80, min: 2500, max: 2649 },
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
    { score: 50, min: 1460, max: 1499 },
    { score: 40, min: 1420, max: 1459 },
    { score: 30, min: 1380, max: 1419 },
    { score: 20, min: 1340, max: 1379 },
    { score: 10, min: 1300, max: 1339 },
    { score: 0, max: 1299, min: 0 },
  ],
  fiftyMeter: [
    { score: 100, min: 0.01, max: 8.0 },
    { score: 95, min: 8.1, max: 8.1 },
    { score: 90, min: 8.2, max: 8.2 },
    { score: 85, min: 8.3, max: 8.5 },
    { score: 80, min: 8.6, max: 8.8 },
    { score: 78, min: 8.9, max: 9.0 },
    { score: 76, min: 9.1, max: 9.2 },
    { score: 74, min: 9.3, max: 9.4 },
    { score: 72, min: 9.5, max: 9.6 },
    { score: 70, min: 9.7, max: 9.8 },
    { score: 68, min: 9.9, max: 10.0 },
    { score: 66, min: 10.1, max: 10.2 },
    { score: 64, min: 10.3, max: 10.4 },
    { score: 62, min: 10.5, max: 10.6 },
    { score: 60, min: 10.7, max: 10.8 },
    { score: 50, min: 10.9, max: 11.0 },
    { score: 40, min: 11.1, max: 11.2 },
    { score: 30, min: 11.3, max: 11.4 },
    { score: 20, min: 11.5, max: 11.6 },
    { score: 10, min: 11.7, max: 11.8 },
  ],
  eightHundredMeter: [
    { score: 100, min: 0, max: 210 }, // 3'30" -> 3*60 + 30 = 210
    { score: 95, min: 211, max: 217 }, // 3'37" -> 3*60 + 37 = 217
    { score: 90, min: 218, max: 224 }, // 3'44" -> 3*60 + 44 = 224
    { score: 85, min: 225, max: 232 }, // 3'52" -> 3*60 + 52 = 232
    { score: 80, min: 233, max: 240 }, // 4'00" -> 4*60 + 0 = 240
    { score: 78, min: 241, max: 245 }, // 4'05" -> 4*60 + 5 = 245
    { score: 76, min: 246, max: 250 }, // 4'10" -> 4*60 + 10 = 250
    { score: 74, min: 251, max: 255 }, // 4'15" -> 4*60 + 15 = 255
    { score: 72, min: 256, max: 260 }, // 4'20" -> 4*60 + 20 = 260
    { score: 70, min: 261, max: 265 }, // 4'25" -> 4*60 + 25 = 265
    { score: 68, min: 266, max: 270 }, // 4'30" -> 4*60 + 30 = 270
    { score: 66, min: 271, max: 275 }, // 4'35" -> 4*60 + 35 = 275
    { score: 64, min: 276, max: 280 }, // 4'40" -> 4*60 + 40 = 280
    { score: 62, min: 281, max: 285 }, // 4'45" -> 4*60 + 45 = 285
    { score: 60, min: 286, max: 290 }, // 4'50" -> 4*60 + 50 = 290
    { score: 50, min: 291, max: 300 }, // 5'00" -> 5*60 + 0 = 300
    { score: 40, min: 301, max: 310 }, // 5'10" -> 5*60 + 10 = 310
    { score: 30, min: 311, max: 320 }, // 5'20" -> 5*60 + 20 = 320
    { score: 20, min: 321, max: 330 }, // 5'30" -> 5*60 + 30 = 330
    { score: 10, min: 331, max: Infinity }, // 5'40" -> 5*60 + 40 = 340
  ],
  sitUps: [
    { score: 100, min: 51, max: Infinity },
    { score: 95, min: 49, max: 50 },
    { score: 90, min: 47, max: 48 },
    { score: 85, min: 44, max: 46 },
    { score: 80, min: 41, max: 43 },
    { score: 78, min: 39, max: 40 },
    { score: 76, min: 37, max: 38 },
    { score: 74, min: 35, max: 36 },
    { score: 72, min: 33, max: 34 },
    { score: 70, min: 31, max: 32 },
    { score: 68, min: 29, max: 30 },
    { score: 66, min: 27, max: 28 },
    { score: 64, min: 25, max: 26 },
    { score: 62, min: 23, max: 24 },
    { score: 60, min: 21, max: 22 },
    { score: 50, min: 19, max: 20 },
    { score: 40, min: 17, max: 18 },
    { score: 30, min: 15, max: 16 },
    { score: 20, min: 13, max: 14 },
    { score: 10, min: 11, max: 12 },
    { score: 0, max: 10, min: 0 },
  ],
  sitAndReach: [
    { score: 100, min: 22.7, max: Infinity },
    { score: 95, min: 21.0, max: 22.6 },
    { score: 90, min: 19.3, max: 20.9 },
    { score: 85, min: 17.6, max: 19.2 },
    { score: 80, min: 15.9, max: 17.5 },
    { score: 78, min: 14.6, max: 15.8 },
    { score: 76, min: 13.3, max: 14.5 },
    { score: 74, min: 12.0, max: 13.2 },
    { score: 72, min: 10.7, max: 11.9 },
    { score: 70, min: 9.4, max: 10.6 },
    { score: 68, min: 8.1, max: 9.3 },
    { score: 66, min: 6.8, max: 8.0 },
    { score: 64, min: 5.5, max: 6.7 },
    { score: 62, min: 4.2, max: 5.4 },
    { score: 60, min: 2.9, max: 4.1 },
    { score: 50, min: 2.1, max: 2.8 },
    { score: 40, min: 1.3, max: 2.0 },
    { score: 30, min: 0.5, max: 1.2 },
    { score: 20, min: -0.3, max: 0.4 },
    { score: 10, min: -1.1, max: -0.4 },
  ],
  standingLongJump: [
    { score: 100, min: 200, max: Infinity },
    { score: 95, min: 194, max: 199 },
    { score: 90, min: 188, max: 193 },
    { score: 85, min: 181, max: 187 },
    { score: 80, min: 174, max: 180 },
    { score: 78, min: 171, max: 173 },
    { score: 76, min: 168, max: 170 },
    { score: 74, min: 165, max: 167 },
    { score: 72, min: 162, max: 164 },
    { score: 70, min: 159, max: 161 },
    { score: 68, min: 156, max: 158 },
    { score: 66, min: 153, max: 155 },
    { score: 64, min: 150, max: 152 },
    { score: 62, min: 147, max: 149 },
    { score: 60, min: 144, max: 146 },
    { score: 50, min: 139, max: 143 },
    { score: 40, min: 134, max: 138 },
    { score: 30, min: 129, max: 133 },
    { score: 20, min: 124, max: 128 },
    { score: 10, min: 119, max: 123 },
    { score: 0, max: 118, min: 0 },
  ],
  bmi: [
    { score: 100, min: 15.3, max: 22.2 },
    { score: 80, min: 0, max: 15.2 }, // 低体重
    { score: 80, min: 22.3, max: 24.8 }, // 超重
    { score: 60, min: 24.9, max: Infinity }, // 肥胖
  ],
};

export function calculateFiftyMeterScore(time, isBoy) {
  const standards = isBoy
    ? boyScoreStandards.fiftyMeter
    : girlScoreStandards.fiftyMeter;
  for (const standard of standards) {
    if (time >= (standard.min || 0) && time <= standard.max) {
      return standard.score;
    }
  }
  return 0;
}

export function calculateEightHundredMeterScore(timeStr) {
  const [minute, second] = timeStr.split(".");
  const time = parseInt(minute) * 60 + parseInt(second);

  const standards = girlScoreStandards.eightHundredMeter;
  for (const standard of standards) {
    if (time >= (standard.min || 0) && time <= standard.max) {
      return standard.score;
    }
  }
  return 0;
}

export function calculateOneThousandMeterScore(timeStr) {
  const [minute, second] = timeStr.split(".");
  const time = parseInt(minute) * 60 + parseInt(second);

  const standards = boyScoreStandards.oneThousandMeter;
  for (const standard of standards) {
    if (time >= (standard.min || 0) && time <= standard.max) {
      return standard.score;
    }
  }
  return 0;
}

export function calculatePullUpScore(count) {
  const standards = boyScoreStandards.pullUps;
  for (const standard of standards) {
    if (
      count >= (standard.min || 0) &&
      (standard.max === undefined || count <= standard.max)
    ) {
      return standard.score;
    }
  }
  return 0;
}

// 仰卧起坐
export function calculateSitUpsScore(count) {
  const standards = girlScoreStandards.sitUps;
  for (const standard of standards) {
    if (
      count >= (standard.min || 0) &&
      (standard.max === undefined || count <= standard.max)
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
      count >= (standard.min || 0) &&
      (standard.max === undefined || count <= standard.max)
    ) {
      return standard.score;
    }
  }
  return 0;
}
export function calculateStandingLongJumpScore(distance, isBoy) {
  const standards = isBoy
    ? boyScoreStandards.standingLongJump
    : girlScoreStandards.standingLongJump;
  for (const standard of standards) {
    if (
      distance >= (standard.min || 0) &&
      (standard.max === undefined || distance <= standard.max)
    ) {
      return standard.score;
    }
  }
  return 0;
}

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
