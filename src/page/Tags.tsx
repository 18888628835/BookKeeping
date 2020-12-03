import React from "react";
import useTags from "hook/useTags";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Wrap = styled.section`
  font-size: 20px;
  > ul {
    > li {
      line-height: 44px;
      padding: 6px 20px;
      border-bottom: 1px solid #c2c1c7;
      box-shadow: inset 0px -0.5px 0px #bcbbc1;
      > a {
        display: flex;
        justify-content: space-between;
        > span {
        }
      }
    }
  }
  > button {
    font-size: inherit;
    padding: 9px 16px;
    display: block;
    margin: auto;
    margin-top: 20px;
    background: #f5da74;
    border-radius: 8px;
    color: #333333;
    font-size: inherit;
    outline: none;
    border: none;
  }
`;
export default function Tags() {
  const { tags, onAddTags } = useTags();
  return (
    <>
      <Wrap>
        <ul>
          {tags.map((tag) => {
            return (
              <li key={tag.id}>
                <Link to={`/tags/${tag.id}`}>
                  {tag.name}
                  <span>{">"}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <button
          onClick={() => {
            onAddTags(tags);
          }}
        >
          新建标签
        </button>
      </Wrap>
    </>
  );
}
