import React from "react";
import { useState } from "react";
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
    color: #343132;
    background-color: #f9da61;
    &.select {
      border-bottom: 2px solid black;
    }
  }
`;
type X = 0 | 1;
const Type = () => {
  const [type, setType] = useState<X>(1);
  const hash = { 收入: 1, 支出: 0 };
  return (
    <Wrap>
      <div
        className={hash["收入"] === type ? "select" : ""}
        onClick={() => {
          setType(1);
        }}
      >
        收入
      </div>
      <div
        className={hash["支出"] === type ? "select" : ""}
        onClick={() => {
          setType(0);
        }}
      >
        支出
      </div>
    </Wrap>
  );
};

export default Type;
