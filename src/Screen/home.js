import React from 'react';
import "../Style/home.css";

import { FloatButton } from 'antd';
import { CalculatorOutlined } from '@ant-design/icons';

export default function home() {
  return (
    <div className='homeBody'>
      <div className='homeLeftBody'>
        aaa
      </div>
      <div className='homeMidelBody'></div>

      <div className='homeRightBody'>
        <p className='homeRightText'>CONTENTS</p>
        <div className='homeLine'/>
        <div className='homeRightBox'>
          <h2>Calculator</h2>
          <div><CalculatorOutlined /></div>
        </div>
      </div>
    </div>
  )
}
