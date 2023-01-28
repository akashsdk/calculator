import React, { useState } from "react";
import "../Style/home.css";

import { Button } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

export default function Home() {
  const [page, setPage] = useState(1);

  const onChange = (page) => {
    console.log(page);
    setPage(page);
  };
  return (
    <div className="homeBody">
      <div className="homeLeftBody">
        <div></div>
        {page === 1 ? (
          <div>NormalCalculator</div>
        ) : page === 2 ? (
          <div>ScientificCalculator</div>
        ) : page === 3 ? (
          <div>GpaCalculator</div>
        ) : page === 4 ? (
          <div>Calendar</div>
        ) : (
          <p>Error !!</p>
        )}
      </div>
      <div className="homeMidelBody"></div>

      <div className="homeRightBody">
        <p className="homeRightText">CONTENTS</p>
        <div className="homeLine" />

        <div className="homeRightBox">
          <div className="homeRightIconBox">
            <Button
              shape="circle"
              icon={page === 1 ? <CheckOutlined /> : <CloseOutlined />}
              onClick={() => {
                setPage(1);
              }}
            />
          </div>
          <h2
            style={{
              color: page === 1 ? "black" : "rgb(152, 152, 158)",
              marginLeft: "20px",
            }}
          >
            Calculator
          </h2>
        </div>
        {/* ScientificCalculator */}
        <div className="homeRightBox">
          <div className="homeRightIconBox">
            <Button
              shape="circle"
              icon={page === 2 ? <CheckOutlined /> : <CloseOutlined />}
              onClick={() => {
                setPage(2);
              }}
            />
          </div>
          <h2
            style={{
              color: page === 2 ? "black" : "rgb(152, 152, 158)",
              marginLeft: "20px",
            }}
          >
            Scientific
          </h2>
        </div>
        {/* GpaCalculator */}
        <div className="homeRightBox">
          <div className="homeRightIconBox">
            <Button
              shape="circle"
              icon={page === 3 ? <CheckOutlined /> : <CloseOutlined />}
              onClick={() => {
                setPage(3);
              }}
            />
          </div>
          <h2
            style={{
              color: page === 3 ? "black" : "rgb(152, 152, 158)",
              marginLeft: "20px",
            }}
          >
            GPA Calculator
          </h2>
        </div>
        {/* Calendar  */}
        <div className="homeRightBox">
          <div className="homeRightIconBox">
            <Button
              shape="circle"
              icon={page === 4 ? <CheckOutlined /> : <CloseOutlined />}
              onClick={() => {
                setPage(4);
              }}
            />
          </div>
          <h2
            style={{
              color: page === 4 ? "black" : "rgb(152, 152, 158)",
              marginLeft: "20px",
            }}
          >
            Calendar
          </h2>
        </div>
      </div>
    </div>
  );
}
