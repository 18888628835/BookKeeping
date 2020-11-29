import React, { FC, useRef } from "react";
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
type P = {
  text: string;
  onChange: (text: string) => void;
};
const Remark: FC<P> = (props) => {
  const { onChange } = props;
  const ref = useRef<HTMLInputElement>(null);
  const onBlur: (e: React.FocusEvent) => void = (e) => {
    onChange((ref.current as HTMLInputElement).value);
  };
  return (
    <Wrap>
      <div>备注</div>
      <input ref={ref} type="text" onBlur={onBlur} />
    </Wrap>
  );
};

export default Remark;
