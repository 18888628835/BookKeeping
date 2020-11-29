import React, { useState } from "react";
import styled from "styled-components";
const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  .pad {
    display: flex;
    flex-direction: row-reverse;
    font-size: 20px;
    line-height: 55px;
    margin-right: 16px;
  }
  .number {
    margin-right: -1px;
    button {
      float: left;
      outline: none;
      font-size: 18px;
      border: 1px solid #dcddde;
      border-left: none;
      border-bottom: none;
      width: 25%;
      height: 64px;
      display: table;
    }
    .ok {
      height: 128px;
      float: right;
    }
  }
`;

const NumberPad = () => {
  const buttonList = [
    "1",
    "2",
    "3",
    "清空",
    "4",
    "5",
    "6",
    "删除",
    "7",
    "8",
    "9",
  ];
  const [outPut, setOutPut] = useState<string>("0");
  const onClick: (e: React.MouseEvent) => void = (e) => {
    const a = (e.target as HTMLButtonElement).innerText;
    const array = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    if (outPut === "0" && a !== "清空" && a !== "删除") {
      setOutPut(a);
    } else if (array.indexOf(a) >= 0) {
      setOutPut(outPut + a);
    } else if (a === "清空") {
      setOutPut("0");
    } else if (a === "删除") {
      setOutPut(outPut.slice(0, -1) || "0");
    }
  };
  const onPoint = () => {
    if (outPut.indexOf(".") === -1) {
      setOutPut(outPut + ".");
    }
  };
  const onZero = () => {
    if (outPut !== "0") {
      setOutPut(outPut + "0");
    }
  };
  return (
    <Wrap>
      <div className="pad">{outPut}</div>
      <div className="number">
        {buttonList.map((v) => {
          return (
            <button onClick={onClick} key={v}>
              {v}
            </button>
          );
        })}
        <button className="ok">ok</button>
        <button onClick={onZero} style={{ width: "50%" }}>
          0
        </button>
        <button onClick={onPoint}>.</button>
      </div>
    </Wrap>
  );
};

export default NumberPad;
