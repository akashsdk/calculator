import React, {useState}  from "react";
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
      {page == 1 ? (
        <p className="noticeHedertext">Board-1</p>
      ) : page == 2 ? (
        // Calendar
        <p className="noticeHedertext">Calendar</p>
      ) : page == 3 ? (
        // Notice Board
        <p className="noticeHedertext">Notice Board</p>
      ) : page == 4 ? (
        // Events
        <p className="noticeHedertext">Events</p>
      ) : page == 5 ? (
        <p className="noticeHedertext">Board-5</p>
      ) : (
        // Error Page
        <p className="noticeHedertext">Error !!</p>
      )}
      </div>
      <div className="homeMidelBody"></div>

      <div className="homeRightBody">
        <p className="homeRightText">CONTENTS</p>
        <div className="homeLine" />

        <div className="homeRightBox">
          <h2 style={{ color: page == 1 ? 'black' : 'rgb(152, 152, 158)', }}>Calculator</h2>
          <div className="homeRightIconBox">
            <Button shape="circle" icon={<CalculatorOutlined />} 
            onClick={() => {
              setPage(1);
            }}/>
          </div>
        </div>
        <div className="homeRightBox">
          <h2 style={{ color: page == 2 ? 'black' : 'rgb(152, 152, 158)', }}>Calculator</h2>
          <div className="homeRightIconBox">
            <Button shape="circle" icon={<CalculatorOutlined />} 
            onClick={() => {
              setPage(2);
            }}/>
          </div>
        </div>
      </div>
    </div>
  );
}
