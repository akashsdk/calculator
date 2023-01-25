import React from "react";
import { Button, Result } from "antd";
import { Link } from "react-router-dom";

export default function errorPage() {
  return (
    <div style={{marginTop:'30px'}}>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary">
            <Link  to="/">Go Back</Link>
        </Button>}
      />
    </div>
  );
}
