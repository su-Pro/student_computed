import { gradeOptions, genderOptions } from "../../../config/index";
import { Form, Input, Button, Image, Popup } from "antd-mobile";
import { useMemo, useState } from "react";
import {
  calculateBMIScore,
  calculateLungCapacityScore,
  calculateFiftyMeterScore,
  calculateOneThousandMeterScore,
  calculateEightHundredMeterScore,
  calculatePullUpScore,
  calculateStandingLongJumpScore,
  calculateSitUpsScore,
} from "./computed";
import adImage from "../../../assets/ad.jpg";

// 成绩span对应的styles
const scoreSpanStyle = "text-sm ml-4 text-gray-500";

export default function Xiao6Calculate({ onClose, baseInfo }) {
  const { grade, gender } = baseInfo;
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
    eightTimesFiftyMeter: undefined,
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
      jumpRope,
      sitUps,
      eightTimesFiftyMeter,
      oneThousandMeter,
      eightHundredMeter,
      pullUp,
      standingLongJump,
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

    // 800米跑
    if (eightHundredMeter) {
      setScore((prev) => ({
        ...prev,
        eightHundredMeter: calculateEightHundredMeterScore(eightHundredMeter),
      }));
    } else {
      setScore((prev) => ({
        ...prev,
        eightHundredMeter: undefined,
      }));
    }

    // 1000米跑
    if (oneThousandMeter) {
      setScore((prev) => ({
        ...prev,
        oneThousandMeter: calculateOneThousandMeterScore(oneThousandMeter),
      }));
    } else {
      setScore((prev) => ({
        ...prev,
        oneThousandMeter: undefined,
      }));
    }

    // 引体向上
    if (pullUp) {
      setScore((prev) => ({
        ...prev,
        pullUp: calculatePullUpScore(pullUp),
      }));
    } else {
      setScore((prev) => ({
        ...prev,
        pullUp: undefined,
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

    // 立定跳远
    if (standingLongJump) {
      setScore((prev) => ({
        ...prev,
        standingLongJump: calculateStandingLongJumpScore(standingLongJump),
      }));
    } else {
      setScore((prev) => ({
        ...prev,
        standingLongJump: undefined,
      }));
    }
  };

  // s-mark: 这里不同年级直接内置了，不需要动态计算了。

  // 根据不同的年级和性别，动态生成不同的表单项
  const differentGradeItems = useMemo(() => {
    // 四年级
    if (grade === "4") {
      return (
        <>
          <Form.Item name="fiftyMeter" label="50米">
            <Input type="number" placeholder="单位秒" />
          </Form.Item>
          <Form.Item name="sitAndReach" label="坐位体前屈">
            <Input placeholder="单位厘米" />
          </Form.Item>
          {/* 一分钟跳绳 */}
          <Form.Item name="jumpRope" label="一分钟跳绳">
            <Input placeholder="单位次" />
          </Form.Item>
          {/* 一分钟仰卧起坐 */}
          <Form.Item name="sitUps" label="一分钟仰卧起坐">
            <Input placeholder="单位次" />
          </Form.Item>
        </>
      );
    }

    // 六年级
    if (grade === "6") {
      return (
        <>
          <Form.Item name="fiftyMeter" label="50米">
            <Input placeholder="单位秒" />
          </Form.Item>
          <Form.Item name="sitAndReach" label="坐位体前屈">
            <Input placeholder="单位厘米" />
          </Form.Item>
          {/* 一分钟跳绳 */}
          <Form.Item name="jumpRope" label="一分钟跳绳">
            <Input placeholder="单位次" />
          </Form.Item>
          {/* 一分钟仰卧起坐 */}
          <Form.Item name="sitUps" label="一分钟仰卧起坐">
            <Input placeholder="单位次" />
          </Form.Item>
          {/* 50米 x 8 折返跑 */}
          <Form.Item name="eightTimesFiftyMeter" label="50米x8折返跑">
            <Input placeholder="单位分.秒" />
          </Form.Item>
        </>
      );
    }

    // 八年级
    if (grade === "8") {
      return (
        <>
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
          {
            // 如果是男生，就是1000米跑，女生是800米跑
            gender === "male" ? (
              <>
                <Form.Item name="oneThousandMeter" label="1000米跑">
                  <Input placeholder="单位分.秒" />
                </Form.Item>
                {curScore?.oneThousandMeter !== undefined && (
                  <span className={scoreSpanStyle}>
                    1000米 单项成绩: {curScore.oneThousandMeter}
                  </span>
                )}
              </>
            ) : (
              <>
                <Form.Item name="eightHundredMeter" label="800米跑">
                  <Input placeholder="单位分.秒" />
                </Form.Item>
                {curScore?.eightHundredMeter !== undefined && (
                  <span className={scoreSpanStyle}>
                    8000米 单项成绩: {curScore.eightHundredMeter}
                  </span>
                )}
              </>
            )
          }
          {
            // 如果是男生，就是引体向上，女生是仰卧起坐
            gender === "male" ? (
              <>
                <Form.Item name="pullUp" label="引体向上">
                  <Input placeholder="单位次" />
                </Form.Item>
                {curScore?.pullUp !== undefined && (
                  <span className={scoreSpanStyle}>
                    引体向上 单项成绩: {curScore.pullUp}
                  </span>
                )}
              </>
            ) : (
              <>
                <Form.Item name="sitUps" label="仰卧起坐">
                  <Input placeholder="单位次" />
                </Form.Item>
                {curScore?.sitUps !== undefined && (
                  <span className={scoreSpanStyle}>
                    仰卧起坐 单项成绩: {curScore.sitUps}
                  </span>
                )}
              </>
            )
          }
          <Form.Item name="standingLongJump" label="立定跳远">
            <Input placeholder="单位厘米" />
          </Form.Item>
          {curScore?.standingLongJump !== undefined && (
            <span className={scoreSpanStyle}>
              立定跳远 单项成绩: {curScore.standingLongJump}
            </span>
          )}
        </>
      );
    }
    return <></>;
  }, [
    curScore.eightHundredMeter,
    curScore.fiftyMeter,
    curScore.oneThousandMeter,
    curScore.pullUp,
    curScore.sitAndReach,
    curScore.sitUps,
    curScore.standingLongJump,
    gender,
    grade,
  ]);

  // 根据权重,以及当前得分，实时计算总分
  /**
   * export const sourceWeight = {
  lungCapacity: 15,
  fiftyMeter: 20,
  oneThousandMeter: 20,
  eightHundredMeter: 20,
  pullUp: 10,
  sitAndReach: 10,
  standingLongJump: 10,
  bmi: 15,
  jumpRope: 10,
  sitUps: 10,
  eightTimesFiftyMeter: 10,
};
   */

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
      eightTimesFiftyMeter,
    } = curScore;

    const lungCapacityScore = lungCapacity ? lungCapacity * 0.15 : 0;
    const bmiScore = bmi ? bmi * 0.15 : 0;
    const fiftyMeterScore = fiftyMeter ? fiftyMeter * 0.2 : 0;
    const oneThousandMeterScore = oneThousandMeter ? oneThousandMeter * 0.2 : 0;
    const eightHundredMeterScore = eightHundredMeter
      ? eightHundredMeter * 0.2
      : 0;
    const pullUpScore = pullUp ? pullUp * 0.1 : 0;
    const sitAndReachScore = sitAndReach ? sitAndReach * 0.1 : 0;
    const standingLongJumpScore = standingLongJump ? standingLongJump * 0.1 : 0;
    const jumpRopeScore = jumpRope ? jumpRope * 0.1 : 0;
    const sitUpsScore = sitUps ? sitUps * 0.1 : 0;
    const eightTimesFiftyMeterScore = eightTimesFiftyMeter
      ? eightTimesFiftyMeter * 0.1
      : 0;

    return (
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
      eightTimesFiftyMeterScore
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
        {
          // 如果是男生，就是1000米跑，女生是800米跑
          gender === "male" ? (
            <>
              <Form.Item name="oneThousandMeter" label="1000米跑">
                <Input placeholder="单位分.秒" />
              </Form.Item>
              {curScore?.oneThousandMeter !== undefined && (
                <span className={scoreSpanStyle}>
                  1000米 单项成绩: {curScore.oneThousandMeter}
                </span>
              )}
            </>
          ) : (
            <>
              <Form.Item name="eightHundredMeter" label="800米跑">
                <Input placeholder="单位分.秒" />
              </Form.Item>
              {curScore?.eightHundredMeter !== undefined && (
                <span className={scoreSpanStyle}>
                  8000米 单项成绩: {curScore.eightHundredMeter}
                </span>
              )}
            </>
          )
        }
        {
          // 如果是男生，就是引体向上，女生是仰卧起坐
          gender === "male" ? (
            <>
              <Form.Item name="pullUp" label="引体向上">
                <Input placeholder="单位次" />
              </Form.Item>
              {curScore?.pullUp !== undefined && (
                <span className={scoreSpanStyle}>
                  引体向上 单项成绩: {curScore.pullUp}
                </span>
              )}
            </>
          ) : (
            <>
              <Form.Item name="sitUps" label="仰卧起坐">
                <Input placeholder="单位次" />
              </Form.Item>
              {curScore?.sitUps !== undefined && (
                <span className={scoreSpanStyle}>
                  仰卧起坐 单项成绩: {curScore.sitUps}
                </span>
              )}
            </>
          )
        }
        <Form.Item name="standingLongJump" label="立定跳远">
          <Input placeholder="单位厘米" />
        </Form.Item>
        {curScore?.standingLongJump !== undefined && (
          <span className={scoreSpanStyle}>
            立定跳远 单项成绩: {curScore.standingLongJump}
          </span>
        )}
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
