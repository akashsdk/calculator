import React  from "react";
import "../Style/home.css";

import { Button } from "antd";
import { CalculatorOutlined } from "@ant-design/icons";


export default function Home() {
  return (
    <div className="homeBody">
      

      <div className="homeLeftBody"></div>
      <div className="homeMidelBody"></div>

      <div className="homeRightBody">
        <p className="homeRightText">CONTENTS</p>
        <div className="homeLine" />

        <div className="homeRightBox">
          <h2 style={{ opacity: ".6" }}>Calculator</h2>
          <div className="homeRightIconBox">
            <Button shape="circle" icon={<CalculatorOutlined />} />
          </div>
        </div>
        <div className="homeRightBox">
          <h2 style={{ opacity: ".6" }}>Calculator</h2>
          <div className="homeRightIconBox">
            <Button shape="circle" icon={<CalculatorOutlined />} />
          </div>
        </div>
      </div>
    </div>
  );
}
