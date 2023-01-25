import React from "react";
import "./header.css";
import { Button } from "antd";
import { Link } from "react-router-dom";

export default function header() {
  return (
    <div className="headerBody">
      <div className="headerBody2">
        <h1 className="headerTittle">Calculator</h1>
        <div className="headerBox">
          <Button type="dashed" >
          <Link  to="/">Home</Link>
          </Button>
          <Button type="dashed" style={{marginLeft:'20px'}}>
            About
          </Button>
          <Button type="dashed" style={{marginLeft:'20px'}}>
            Contact
          </Button>
        </div>
        <div>aaaaagggg</div>
      </div>
    </div>
  );
}
