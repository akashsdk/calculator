import React from "react";
import "./header.css";
import { Button, message } from 'antd';
import { Link } from "react-router-dom";
import { SyncOutlined } from "@ant-design/icons";

export default function header() {
  const [messageApi, contextHolder] = message.useMessage();
  const key = 'updatable';

  const refreshPage = () => {
    window.location.reload(false);
    messageApi.open({
      key,
      type: 'loading',
      content: 'Loading...',
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: 'success',
        content: 'Loaded!',
        duration: 2,
      });
    }, 1000);
  };

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
          <Button type="text" className="headerIconButton" onClick={refreshPage}>
            <SyncOutlined className="headerIcon" />
          </Button>
        </div>
      </div>
      <div style={{ height: "20px" }} />
    </div>
  );
}
