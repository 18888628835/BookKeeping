import Type from "money-component/Type";
import React, { useState } from "react";
import Remark from "money-component/Remark";
import TagsList from "money-component/TagsList";
import NumberPad from "money-component/NumberPad";
type X = {
  type: string;
  selectTag: number;
  text: string;
  outPut: string;
};
function Money() {
  const [formData, setFormData] = useState<X>({
    type: "收入",
    selectTag: -1,
    text: "",
    outPut: "0",
  });
  const onChange: (obj: any) => void = (obj) => {
    setFormData((formData) => {
      return { ...formData, ...obj };
    });
  };
  return (
    <>
      <Type
        type={formData.type}
        onChange={(type: string) => {
          onChange({ type: type });
        }}
      />
      <TagsList
        selectTag={formData.selectTag}
        onChange={(selectTag: number) => {
          onChange({ selectTag: selectTag });
        }}
      />
      <Remark
        text={formData.text}
        onChange={(text) => {
          onChange({ text: text });
        }}
      />
      <NumberPad
        outPut={formData.outPut}
        onChange={(outPut: string) => {
          onChange({ outPut: outPut });
        }}
      />
    </>
  );
}

export default Money;
