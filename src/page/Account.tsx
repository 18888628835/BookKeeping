import React, { useState } from "react";
import useRecord from "hook/useRecord";
import styled from "styled-components";
import day from "dayjs";
import TypeComponent from "component/Typecomponent";
import { Y } from "./Money";
import useTags from "hook/useTags";
var customParseFormat = require("dayjs/plugin/customParseFormat");
day.extend(customParseFormat);
const Wrap = styled.div`
  > div {
    > div {
      line-height: 40px;
      background-color: rgba(51, 51, 51, 0.064);
    }
    > ul {
      > li {
        display: flex;
        justify-content: space-between;
        > span {
          padding: 10px 16px;
          font-size: 25px;
        }
      }
    }
  }
`;
export default function Count() {
  const [state, setState] = useState<"收入" | "支出">("收入");
  const { getTagName } = useTags();
  const { records } = useRecord();
  const selectedRecords = records.filter((r) => {
    return r.type === state;
  });
  type H = {
    [time: string]: Y[];
  };
  const groupHash: H = {};
  for (let v of selectedRecords) {
    if (!groupHash[v.time]) {
      groupHash[v.time] = [];
    }
    groupHash[v.time].push(v);
  }
  let groupData = Object.keys(groupHash).map((key) => [key, groupHash[key]]);
  return (
    <>
      <TypeComponent
        type={state}
        onChange={() => {
          state === "收入" ? setState("支出") : setState("收入");
        }}
      />
      <Wrap>
        {groupData.map(([time, list], index) => {
          return (
            <div key={time as string}>
              <div>{time}</div>
              <ul>
                {(list as Y[]).map((g) => {
                  return (
                    <li key={g.text}>
                      <span>
                        {getTagName(g.selectTag)
                          ? getTagName(g.selectTag)!.name
                          : ""}
                      </span>
                      <span>{g.text}</span>
                      <span>{g.outPut}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </Wrap>
    </>
  );
}
