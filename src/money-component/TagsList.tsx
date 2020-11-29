import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
const Wrap = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;
  height: 20vh;
  padding-left: 20px;
  > div {
    margin: 10px 0;
    > button {
      background-color: #feffff;
      border: none;
      outline: none;
      color: #999999;
      border-bottom: 1px solid #999999;
      padding: 0 8px;
    }
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
    > li {
      display: flex;
      height: 24px;
      width: 49px;
      background-color: #f4f5f6;
      border-radius: 8px;
      margin: 5px 15px 5px 0;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      &.selected {
        background-color: #f5da74;
        color: black;
      }
    }
  }
`;
const initialState = [
  { id: 0, name: "衣" },
  { id: 1, name: "食" },
  { id: 2, name: "住" },
  { id: 3, name: "行" },
];
type X = typeof initialState;
const TagsList = () => {
  const [tags, setTags] = useState<X>(initialState);
  const [selectTag, setSelectTag] = useState(-1);
  const onAddTags: (tags: X) => void = (tags: X) => {
    const text: string | null = prompt("请输入表签名");
    if (text === null || text.trim() === "") {
      return null;
    }
    setTags([...tags, { id: Math.random(), name: text }]);
  };
  return (
    <Wrap>
      <div>
        <button
          onClick={() => {
            onAddTags(tags);
          }}
          type="button"
        >
          新建标签
        </button>
      </div>
      <ul>
        {tags.map((tag) => {
          return (
            <li
              className={selectTag === tag.id ? "selected" : ""}
              onClick={() => {
                setSelectTag(tag.id);
              }}
              key={tag.id}
            >
              {tag.name}
            </li>
          );
        })}
      </ul>
    </Wrap>
  );
};

export default TagsList;
