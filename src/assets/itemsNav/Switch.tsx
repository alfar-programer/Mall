import React from "react";
import "./swithch.css";

const Switch: React.FC = () => {
  return (
    <div className="checkbox-wrapper-8">
      <input type="checkbox" id="cb3-8" className="tgl tgl-skewed" />
      <label htmlFor="cb3-8" data-tg-on="EN" data-tg-off="AR" className="tgl-btn" />
      <div className="language-text">
        <h1>language :</h1>
        </div>
    </div>
  );
};

export default Switch;
