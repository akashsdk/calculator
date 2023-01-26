import React from "react";
import "./header.css";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { SyncOutlined } from "@ant-design/icons";

export default function header() {
  return (
    <div className="headerBody">
      <div className="headerBody2">
        <h1 className="headerTittle">Calculator</h1>
        <div className="headerBox">

          <Button type="dashed" className="headerButton1">
            <Link to="/">Home</Link>
          </Button>

          <Button type="dashed" className="headerButton">
            <Link to="/About">About</Link>
          </Button>

          <Button type="dashed" className="headerButton">
            <Link to="/Contact">Contact</Link>
          </Button>

        </div>
        <div>

          {/* <Button type="text" className="headerButton"> */}
            <SyncOutlined className="headerIcon" />
          {/* </Button> */}

        </div>
      </div>
      <div style={{ height: "20px" }} />
    </div>
  );
}
