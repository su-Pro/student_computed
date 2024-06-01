// 评分标准对象
const boyScoreStandards = {
  lungCapacity: [
    { score: 100, min: 3940 },
    { score: 95, min: 3820 },
    { score: 90, min: 3700 },
    { score: 85, min: 3450 },
    { score: 80, min: 3200 },
    { score: 78, min: 3080 },
    { score: 76, min: 2940 },
    { score: 74, min: 2840 },
    { score: 72, min: 2720 },
    { score: 70, min: 2600 },
    { score: 68, min: 2480 },
    { score: 66, min: 2360 },
    { score: 64, min: 2240 },
    { score: 62, min: 2120 },
    { score: 60, min: 2000 },
    { score: 50, min: 1890 },
    { score: 40, min: 1780 },
    { score: 30, min: 1670 },
    { score: 20, min: 1560 },
    { score: 10, min: 1450 },
  ],
  bmi: [
    { score: 100, min: 15.7, max: 22.5 },
    { score: 80, max: 15.6 },
    { score: 80, min: 22.6, max: 25.2 },
    { score: 60, min: 25.3 },
  ],
  fiftyMeter: [
    { score: 100, max: 7.5 },
    { score: 95, max: 7.6 },
    { score: 90, max: 7.7 },
    { score: 85, max: 7.8 },
    { score: 80, max: 7.9 },
    { score: 78, max: 8.1 },
    { score: 76, max: 8.3 },
    { score: 74, max: 8.5 },
    { score: 72, max: 8.7 },
    { score: 70, max: 8.9 },
    { score: 68, max: 9.1 },
    { score: 66, max: 9.3 },
    { score: 64, max: 9.5 },
    { score: 62, max: 9.7 },
    { score: 60, max: 9.9 },
    { score: 50, max: 10.1 },
    { score: 40, max: 10.3 },
    { score: 30, max: 10.5 },
    { score: 20, max: 10.7 },
    { score: 10, max: 10.9 },
  ],
  thousandMeter: [
    { score: 100, max: 230 }, // 3'50" = 3*60 + 50 = 230 秒
    { score: 95, max: 235 }, // 3'55" = 3*60 + 55 = 235 秒
    { score: 90, max: 240 }, // 4'00" = 4*60 + 0 = 240 秒
    { score: 85, max: 247 }, // 4'07" = 4*60 + 7 = 247 秒
    { score: 80, max: 255 }, // 4'15" = 4*60 + 15 = 255 秒
    { score: 78, max: 260 }, // 4'20" = 4*60 + 20 = 260 秒
    { score: 76, max: 265 }, // 4'25" = 4*60 + 25 = 265 秒
    { score: 74, max: 270 }, // 4'30" = 4*60 + 30 = 270 秒
    { score: 72, max: 275 }, // 4'35" = 4*60 + 35 = 275 秒
    { score: 70, max: 280 }, // 4'40" = 4*60 + 40 = 280 秒
    { score: 68, max: 285 }, // 4'45" = 4*60 + 45 = 285 秒
    { score: 66, max: 290 }, // 4'50" = 4*60 + 50 = 290 秒
    { score: 64, max: 295 }, // 4'55" = 4*60 + 55 = 295 秒
    { score: 62, max: 300 }, // 5'00" = 5*60 + 0 = 300 秒
    { score: 60, max: 305 }, // 5'05" = 5*60 + 5 = 305 秒
    { score: 50, max: 325 }, // 5'25" = 5*60 + 25 = 325 秒
    { score: 40, max: 345 }, // 5'45" = 5*60 + 45 = 345 秒
    { score: 30, max: 365 }, // 6'05" = 6*60 + 5 = 365 秒
    { score: 20, max: 385 }, // 6'25" = 6*60 + 25 = 385 秒
    { score: 10, max: 405 }, // 6'45" = 6*60 + 45 = 405 秒
  ],
  pullUps: [
    { score: 100, min: 14 },
    { score: 95, min: 13 },
    { score: 90, min: 12 },
    { score: 85, min: 11 },
    { score: 80, min: 10 },
    { score: 78, min: 9 },
    { score: 76, min: 9 },
    { score: 74, min: 8 },
    { score: 72, min: 8 },
    { score: 70, min: 7 },
    { score: 68, min: 7 },
    { score: 66, min: 6 },
    { score: 64, min: 6 },
    { score: 62, min: 5 },
    { score: 60, min: 5 },
    { score: 50, min: 4 },
    { score: 40, min: 3 },
    { score: 30, min: 2 },
    { score: 20, min: 1 },
    { score: 10, min: 0 },
  ],
  sitAndReach: [
    { score: 100, min: 19.6 },
    { score: 95, min: 17.7 },
    { score: 90, min: 15.8 },
    { score: 85, min: 13.7 },
    { score: 80, min: 11.6 },
    { score: 78, min: 10.3 },
    { score: 76, min: 9 },
    { score: 74, min: 7.7 },
    { score: 72, min: 6.4 },
    { score: 70, min: 5.1 },
    { score: 68, min: 3.8 },
    { score: 66, min: 2.5 },
    { score: 64, min: 1.2 },
    { score: 62, min: -0.1 },
    { score: 60, min: -1.4 },
    { score: 50, min: -2.6 },
    { score: 40, min: -3.8 },
    { score: 30, min: -5 },
    { score: 20, min: -6.2 },
    { score: 10, min: -7.4 },
  ],
  standingLongJump: [
    { score: 100, min: 240 },
    { score: 95, min: 233 },
    { score: 90, min: 226 },
    { score: 85, min: 218 },
    { score: 80, min: 210 },
    { score: 78, min: 206 },
    { score: 76, min: 202 },
    { score: 74, min: 198 },
    { score: 72, min: 194 },
    { score: 70, min: 190 },
    { score: 68, min: 186 },
    { score: 66, min: 182 },
    { score: 64, min: 178 },
    { score: 62, min: 174 },
    { score: 60, min: 170 },
    { score: 50, min: 165 },
    { score: 40, min: 160 },
    { score: 30, min: 155 },
    { score: 20, min: 150 },
    { score: 10, min: 145 },
  ],
};

const girlScoreStandards = {
  lungCapacity: [
    { score: 100, min: 3940 },
    { score: 95, min: 3820 },
    { score: 90, min: 3700 },
    { score: 85, min: 3450 },
    { score: 80, min: 3200 },
    { score: 78, min: 3080 },
    { score: 76, min: 2940 },
    { score: 74, min: 2840 },
    { score: 72, min: 2720 },
    { score: 70, min: 2600 },
    { score: 68, min: 2480 },
    { score: 66, min: 2360 },
    { score: 64, min: 2240 },
    { score: 62, min: 2120 },
    { score: 60, min: 2000 },
    { score: 50, min: 1890 },
    { score: 40, min: 1780 },
    { score: 30, min: 1670 },
    { score: 20, min: 1560 },
    { score: 10, min: 1450 },
  ],
  bmi: [
    { score: 100, min: 15.7, max: 22.5 },
    { score: 80, max: 15.6 },
    { score: 80, min: 22.6, max: 25.2 },
    { score: 60, min: 25.3 },
  ],
  fiftyMeter: [
    { score: 100, max: 7.5 },
    { score: 95, max: 7.6 },
    { score: 90, max: 7.7 },
    { score: 85, max: 7.8 },
    { score: 80, max: 7.9 },
    { score: 78, max: 8.1 },
    { score: 76, max: 8.3 },
    { score: 74, max: 8.5 },
    { score: 72, max: 8.7 },
    { score: 70, max: 8.9 },
    { score: 68, max: 9.1 },
    { score: 66, max: 9.3 },
    { score: 64, max: 9.5 },
    { score: 62, max: 9.7 },
    { score: 60, max: 9.9 },
    { score: 50, max: 10.1 },
    { score: 40, max: 10.3 },
    { score: 30, max: 10.5 },
    { score: 20, max: 10.7 },
    { score: 10, max: 10.9 },
  ],
  thousandMeter: [
    { score: 100, max: 230 }, // 3'50" = 3*60 + 50 = 230 秒
    { score: 95, max: 235 }, // 3'55" = 3*60 + 55 = 235 秒
    { score: 90, max: 240 }, // 4'00" = 4*60 + 0 = 240 秒
    { score: 85, max: 247 }, // 4'07" = 4*60 + 7 = 247 秒
    { score: 80, max: 255 }, // 4'15" = 4*60 + 15 = 255 秒
    { score: 78, max: 260 }, // 4'20" = 4*60 + 20 = 260 秒
    { score: 76, max: 265 }, // 4'25" = 4*60 + 25 = 265 秒
    { score: 74, max: 270 }, // 4'30" = 4*60 + 30 = 270 秒
    { score: 72, max: 275 }, // 4'35" = 4*60 + 35 = 275 秒
    { score: 70, max: 280 }, // 4'40" = 4*60 + 40 = 280 秒
    { score: 68, max: 285 }, // 4'45" = 4*60 + 45 = 285 秒
    { score: 66, max: 290 }, // 4'50" = 4*60 + 50 = 290 秒
    { score: 64, max: 295 }, // 4'55" = 4*60 + 55 = 295 秒
    { score: 62, max: 300 }, // 5'00" = 5*60 + 0 = 300 秒
    { score: 60, max: 305 }, // 5'05" = 5*60 + 5 = 305 秒
    { score: 50, max: 325 }, // 5'25" = 5*60 + 25 = 325 秒
    { score: 40, max: 345 }, // 5'45" = 5*60 + 45 = 345 秒
    { score: 30, max: 365 }, // 6'05" = 6*60 + 5 = 365 秒
    { score: 20, max: 385 }, // 6'25" = 6*60 + 25 = 385 秒
    { score: 10, max: 405 }, // 6'45" = 6*60 + 45 = 405 秒
  ],
  pullUps: [
    { score: 100, min: 14 },
    { score: 95, min: 13 },
    { score: 90, min: 12 },
    { score: 85, min: 11 },
    { score: 80, min: 10 },
    { score: 78, min: 9 },
    { score: 76, min: 9 },
    { score: 74, min: 8 },
    { score: 72, min: 8 },
    { score: 70, min: 7 },
    { score: 68, min: 7 },
    { score: 66, min: 6 },
    { score: 64, min: 6 },
    { score: 62, min: 5 },
    { score: 60, min: 5 },
    { score: 50, min: 4 },
    { score: 40, min: 3 },
    { score: 30, min: 2 },
    { score: 20, min: 1 },
    { score: 10, min: 0 },
  ],
  sitAndReach: [
    { score: 100, min: 19.6 },
    { score: 95, min: 17.7 },
    { score: 90, min: 15.8 },
    { score: 85, min: 13.7 },
    { score: 80, min: 11.6 },
    { score: 78, min: 10.3 },
    { score: 76, min: 9 },
    { score: 74, min: 7.7 },
    { score: 72, min: 6.4 },
    { score: 70, min: 5.1 },
    { score: 68, min: 3.8 },
    { score: 66, min: 2.5 },
    { score: 64, min: 1.2 },
    { score: 62, min: -0.1 },
    { score: 60, min: -1.4 },
    { score: 50, min: -2.6 },
    { score: 40, min: -3.8 },
    { score: 30, min: -5 },
    { score: 20, min: -6.2 },
    { score: 10, min: -7.4 },
  ],
  standingLongJump: [
    { score: 100, min: 240 },
    { score: 95, min: 233 },
    { score: 90, min: 226 },
    { score: 85, min: 218 },
    { score: 80, min: 210 },
    { score: 78, min: 206 },
    { score: 76, min: 202 },
    { score: 74, min: 198 },
    { score: 72, min: 194 },
    { score: 70, min: 190 },
    { score: 68, min: 186 },
    { score: 66, min: 182 },
    { score: 64, min: 178 },
    { score: 62, min: 174 },
    { score: 60, min: 170 },
    { score: 50, min: 165 },
    { score: 40, min: 160 },
    { score: 30, min: 155 },
    { score: 20, min: 150 },
    { score: 10, min: 145 },
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

export function calculateFiftyMeterScore(time, isBoy) {
  const standards = isBoy
    ? boyScoreStandards.fiftyMeter
    : girlScoreStandards.fiftyMeter;
  for (const standard of standards) {
    if (time <= standard.max) {
      return standard.score;
    }
  }
  return 0;
}
export function calculateEightHundredMeterScore(time) {
  const standards = girlScoreStandards.thousandMeter; // 假设使用了女生的1000米标准，实际应该是800米的标准
  for (const standard of standards) {
    if (time <= standard.max) {
      return standard.score;
    }
  }
  return 0; // 如果没有达到最低标准，返回0分
}

/**
 *
 * @param {*} timeStr 用户输入的时间格式，分.秒 例如 3.50 表示 3分50秒
 * @param {*} isBoy
 * @returns
 */
export function calculateOneThousandMeterScore(timeStr, isBoy) {
  // 将用户输入的时间字符串转换为秒数
  const [minute, second] = timeStr.split(".");
  const time = parseInt(minute) * 60 + parseInt(second);

  const standards = isBoy
    ? boyScoreStandards.thousandMeter
    : girlScoreStandards.thousandMeter;
  for (const standard of standards) {
    if (time <= standard.max) {
      return standard.score;
    }
  }
  return 0;
}

export function calculatePullUpScore(count, isBoy) {
  const standards = isBoy
    ? boyScoreStandards.pullUps
    : girlScoreStandards.pullUps;
  for (const standard of standards) {
    if (count >= standard.min) {
      return standard.score;
    }
  }
  return 0;
}

export function calculateSitUpsScore(count, isBoy) {
  const standards = isBoy
    ? boyScoreStandards.sitAndReach
    : girlScoreStandards.sitAndReach;
  for (const standard of standards) {
    if (count >= standard.min) {
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
    if (distance >= standard.min) {
      return standard.score;
    }
  }
  return 0;
}

// export const calculateFinalScore = (formData) => {
//   const {
//     lungCapacity,
//     fiftyMeter,
//     thousandMeter,
//     pullUps,
//     sitAndReach,
//     standingLongJump,
//     height,
//     weight,
//   } = formData;

//   // 将字符串值转换为数字，并处理小数，确保所有字段都有兜底值
//   const lungCapacityNum = parseFloat(lungCapacity) || 0;
//   const fiftyMeterNum = parseFloat(fiftyMeter) || 0;
//   const thousandMeterNum = parseFloat(thousandMeter)
//     ? parseFloat(thousandMeter) * 60
//     : 0; // 注意处理分钟到秒的转换
//   const pullUpsNum = parseFloat(pullUps) || 0;
//   const sitAndReachNum = parseFloat(sitAndReach) || 0;
//   const standingLongJumpNum = parseFloat(standingLongJump) || 0;
//   const heightNum = parseFloat(height) || 0;
//   const weightNum = parseFloat(weight) || 0;

//   // 计算 BMI，当高度和体重都不为0时才计算
//   const bmi = heightNum && weightNum ? weightNum / (heightNum / 100) ** 2 : 0;
//   let totalScore = 0;

//   // 计算各项得分并累加总分
//   totalScore +=
//     (calculateScore(lungCapacityNum, scoreStandards.lungCapacity) *
//       sourceWeight.lungCapacity) /
//     100;
//   totalScore +=
//     (calculateScore(fiftyMeterNum, scoreStandards.fiftyMeter) *
//       sourceWeight.fiftyMeter) /
//     100;
//   totalScore +=
//     (calculateScore(thousandMeterNum, scoreStandards.thousandMeter) *
//       sourceWeight.thousandMeter) /
//     100;
//   totalScore +=
//     (calculateScore(pullUpsNum, scoreStandards.pullUps) *
//       sourceWeight.pullUps) /
//     100;
//   totalScore +=
//     (calculateScore(sitAndReachNum, scoreStandards.sitAndReach) *
//       sourceWeight.sitAndReach) /
//     100;
//   totalScore +=
//     (calculateScore(standingLongJumpNum, scoreStandards.standingLongJump) *
//       sourceWeight.standingLongJump) /
//     100;
//   totalScore +=
//     (calculateScore(bmi, scoreStandards.bmi) * sourceWeight.bmi) / 100;

//   return totalScore;
// };
