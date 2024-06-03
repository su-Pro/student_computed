import { gradeOptions, genderOptions } from '../../../config/index'
import { Form, Input, Button, Image, Popup } from 'antd-mobile'
import { useMemo, useState } from 'react'
import {
	calculateBMIScore,
	calculateLungCapacityScore,
	calculateFiftyMeterScore,
	calculateOneThousandMeterScore,
	calculateEightHundredMeterScore,
	calculatePullUpScore,
	calculateStandingLongJumpScore,
	calculateSitAndReachScore,
	calculateSitUpsScore
} from './computed'
import adImage from '../../../assets/ad.jpg'

// 成绩span对应的styles
const scoreSpanStyle = 'text-sm ml-4 text-gray-500'

// 额外加分对应的styles
const extraScoreSpanStyle = 'text-sm ml-4 text-rose-600'

// 引体向上满分：14个
const PullUpFullScore = 14

// 1000米跑满分时间：3分50秒（230秒）
const OneThousandMeterFullScoreTime = 230
// 仰卧起坐满分成绩：51次
const SitUpFullScore = 51

// 加分映射表，每多做一定次数，对应的加分值
const sitUpBonusMapping = [
	{ excess: 13, bonus: 10 },
	{ excess: 12, bonus: 9 },
	{ excess: 11, bonus: 8 },
	{ excess: 10, bonus: 7 },
	{ excess: 9, bonus: 6 },
	{ excess: 8, bonus: 5 },
	{ excess: 7, bonus: 4 },
	{ excess: 6, bonus: 3 },
	{ excess: 4, bonus: 2 },
	{ excess: 2, bonus: 1 }
]
// 800米跑满分时间：3分30秒（即210秒）
const EightHundredMeterFullScoreTime = 210

// 加分映射表，每减少一定时间（秒），对应的加分值
const eightHundredMeterBonusMapping = [
	{ timeReduction: 50, bonus: 10 },
	{ timeReduction: 45, bonus: 9 },
	{ timeReduction: 40, bonus: 8 },
	{ timeReduction: 35, bonus: 7 },
	{ timeReduction: 30, bonus: 6 },
	{ timeReduction: 25, bonus: 5 },
	{ timeReduction: 20, bonus: 4 },
	{ timeReduction: 15, bonus: 3 },
	{ timeReduction: 10, bonus: 2 },
	{ timeReduction: 5, bonus: 1 }
]

// 计算800米跑加分
const calculateEightHundredMeterBonus = timeStr => {
	const [minutes, seconds] = timeStr.split('.')
	const timeInSeconds = parseInt(minutes) * 60 + parseInt(seconds)

	console.log('输入时间（秒）: ', timeInSeconds)

	if (timeInSeconds < EightHundredMeterFullScoreTime) {
		const timeDifference = EightHundredMeterFullScoreTime - timeInSeconds
		for (const { timeReduction, bonus } of eightHundredMeterBonusMapping) {
			if (timeDifference >= timeReduction) {
				return bonus
			}
		}
	}
	return 0 // 如果未达到加分标准，返回0分
}

// 计算仰卧起坐加分
const calculateSitUpBonus = count => {
	if (count > SitUpFullScore) {
		const excessCount = count - SitUpFullScore
		for (const { excess, bonus } of sitUpBonusMapping) {
			if (excessCount >= excess) {
				return bonus
			}
		}
	}
	return 0 // 如果未达到加分标准，返回0分
}

// 计算引体可以加分多少,最多加10分。超过一个加一分
const calculatePullUpExceedScore = pullUp => {
	console.log(pullUp)
	if (pullUp > 14) {
		return Math.min(10, pullUp - PullUpFullScore)
	}
	return 0
}

// 1000米跑基准时间和加分映射
const timeBonusMapping = [
	{ timeReduction: 35, bonus: 10 },
	{ timeReduction: 32, bonus: 9 },
	{ timeReduction: 29, bonus: 8 },
	{ timeReduction: 26, bonus: 7 },
	{ timeReduction: 23, bonus: 6 },
	{ timeReduction: 20, bonus: 5 },
	{ timeReduction: 16, bonus: 4 },
	{ timeReduction: 12, bonus: 3 },
	{ timeReduction: 8, bonus: 2 },
	{ timeReduction: 4, bonus: 1 }
]

// 根据实际完成时间计算加分
const calculateOneThousandMeterBonusScore = timeStr => {
	const [minutes, seconds] = timeStr.split('.')
	const timeInSeconds = parseInt(minutes) * 60 + parseInt(seconds)

	console.log('输入时间（秒）: ', timeInSeconds)
	if (timeInSeconds < OneThousandMeterFullScoreTime) {
		const timeDifference = OneThousandMeterFullScoreTime - timeInSeconds

		for (const { timeReduction, bonus } of timeBonusMapping) {
			if (timeDifference >= timeReduction) {
				return bonus
			}
		}
	}
	return 0 // 没有加分的情况
}

export default function Chu2Calculate({ onClose, baseInfo }) {
	const { grade, gender } = baseInfo
	// 肺活量
	const [curScore, setScore] = useState({
		lungCapacity: undefined,
		bmi: undefined,
		fiftyMeter: undefined,
		oneThousandMeter: undefined,
		eightHundredMeter: undefined,
		pullUp: undefined,
		standingLongJump: undefined,
		sitAndReach: undefined,
		jumpRope: undefined,
		sitUps: undefined,
		eightTimesFiftyMeter: undefined
	})
	const [showConsultation, setShowConsultation] = useState(false)

	// 引体向上，超出满分的值
	const [pullUpExceed, setPullUpExceed] = useState(0)

	// 1000米跑，额外加分
	const [oneThousandMeterBonus, setOneThousandMeterBonus] = useState(0)

	// 仰卧起坐，额外加分
	const [sitUpBonus, setSitUpBonus] = useState(0)

	// 800米跑，额外加分
	const [eightHundredMeterBonus, setEightHundredMeterBonus] = useState(0)

	const handleValuesChange = (_, values) => {
		// values 是下面表单的值
		const {
			height,
			weight,
			lungCapacity,
			fiftyMeter,
			sitAndReach,
			sitUps,
			oneThousandMeter,
			eightHundredMeter,
			pullUp,
			standingLongJump
		} = values

		// 计算BMI
		if (height && weight) {
			setScore(prev => ({
				...prev,
				bmi: calculateBMIScore(height, weight, gender === 'male')
			}))
		} else {
			setScore(prev => ({
				...prev,
				bmi: undefined
			}))
		}

		// 计算肺活量
		if (lungCapacity) {
			setScore(prev => ({
				...prev,
				lungCapacity: calculateLungCapacityScore(lungCapacity, gender === 'male')
			}))
		} else {
			setScore(prev => ({
				...prev,
				lungCapacity: undefined
			}))
		}

		// 计算50米跑
		if (fiftyMeter) {
			setScore(prev => ({
				...prev,
				fiftyMeter: calculateFiftyMeterScore(fiftyMeter, gender === 'male')
			}))
		} else {
			setScore(prev => ({
				...prev,
				fiftyMeter: undefined
			}))
		}

		// 坐位体前屈
		if (sitAndReach) {
			setScore(prev => ({
				...prev,
				sitAndReach: calculateSitAndReachScore(sitAndReach, gender === 'male')
			}))
		} else {
			setScore(prev => ({
				...prev,
				sitAndReach: undefined
			}))
		}

		// 800米跑
		if (eightHundredMeter) {
			setScore(prev => ({
				...prev,
				eightHundredMeter: calculateEightHundredMeterScore(eightHundredMeter)
			}))
			// 额外加分
			const eightHundredMeterBonus = calculateEightHundredMeterBonus(eightHundredMeter)
			setEightHundredMeterBonus(eightHundredMeterBonus)
		} else {
			setScore(prev => ({
				...prev,
				eightHundredMeter: undefined
			}))
			setEightHundredMeterBonus(0)
		}

		// 1000米跑
		if (oneThousandMeter) {
			setScore(prev => ({
				...prev,
				oneThousandMeter: calculateOneThousandMeterScore(oneThousandMeter)
			}))

			const oneThousandMeterBonus = calculateOneThousandMeterBonusScore(oneThousandMeter)

			setOneThousandMeterBonus(oneThousandMeterBonus)
		} else {
			setScore(prev => ({
				...prev,
				oneThousandMeter: undefined
			}))
			setOneThousandMeterBonus(0)
		}

		// 引体向上
		if (pullUp) {
			setScore(prev => ({
				...prev,
				pullUp: calculatePullUpScore(pullUp)
			}))
			if (pullUp > 14) {
				const pullUpExceed = calculatePullUpExceedScore(pullUp)
				setPullUpExceed(pullUpExceed)
			} else {
				setPullUpExceed(0)
			}
		} else {
			setScore(prev => ({
				...prev,
				pullUp: undefined
			}))
			setPullUpExceed(0)
		}

		// 仰卧起坐
		if (sitUps) {
			setScore(prev => ({
				...prev,
				sitUps: calculateSitUpsScore(sitUps)
			}))
			// 计算仰卧起坐加分
			const sitUpBonus = calculateSitUpBonus(sitUps)
			setSitUpBonus(sitUpBonus)
		} else {
			setScore(prev => ({
				...prev,
				sitUps: undefined
			}))
			setSitUpBonus(0)
		}

		// 立定跳远
		if (standingLongJump) {
			setScore(prev => ({
				...prev,
				standingLongJump: calculateStandingLongJumpScore(standingLongJump, gender === 'male')
			}))
		} else {
			setScore(prev => ({
				...prev,
				standingLongJump: undefined
			}))
		}
	}

	const totalScore = useMemo(() => {
		const {
			lungCapacity,
			fiftyMeter,
			oneThousandMeter,
			eightHundredMeter,
			pullUp,
			sitAndReach,
			standingLongJump,
			bmi,
			jumpRope,
			sitUps,
			eightTimesFiftyMeter
		} = curScore

		const lungCapacityScore = lungCapacity ? lungCapacity * 0.15 : 0
		const bmiScore = bmi ? bmi * 0.15 : 0
		const fiftyMeterScore = fiftyMeter ? fiftyMeter * 0.2 : 0
		const oneThousandMeterScore = oneThousandMeter ? oneThousandMeter * 0.2 : 0
		const eightHundredMeterScore = eightHundredMeter ? eightHundredMeter * 0.2 : 0
		const pullUpScore = pullUp ? pullUp * 0.1 : 0
		const sitAndReachScore = sitAndReach ? sitAndReach * 0.1 : 0
		const standingLongJumpScore = standingLongJump ? standingLongJump * 0.1 : 0
		const jumpRopeScore = jumpRope ? jumpRope * 0.1 : 0
		const sitUpsScore = sitUps ? sitUps * 0.1 : 0
		const eightTimesFiftyMeterScore = eightTimesFiftyMeter ? eightTimesFiftyMeter * 0.1 : 0

		// 额外加分项
		let extrendScore = 0

		// 引体向上超出满分的加分
		extrendScore += pullUpExceed
		// 1000米跑额外加分
		extrendScore += oneThousandMeterBonus
		// 仰卧起坐额外加分
		extrendScore += sitUpBonus
		// 800米跑额外加分
		extrendScore += eightHundredMeterBonus
		const suma =
			lungCapacityScore +
			bmiScore +
			fiftyMeterScore +
			oneThousandMeterScore +
			eightHundredMeterScore +
			pullUpScore +
			sitAndReachScore +
			standingLongJumpScore +
			jumpRopeScore +
			sitUpsScore +
			eightTimesFiftyMeterScore +
			extrendScore
		// 根据得出来的分，判断在哪个区间
		// 80.0 - 100 10分
		// 75.0 - 79.9  9.5分
		// 70.0 - 74.9  8分
		// 65.0 - 69.9  7.5分
		// 60.0 - 64.9  7分
		// 0 - 59.9  5.5分

		if (suma >= 80) {
			return 10
		}
		if (suma >= 75) {
			return 9.5
		}
		if (suma >= 70) {
			return 8
		}
		if (suma >= 65) {
			return 7.5
		}
		if (suma >= 60) {
			return 7
		}
		if (suma >= 0) {
			return 5.5
		}
		return 0
	}, [curScore, eightHundredMeterBonus, oneThousandMeterBonus, pullUpExceed, sitUpBonus])

	return (
		<>
			<Form
				layout="horizontal"
				footer={
					<div
						style={{
							display: 'flex',
							gap: '8px'
						}}
					>
						<Button block color="default" onClick={() => onClose()}>
							重选年级
						</Button>
						<Button block color="primary" onClick={() => setShowConsultation(true)}>
							提分咨询
						</Button>
					</div>
				}
				mode="card"
				onValuesChange={handleValuesChange}
			>
				<Form.Header>
					<span className="text-lg font-bold text-black">{`${
						gradeOptions.find(option => option.value === grade)?.label || '未知年级'
					} ${
						genderOptions.find(option => option.value === gender)?.label || '未知性别'
					}学生 体测总成绩 ${totalScore}`}</span>
				</Form.Header>
				<Form.Item name="height" label="身高">
					<Input type="number" placeholder="单位厘米" />
				</Form.Item>
				<Form.Item name="weight" label="体重">
					<Input type="number" placeholder="单位千克" />
				</Form.Item>
				{curScore?.bmi && <span className={scoreSpanStyle}>单项成绩: {curScore.bmi}</span>}
				<Form.Item name="lungCapacity" label="肺活量">
					<Input type="number" placeholder="单位毫升" />
				</Form.Item>
				{curScore?.lungCapacity !== undefined && (
					<span className={scoreSpanStyle}>单项成绩: {curScore.lungCapacity}</span>
				)}
				<Form.Item name="fiftyMeter" label="50米">
					<Input placeholder="单位秒" />
				</Form.Item>
				{curScore?.fiftyMeter !== undefined && <span className={scoreSpanStyle}>单项成绩: {curScore.fiftyMeter}</span>}
				{
					// 如果是男生，就是1000米跑，女生是800米跑
					gender === 'male' ? (
						<>
							<Form.Item name="oneThousandMeter" label="1000米跑">
								<Input placeholder="单位分.秒" />
							</Form.Item>
							{curScore?.oneThousandMeter !== undefined && (
								<span className={scoreSpanStyle}>单项成绩: {curScore.oneThousandMeter}</span>
							)}
							{
								// 额外加分
								oneThousandMeterBonus > 0 && (
									<span className={extraScoreSpanStyle}>额外加分: {oneThousandMeterBonus}</span>
								)
							}
						</>
					) : (
						<>
							<Form.Item name="eightHundredMeter" label="800米跑">
								<Input placeholder="单位分.秒" />
							</Form.Item>
							{curScore?.eightHundredMeter !== undefined && (
								<span className={scoreSpanStyle}>单项成绩: {curScore.eightHundredMeter}</span>
							)}
							{
								// 额外加分
								eightHundredMeterBonus > 0 && (
									<span className={extraScoreSpanStyle}>额外加分: {eightHundredMeterBonus}</span>
								)
							}
						</>
					)
				}
				{
					// 如果是男生，就是引体向上，女生是仰卧起坐
					gender === 'male' ? (
						<>
							<Form.Item name="pullUp" label="引体向上">
								<Input placeholder="单位次" />
							</Form.Item>
							{curScore?.pullUp !== undefined && <span className={scoreSpanStyle}>单项成绩: {curScore.pullUp}</span>}
							{
								// 额外加分
								pullUpExceed > 0 && <span className={extraScoreSpanStyle}>额外加分: {pullUpExceed}</span>
							}
						</>
					) : (
						<>
							<Form.Item name="sitUps" label="仰卧起坐">
								<Input placeholder="单位次" />
							</Form.Item>
							{curScore?.sitUps !== undefined && <span className={scoreSpanStyle}>单项成绩: {curScore.sitUps}</span>}
							{
								// 额外加分
								sitUpBonus > 0 && <span className={extraScoreSpanStyle}>额外加分: {sitUpBonus}</span>
							}
						</>
					)
				}
				<Form.Item name="sitAndReach" label="坐位体前屈">
					<Input placeholder="单位厘米" />
				</Form.Item>
				{curScore?.sitAndReach !== undefined && (
					<span className={scoreSpanStyle}>单项成绩: {curScore.sitAndReach}</span>
				)}
				<Form.Item name="standingLongJump" label="立定跳远">
					<Input placeholder="单位厘米" />
				</Form.Item>
				{curScore?.standingLongJump !== undefined && (
					<span className={scoreSpanStyle}>单项成绩: {curScore.standingLongJump}</span>
				)}
			</Form>
			<Popup
				visible={showConsultation}
				onMaskClick={() => setShowConsultation(false)}
				bodyStyle={{
					borderTopLeftRadius: '8px',
					borderTopRightRadius: '8px',
					minHeight: '40vh'
				}}
			>
				<Image src={adImage} />
			</Popup>
		</>
	)
}
