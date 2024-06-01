import React, { useState } from "react";
import "./App.css";
import Chu2Calculate from "./pages/calculate/chu2/index";
import Xiao4Calculate from "./pages/calculate/xiao4";
import Xiao6Calculate from "./pages/calculate/xiao4";
import { gradeOptions, genderOptions } from "./config";
import { Button, Form, Selector } from "antd-mobile";

const App = () => {
  const [showCalculate, setShowCalculate] = useState(false);
  // 最终得分成绩 score
  const [form, setForm] = useState({ grade: ["8"], gender: ["male"] });

  const handleFormChange = (name, value) => {
    console.log(name, value);
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (form.grade && form.gender) {
      setShowCalculate(true);
    } else {
      alert("请完整填写信息");
    }
  };

  // 计算不同年级应该展示哪个计算Form
  const CalculateForm = React.useMemo(() => {
    const grade = form.grade[0];

    if (grade === "8") {
      return Chu2Calculate;
    }

    if (grade === "4") {
      return Xiao4Calculate;
    }

    if (grade === "6") {
      return Xiao6Calculate;
    }
  }, [form.grade]);

  return (
    <div>
      {!showCalculate ? (
        <Form mode="card">
          <Form.Header>请选择要查询的学生信息</Form.Header>
          <Form.Item label="年级">
            <Selector
              placeholder="请选择年级"
              options={gradeOptions}
              value={form.grade}
              onChange={(value) => handleFormChange("grade", value)}
            />
          </Form.Item>
          <Form.Item label="性别">
            <Selector
              placeholder="请选择性别"
              options={genderOptions}
              value={form.gender}
              onChange={(value) => handleFormChange("gender", value)}
            />
          </Form.Item>
          <Button color="primary" block onClick={handleSubmit}>
            填写成绩
          </Button>
        </Form>
      ) : (
        <CalculateForm
          onClose={() => {
            setShowCalculate(false);
          }}
          baseInfo={{
            grade: form.grade[0],
            gender: form.gender[0],
          }}
        />
      )}
    </div>
  );
};

export default App;
