import React, { useState } from "react";
import "../Style/home.css";
import Calendar from "../Card/Calendars";
import GpaCalculator from "../Card/GpaCalculator";
import NormalCalculator from "../Card/NormalCalculator";
import ScientificCalculator from "../Card/ScientificCalculator";

import { Button, message } from 'antd';
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

export default function Home() {
  const [page, setPage] = useState(1);

  const onChange = (page) => {
    console.log(page);
    setPage(page);
  };

  const [messageApi, contextHolder] = message.useMessage();
  const key = 'updatable';

  //Calculator
  const openMessage1 = () => {
    messageApi.open({
      key,
      type: 'loading',
      content: 'Loading...',
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: 'success',
        content: 'Calculator',
        duration: 2,
      });
    }, 1000);
    setPage(1);
  };

  // ScientificCalculator 
  const openMessage2 = () => {
    messageApi.open({
      key,
      type: 'loading',
      content: 'Loading...',
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: 'success',
        content: 'Scientific',
        duration: 2,
      });
    }, 1000);
    setPage(2);
  };

  //GPA Calculator
  const openMessage3 = () => {
    messageApi.open({
      key,
      type: 'loading',
      content: 'Loading...',
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: 'success',
        content: 'GPA Calculator',
        duration: 2,
      });
    }, 1000);
    setPage(4);
  };

  //Calendar
  const openMessage4 = () => {
    messageApi.open({
      key,
      type: 'loading',
      content: 'Loading...',
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: 'success',
        content: 'Calendar',
        duration: 2,
      });
    }, 1000);
    setPage(4);
  };

  return (
    <div>
      <div className="homeBody">
        <div className="homeRightBody1">
          <p className="homeRightText">CONTENTS</p>
          <div className="homeLine" />

          {/* Calculator */}
          <div className="homeRightBox1">
            <div className="homeRightIconBox">
            {contextHolder}
              <Button
                shape="circle"
                icon={page === 1 ? <CheckOutlined /> : <CloseOutlined />}
                onClick={openMessage1}
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
            {contextHolder}
              <Button
                shape="circle"
                icon={page === 2 ? <CheckOutlined /> : <CloseOutlined />}
                onClick={openMessage2}
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
            {contextHolder}
              <Button
                shape="circle"
                icon={page === 3 ? <CheckOutlined /> : <CloseOutlined />}
                onClick={openMessage3}
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
            {contextHolder}
              <Button
                shape="circle"
                icon={page === 4 ? <CheckOutlined /> : <CloseOutlined />}
                onClick={openMessage4}
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




        <div className="homeLeftBody">
          {page === 1 ? (
            <div>
              <NormalCalculator />
            </div>
          ) : page === 2 ? (
            <div>
              <ScientificCalculator />
            </div>
          ) : page === 3 ? (
            <div className="homeLestBoxShow">
              <GpaCalculator />
            </div>
          ) : page === 4 ? (
            <div className="homeLestBoxShow">
              <Calendar />
            </div>
          ) : (
            <p>Error !!</p>
          )}
        </div>




        <div className="homeMidelBody"></div>
        <div className="homeRightBody">
          <p className="homeRightText">CONTENTS</p>
          <div className="homeLine" />

          {/* Calculator */}
          <div className="homeRightBox1">
            <div className="homeRightIconBox">
            {contextHolder}
              <Button
                shape="circle"
                icon={page === 1 ? <CheckOutlined /> : <CloseOutlined />}
                onClick={openMessage1}
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
            {contextHolder}
              <Button
                shape="circle"
                icon={page === 2 ? <CheckOutlined /> : <CloseOutlined />}
                onClick={openMessage2}
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
            {contextHolder}
              <Button
                shape="circle"
                icon={page === 3 ? <CheckOutlined /> : <CloseOutlined />}
                onClick={openMessage3}
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
            {contextHolder}
              <Button
                shape="circle"
                icon={page === 4 ? <CheckOutlined /> : <CloseOutlined />}
                onClick={openMessage4}
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


      {/* Calculator */}
      {page === 1 ? (
        <div></div>
        // ScientificCalculator 
      ) : page === 2 ? (
        <div></div>
      ) : page === 3 ? (
        //  GpaCalculator
        <div
          style={{ display: "flex", margin: "20px", flexDirection: "column" }}
        >
          <div />
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>
            What is the Full Meaning of CGPA?
          </p>
          <p style={{ fontSize: "20px", marginTop: "-10px", opacity: ".7" }}>
            The full form of CGPA is Cumulative Grade Point Average. For schools
            and colleges, CGPA is used to measure the overall academic
            achievement of a student by awarding A, B, C, D or F grades. CGPA is
            a calculation of the average grade point obtained in all subjects
            except in additional subjects as per the study scheme.
          </p>
          <div
            style={{
              display: "flex",
              marginTop: "20px",
              flexDirection: "column",
              justifyItems: "center",
              alignItems: "center",
            }}
          >
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>
              {" "}
              CGPA Grading System:
            </p>
            <div className="homeDownBody" />
            <div className="homeDownBox">
              <p style={{ fontSize: "20px", flex: "1.3" }}> Number</p>
              <p style={{ fontSize: "20px", flex: "3" }}> Grade</p>
              <p style={{ fontSize: "20px", flex: "1" }}> Point</p>
            </div>

            <div className="homeDownBody" />
            <div className="homeDownBox">
              <p className="homeDownP1"> 80% and above</p>
              <p className="homeDownP2"> A+</p>
              <p className="homeDownP3"> 4.00</p>
            </div>

            <div className="homeDownBody" />
            <div className="homeDownBox">
              <p className="homeDownP1">75% to less than 80%</p>
              <p className="homeDownP2"> A</p>
              <p className="homeDownP3"> 3.75</p>
            </div>
            <div className="homeDownBody" />

            <div className="homeDownBox">
              <p className="homeDownP1">70% to less than 75%</p>
              <p className="homeDownP2"> A-</p>
              <p className="homeDownP3"> 3.50</p>
            </div>
            <div className="homeDownBody" />

            <div className="homeDownBox">
              <p className="homeDownP1">65% to less than 70%</p>
              <p className="homeDownP2"> B+</p>
              <p className="homeDownP3"> 3.25</p>
            </div>
            <div className="homeDownBody" />

            <div className="homeDownBox">
              <p className="homeDownP1">60% to less than 65%</p>
              <p className="homeDownP2"> B</p>
              <p className="homeDownP3"> 3.00</p>
            </div>
            <div className="homeDownBody" />

            <div className="homeDownBox">
              <p className="homeDownP1">55% to less than 60%</p>
              <p className="homeDownP2"> B-</p>
              <p className="homeDownP3"> 2.75</p>
            </div>
            <div className="homeDownBody" />

            <div className="homeDownBox">
              <p className="homeDownP1">50% to less than 55%</p>
              <p className="homeDownP2"> C+</p>
              <p className="homeDownP3"> 2.50</p>
            </div>
            <div className="homeDownBody" />

            <div className="homeDownBox">
              <p className="homeDownP1">45% to less than 50%</p>
              <p className="homeDownP2"> C</p>
              <p className="homeDownP3"> 2.25</p>
            </div>
            <div className="homeDownBody" />

            <div className="homeDownBox">
              <p className="homeDownP1">40% to less than 45%</p>
              <p className="homeDownP2"> D</p>
              <p className="homeDownP3"> 2.00</p>
            </div>
            <div className="homeDownBody" />

            <div className="homeDownBox">
              <p className="homeDownP1"> 40% Less than 40%</p>
              <p className="homeDownP2"> F</p>
              <p className="homeDownP3"> 0.00</p>
            </div>
            <div className="homeDownBody" />
          </div>

          <p style={{ fontSize: "20px", fontWeight: "bold" }}>
            CGPA Calculator:
          </p>
          <p style={{ fontSize: "20px", marginTop: "-10px", opacity: ".7" }}>
            Calculating CGPA depends on Every Semester GPA. Semester GPA
            Calculate by Grade Points and Credit. It’s very easy to calculate
            CGPA online and here you can find your GPA/CGPA easily. You need
            your grade or grade points and Credit. If you have these credentials
            you can easily calculate your CGPA from this online GPA Calculator.
            <br/><br/>
            By using this Online CGPA calculator you will find your semester GPA
            and overall CGPA. If you need to add more subject you can click on
            Add Subject button and if you need to add Semester then you can
            click on Add Next Semester Button.
          </p>
        </div>
        //Calendar
      ) : page === 4 ? (
        <div></div>
      ) : (
        <p>Error !!</p>
      )}
    </div>
  );
}
