import React, { useState } from "react";
import "../Style/home.css";

import { Button } from "antd";
import { CalculatorOutlined } from "@ant-design/icons";

export default function Home() {
  const [current, setCurrent] = useState(1);
  const [page, setPage] = useState(1);

  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
    setPage(page);
  };
  return (
    <div className="homeBody">
      <div className="homeLeftBody">
        <div></div>
        {page == 1 ? (
          <div>1</div>
        ) : page == 2 ? (
          <div>2</div>
        ) : page == 3 ? (
          <div>3</div>
        ) : page == 4 ? (
          <div>4</div>
        ) : (
          <p>Error !!</p>
        )}
      </div>
      <div className="homeMidelBody"></div>

      <div className="homeRightBody">
        <p className="homeRightText">CONTENTS</p>
        <div className="homeLine" />

        <div className="homeRightBox">
          <h2 style={{ color: page == 1 ? "black" : "rgb(152, 152, 158)" }}>
            Calculator
          </h2>
          <div className="homeRightIconBox">
            <Button
              shape="circle"
              icon={<CalculatorOutlined />}
              onClick={() => {
                setPage(1);
              }}
            />
          </div>
        </div>
        <div className="homeRightBox">
          <h2 style={{ color: page == 2 ? "black" : "rgb(152, 152, 158)" }}>
            Calculator
          </h2>
          <div className="homeRightIconBox">
            <Button
              shape="circle"
              icon={<CalculatorOutlined />}
              onClick={() => {
                setPage(2);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
