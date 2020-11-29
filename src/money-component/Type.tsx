import React, { FunctionComponent } from "react";
import styled from "styled-components";
const Wrap = styled.section`
  display: flex;
  height: 10vh;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    font-size: 20px;
    color: #a3a3a3;
    background-color: #f9da61;
    &.select {
      border-bottom: 2px solid black;
      color: #333333;
    }
  }
`;
type P = {
  type: string;
  onChange: (type: string) => void;
};
const Type: FunctionComponent<P> = (props) => {
  const { type, onChange } = props;
  return (
    <Wrap>
      <div
        className={type === "收入" ? "select" : ""}
        onClick={() => {
          onChange("收入");
        }}
      >
        收入
      </div>
      <div
        className={type === "支出" ? "select" : ""}
        onClick={() => {
          onChange("支出");
        }}
      >
        支出
      </div>
    </Wrap>
  );
};

export default Type;
