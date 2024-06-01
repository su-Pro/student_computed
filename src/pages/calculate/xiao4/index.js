import { gradeOptions, genderOptions } from "../../../config/index";
import { Form, Input, Button, Image, Popup } from "antd-mobile";
import { useMemo, useState } from "react";
import {
  calculateBMIScore,
  calculateLungCapacityScore,
  calculateFiftyMeterScore,
  calculateSitUpsScore,
} from "./computed";
import adImage from "../../../assets/ad.jpg";

// 成绩span对应的styles
const scoreSpanStyle = "text-sm ml-4 text-gray-500";

// S-TODO:

/**1. 更新4年级成绩计算逻辑，成绩区间，占比*/

export default function Xiao4Calculate({ onClose, baseInfo }) {
  const { grade, gender } = baseInfo;
  // 肺活量
  const [curScore, setScore] = useState({
    lungCapacity: undefined,
    bmi: undefined,
    fiftyMeter: undefined,
    sitAndReach: undefined,
    jumpRope: undefined,
    sitUps: undefined,
  });
  const [showConsultation, setShowConsultation] = useState(false);

  const handleValuesChange = (_, values) => {
    // values 是下面表单的值
    const {
      height,
      weight,
      lungCapacity,
      fiftyMeter,
      sitAndReach,
      sitUps,
      jumpRope,
    } = values;

    // 计算BMI
    if (height && weight) {
      setScore((prev) => ({
        ...prev,
        bmi: calculateBMIScore(height, weight, gender === "male"),
      }));
    } else {
      setScore((prev) => ({
        ...prev,
        bmi: undefined,
      }));
    }

    // 计算肺活量
    if (lungCapacity) {
      setScore((prev) => ({
        ...prev,
        lungCapacity: calculateLungCapacityScore(
          lungCapacity,
          gender === "male"
        ),
      }));
    } else {
      setScore((prev) => ({
        ...prev,
        lungCapacity: undefined,
      }));
    }

    // 计算50米跑
    if (fiftyMeter) {
      setScore((prev) => ({
        ...prev,
        fiftyMeter: calculateFiftyMeterScore(fiftyMeter),
      }));
    } else {
      setScore((prev) => ({
        ...prev,
        fiftyMeter: undefined,
      }));
    }

    // 坐位体前屈
    if (sitAndReach) {
      setScore((prev) => ({
        ...prev,
        sitAndReach: calculateSitUpsScore(sitAndReach),
      }));
    } else {
      setScore((prev) => ({
        ...prev,
        sitAndReach: undefined,
      }));
    }

    // 跳绳
    if (jumpRope) {
      setScore((prev) => ({
        ...prev,
        jumpRope: calculateSitUpsScore(jumpRope),
      }));
    } else {
      setScore((prev) => ({
        ...prev,
        jumpRope: undefined,
      }));
    }

    // 仰卧起坐
    if (sitUps) {
      setScore((prev) => ({
        ...prev,
        sitUps: calculateSitUpsScore(sitUps),
      }));
    } else {
      setScore((prev) => ({
        ...prev,
        sitUps: undefined,
      }));
    }
  };

  // 根据权重,以及当前得分，实时计算总分
  const totalScore = useMemo(() => {
    const { lungCapacity, fiftyMeter, sitAndReach, bmi, jumpRope, sitUps } =
      curScore;

    // 肺活量
    const lungCapacityScore = lungCapacity ? lungCapacity * 0.15 : 0;
    // bmi
    const bmiScore = bmi ? bmi * 0.15 : 0;
    // 50米跑
    const fiftyMeterScore = fiftyMeter ? fiftyMeter * 0.2 : 0;
    // 坐位体前屈
    const sitAndReachScore = sitAndReach ? sitAndReach * 0.2 : 0;
    // 跳绳
    const jumpRopeScore = jumpRope ? jumpRope * 0.2 : 0;
    // 仰卧起坐
    const sitUpsScore = sitUps ? sitUps * 0.1 : 0;

    return (
      lungCapacityScore +
      bmiScore +
      fiftyMeterScore +
      sitAndReachScore +
      jumpRopeScore +
      sitUpsScore
    );
  }, [curScore]);

  return (
    <>
      <Form
        layout="horizontal"
        footer={
          <div
            style={{
              display: "flex",
              gap: "8px",
            }}
          >
            <Button block color="default" onClick={() => onClose()}>
              重选年级
            </Button>
            <Button
              block
              color="primary"
              onClick={() => setShowConsultation(true)}
            >
              提分咨询
            </Button>
          </div>
        }
        mode="card"
        onValuesChange={handleValuesChange}
      >
        <Form.Header>
          <span className="text-lg font-bold text-black">{`${
            gradeOptions.find((option) => option.value === grade)?.label ||
            "未知年级"
          } ${
            genderOptions.find((option) => option.value === gender)?.label ||
            "未知性别"
          }学生 体测总成绩 ${totalScore}`}</span>
        </Form.Header>
        <Form.Item name="height" label="身高">
          <Input type="number" placeholder="单位厘米" />
        </Form.Item>
        <Form.Item name="weight" label="体重">
          <Input type="number" placeholder="单位千克" />
        </Form.Item>
        {curScore?.bmi && (
          <span className={scoreSpanStyle}>BMI 单项成绩: {curScore.bmi}</span>
        )}
        <Form.Item name="lungCapacity" label="肺活量">
          <Input type="number" placeholder="单位毫升" />
        </Form.Item>
        {curScore?.lungCapacity !== undefined && (
          <span className={scoreSpanStyle}>
            肺活量 单项成绩: {curScore.lungCapacity}
          </span>
        )}
        <Form.Item name="fiftyMeter" label="50米">
          <Input placeholder="单位秒" />
        </Form.Item>
        {curScore?.fiftyMeter !== undefined && (
          <span className={scoreSpanStyle}>
            50米 单项成绩: {curScore.fiftyMeter}
          </span>
        )}
        <Form.Item name="sitAndReach" label="坐位体前屈">
          <Input placeholder="单位厘米" />
        </Form.Item>
        {curScore?.sitAndReach !== undefined && (
          <span className={scoreSpanStyle}>
            坐位体前屈 单项成绩: {curScore.sitAndReach}
          </span>
        )}
        <Form.Item name="jumpRope" label="一分钟跳绳">
          <Input placeholder="单位次" />
        </Form.Item>
        {curScore?.jumpRope !== undefined && (
          <span className={scoreSpanStyle}>
            一分钟跳绳 单项成绩: {curScore.jumpRope}
          </span>
        )}
        <>
          <Form.Item name="sitUps" label="一分钟仰卧起坐">
            <Input placeholder="单位次" />
          </Form.Item>
          {curScore?.sitUps !== undefined && (
            <span className={scoreSpanStyle}>
              一分钟仰卧起坐 单项成绩: {curScore.sitUps}
            </span>
          )}
        </>
      </Form>
      <Popup
        visible={showConsultation}
        onMaskClick={() => setShowConsultation(false)}
        bodyStyle={{
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
          minHeight: "40vh",
        }}
      >
        <Image src={adImage} />
      </Popup>
    </>
  );
}
