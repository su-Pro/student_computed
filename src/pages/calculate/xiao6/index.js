import { gradeOptions, genderOptions } from '../../../config/index'
import { Form, Input, Button, Image, Popup } from 'antd-mobile'
import { useMemo, useState } from 'react'
import {
	calculateBMIScore,
	calculateFiftyMeterScore,
	calculateLungCapacityScore,
	calculateSitUpsScore,
	calculateEightTimesFiftyMeterScore,
	calculateJumpRopeScore,
	calculateSitAndReachScore
} from './computed'
import adImage from '../../../assets/ad.jpg'

// 成绩span对应的styles
const scoreSpanStyle = 'text-sm ml-4 text-gray-500'

// 额外加分对应的styles
const extraScoreSpanStyle = 'text-sm ml-4 text-rose-600'

// 一分钟跳绳满分次数：166次
const jumpRopeFullScoreBoy = 157
const jumpRopeFullScoreGirl = 166

// 加分映射表，每多跳一定次数，对应的加分值
const jumpRopeBonusMapping = [
	{ excess: 40, bonus: 20 },
	{ excess: 38, bonus: 19 },
	{ excess: 36, bonus: 18 },
	{ excess: 34, bonus: 17 },
	{ excess: 32, bonus: 16 },
	{ excess: 30, bonus: 15 },
	{ excess: 28, bonus: 14 },
	{ excess: 26, bonus: 13 },
	{ excess: 24, bonus: 12 },
	{ excess: 22, bonus: 11 },
	{ excess: 20, bonus: 10 },
	{ excess: 18, bonus: 9 },
	{ excess: 16, bonus: 8 },
	{ excess: 14, bonus: 7 },
	{ excess: 12, bonus: 6 },
	{ excess: 10, bonus: 5 },
	{ excess: 8, bonus: 4 },
	{ excess: 6, bonus: 3 },
	{ excess: 4, bonus: 2 },
	{ excess: 2, bonus: 1 }
]

// 计算一分钟跳绳加分
const calculateJumpRopeBonus = (count, isBoy) => {
	const fullScore = isBoy ? jumpRopeFullScoreBoy : jumpRopeFullScoreGirl
	if (count > fullScore) {
		const excessCount = count - fullScore
		for (const { excess, bonus } of jumpRopeBonusMapping) {
			if (excessCount >= excess) {
				return bonus
			}
		}
	}
	return 0 // 如果未达到加分标准，返回0分
}

export default function Xiao6Calculate({ onClose, baseInfo }) {
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
	// 跳绳额外加分
	const [jumpRopeExtraScore, setJumpRopeExtraScore] = useState(0)

	const handleValuesChange = (_, values) => {
		// values 是下面表单的值
		const {
			height,
			weight,
			lungCapacity,
			fiftyMeter,
			sitUps,
			jumpRope,
			eightTimesFiftyMeter,
			// 体前屈
			sitAndReach
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

		// 计算体前屈
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

		// 仰卧起坐
		if (sitUps) {
			setScore(prev => ({
				...prev,
				sitUps: calculateSitUpsScore(sitUps, gender === 'male')
			}))
		} else {
			setScore(prev => ({
				...prev,
				sitUps: undefined
			}))
		}

		// 一分钟跳绳
		if (jumpRope) {
			setScore(prev => ({
				...prev,
				jumpRope: calculateJumpRopeScore(jumpRope, gender === 'male')
			}))
			setJumpRopeExtraScore(calculateJumpRopeBonus(jumpRope, gender === 'male'))
		} else {
			setScore(prev => ({
				...prev,
				jumpRope: undefined
			}))
			setJumpRopeExtraScore(0)
		}

		// 50米x8折返跑
		if (eightTimesFiftyMeter) {
			setScore(prev => ({
				...prev,
				eightTimesFiftyMeter: calculateEightTimesFiftyMeterScore(eightTimesFiftyMeter, gender === 'male')
			}))
		} else {
			setScore(prev => ({
				...prev,
				eightTimesFiftyMeter: undefined
			}))
		}
	}

	const totalScore = useMemo(() => {
		const { lungCapacity, fiftyMeter, sitAndReach, bmi, jumpRope, sitUps, eightTimesFiftyMeter } = curScore

		const lungCapacityScore = lungCapacity ? lungCapacity * 0.15 : 0
		const bmiScore = bmi ? bmi * 0.15 : 0

		const fiftyMeterScore = fiftyMeter ? fiftyMeter * 0.2 : 0
		const sitAndReachScore = sitAndReach ? sitAndReach * 0.1 : 0
		const jumpRopeScore = jumpRope ? jumpRope * 0.1 : 0
		const sitUpsScore = sitUps ? sitUps * 0.2 : 0
		const eightTimesFiftyMeterScore = eightTimesFiftyMeter ? eightTimesFiftyMeter * 0.1 : 0

		return (
			lungCapacityScore +
			bmiScore +
			fiftyMeterScore +
			sitAndReachScore +
			jumpRopeScore +
			sitUpsScore +
			eightTimesFiftyMeterScore +
			jumpRopeExtraScore
		)
	}, [curScore, jumpRopeExtraScore])

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
					} ${genderOptions.find(option => option.value === gender)?.label || '未知性别'}学生 体测总成绩 ${Math.round(
						totalScore
					)}`}</span>
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
				<Form.Item name="sitAndReach" label="坐位体前屈">
					<Input placeholder="单位厘米" />
				</Form.Item>
				{curScore?.sitAndReach !== undefined && (
					<span className={scoreSpanStyle}>单项成绩: {curScore.sitAndReach}</span>
				)}
				<Form.Item name="jumpRope" label="一分钟跳绳">
					<Input placeholder="单位次" />
				</Form.Item>
				{curScore?.jumpRope !== undefined && <span className={scoreSpanStyle}>单项成绩: {curScore.jumpRope}</span>}
				{jumpRopeExtraScore > 0 && <span className={extraScoreSpanStyle}>额外加分: {jumpRopeExtraScore}</span>}
				<Form.Item name="sitUps" label="一分钟仰卧起坐">
					<Input placeholder="单位次" />
				</Form.Item>
				{curScore?.sitUps !== undefined && <span className={scoreSpanStyle}>单项成绩: {curScore.sitUps}</span>}
				<Form.Item name="eightTimesFiftyMeter" label="50米x8折返跑">
					<Input placeholder="单位分.秒" />
				</Form.Item>
				{curScore?.eightTimesFiftyMeter !== undefined && (
					<span className={scoreSpanStyle}>单项成绩: {curScore.eightTimesFiftyMeter}</span>
				)}
			</Form>
			<Popup
				visible={showConsultation}
				onMaskClick={() => setShowConsultation(false)}
				bodyStyle={{
					borderTopLeftRadius: '8px',
					borderTopRightRadius: '8px'
				}}
			>
				<Image src={adImage} />
			</Popup>
		</>
	)
}
