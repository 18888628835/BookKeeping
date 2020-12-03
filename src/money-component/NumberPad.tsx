import React, { FC } from "react";
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
type P = {
  outPut: string;
  onChange: (outPut: string) => void;
  onOk: () => void;
};
const NumberPad: FC<P> = (props) => {
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
  const { outPut, onChange, onOk } = props;
  const onClick: (e: React.MouseEvent) => void = (e) => {
    const a = (e.target as HTMLButtonElement).innerText;
    const array = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const setOutput = (outPut: string) => {
      if (outPut.length > 16) {
        onChange(outPut.slice(0, 16));
      } else {
        onChange(outPut);
      }
    };
    if (outPut === "0" && a !== "ok") {
      setOutput(a);
    } else if (array.indexOf(a) >= 0) {
      setOutput(outPut + a);
    }
    switch (a) {
      case "清空":
        setOutput("0");
        break;
      case "删除":
        setOutput(outPut.slice(0, -1) || "0");
        break;
      case ".":
        if (outPut.indexOf(".") === -1 || outPut === "0") {
          setOutput(outPut + ".");
        }
        break;
      case "0":
        if (outPut !== "0") {
          setOutput(outPut + "0");
        }
        break;
      case "ok":
        onOk();
        break;
      default:
        break;
    }
  };
  return (
    <Wrap>
      <div className="pad">{outPut}</div>
      <div className="number" onClick={onClick}>
        {buttonList.map((v) => {
          return <button key={v}>{v}</button>;
        })}
        <button className="ok">ok</button>
        <button style={{ width: "50%" }}>0</button>
        <button>.</button>
      </div>
    </Wrap>
  );
};
export default NumberPad;
