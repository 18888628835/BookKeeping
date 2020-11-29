import React, { useRef, useState } from "react";
import styled from "styled-components";
const Wrap = styled.section`
  height: 8vh;
  display: flex;
  background-color: #f0f1f2;
  > div {
    color: #393a3b;
    display: flex;
    align-items: center;
    padding: 0 20px;
    white-space: nowrap;
  }
  > input {
    color: #c1c2c3;
    outline: none;
    border: none;
    width: 100%;
    background-color: inherit;
    padding-right: 20px;
  }
`;
const Remark = () => {
  const [text, setText] = useState<string>("");
  const ref = useRef<HTMLInputElement>(null);
  const onBlur: (e: React.FocusEvent) => void = (e) => {
    setText((ref.current as HTMLInputElement).value);
  };
  return (
    <Wrap>
      <div>备注</div>
      <input ref={ref} type="text" onBlur={onBlur} />
    </Wrap>
  );
};

export default Remark;
