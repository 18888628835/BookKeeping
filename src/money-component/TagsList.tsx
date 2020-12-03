import React, { FC } from "react";
import styled from "styled-components";
import useTags from "hook/useTags";
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
      padding: 10px;
      background-color: #f4f5f6;
      border-radius: 8px;
      margin: 5px 15px 5px 0;
      justify-content: center;
      align-items: center;
      &.selected {
        background-color: #f5da74;
        color: black;
      }
    }
  }
`;
type P = {
  selectTag: number;
  onChange: (selectTag: number) => void;
};
const TagsList: FC<P> = (props) => {
  const { tags, onAddTags } = useTags();
  const { selectTag, onChange } = props;
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
                onChange(tag.id);
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
