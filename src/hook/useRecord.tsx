import { useState } from "react";
import { Y } from "../page/Money";
const useRecord = () => {
  const initRecord = JSON.parse(localStorage.getItem("record") || "[]");
  const [records, setRecord] = useState<Y[]>(initRecord);
  const addRecord = (record: Y) => {
    alert("保存成功");
    setRecord([...records, record]);
    localStorage.setItem("record", JSON.stringify([...records, record]));
  };
  return { records, addRecord };
};

export default useRecord;
