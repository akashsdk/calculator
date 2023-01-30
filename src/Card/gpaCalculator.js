import React from "react";
import "./GpaCalculator.css";

import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Space, Select } from "antd";
const onFinish = (values) => {
  console.log("Received values of form:", values);
};



const handleChange = (value) => {
  console.log(`selected ${value}`);
};


export default function GpaCalculator() {
  return (
    <div className="gpaBody">
      <Form
        name="dynamic_form_nest_item"
        onFinish={onFinish}
        style={{
          maxWidth: 600,
        }}
        autoComplete="off"
      >
        <Form.List name="users">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space
                  key={key}
                  style={{
                    display: "flex",
                    marginBottom: 8,
                  }}
                  align="baseline"
                >
                  <Form.Item
                    {...restField}
                    name={[name, "Course"]}
                    rules={[
                      {
                        required: true,
                        message: "Missing Course name",
                      },
                    ]}
                  >
                    <Input placeholder="Course" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "value"]}
                    rules={[
                      {
                        required: true,
                        message: "Missing Grad",
                      },
                    ]}
                  >
                    <Select
                      // defaultValue='A+'
                      style={{
                        width: 120,
                      }}
                      onChange={handleChange}
                      options={[
                        {
                          value: "A+",
                          label: "A+",
                        },
                        {
                          value: "A",
                          label: "A",
                        },
                        {
                          value: "A-",
                          label: "A-",
                        },
                        {
                          value: "B+",
                          label: "B+",
                        },
                        {
                          value: "B",
                          label: "B",
                        },
                        {
                          value: "B-",
                          label: "B-",
                        },
                        {
                          value: "C+",
                          label: "C+",
                        },
                        {
                          value: "C",
                          label: "C",
                        },
                        {
                          value: "D",
                          label: "D",
                        },
                        {
                          value: "F",
                          label: "F",
                        },
                      ]}
                    />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                  style={{
                    maxWidth: 200,
                  }}
                >
                  Add Course
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Gat GPA
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
