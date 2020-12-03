import Type from "money-component/Type";
import React, { useState } from "react";
import Remark from "money-component/Remark";
import TagsList from "money-component/TagsList";
import NumberPad from "money-component/NumberPad";
import useRecord from "../hook/useRecord";
import dayjs from "dayjs";
type X = {
  type: string;
  selectTag: number;
  text: string;
  outPut: string;
};
const initialValue = {
  type: "收入",
  selectTag: -1,
  text: "",
  outPut: "0",
};
export type Y = { time: string } & X;
function Money() {
  const [formData, setFormData] = useState<X>(initialValue);
  const onChange: (obj: any) => void = (obj) => {
    setFormData((formData) => {
      return { ...formData, ...obj };
    });
  };
  const { addRecord } = useRecord();
  const onOk = () => {
    const newState = { ...formData, time: dayjs().format("YYYY-MM-DD") };
    addRecord(newState);
    setFormData(initialValue);
  };
  return (
    <>
      <Type
        type={formData.type}
        onChange={(type: string) => {
          onChange({ type });
        }}
      />
      <TagsList
        selectTag={formData.selectTag}
        onChange={(selectTag: number) => {
          onChange({ selectTag });
        }}
      />
      <Remark
        text={formData.text}
        onChange={(text) => {
          onChange({ text });
        }}
      />
      <NumberPad
        outPut={formData.outPut}
        onChange={(outPut: string) => {
          onChange({ outPut });
        }}
        onOk={onOk}
      />
    </>
  );
}

export default Money;
