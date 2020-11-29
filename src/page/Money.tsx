import Type from "money-component/Type";
import React from "react";
import Remark from "money-component/Remark";
import TagsList from "money-component/TagsList";
import NumberPad from "money-component/NumberPad";
function Money() {
  return (
    <>
      <Type />
      <TagsList />
      <Remark />
      <NumberPad />
    </>
  );
}

export default Money;
