import React from "react";
import { useParams, useHistory } from "react-router-dom";
import useTags from "hook/useTags";
import styled from "styled-components";
import { Result } from "antd";
import "animate.css";
import CSSTransitionGroup from "react-addons-css-transition-group";
const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  > div:nth-child(1) {
    position: relative;
    background-color: #f5da74;
    padding: 15px 0;
    text-align: center;
    color: #333333;
    > span {
      position: absolute;
      left: 20px;
    }
  }
  > div:nth-child(2) {
    line-height: 50px;
    display: flex;
    padding: 2px 0;
    box-shadow: inset 0px -0.5px 0px #bcbbc1;
    > input {
      color: #bcbbc1;
      font-size: inherit;
      border: none;
      outline: none;
    }
    > span {
      padding: 0px 15px;
    }
  }

  > button {
    margin-bottom: 0px;
    font-size: inherit;
    line-height: 50px;
    margin: 50px auto;
    padding: 0 15px;
    background-color: #f2da83;
    outline: none;
    border: none;
    border-radius: 8px;
  }
`;
type X = {
  id: string;
};
const Section = styled.section`
  line-height: 56px;
  text-align: center;
`;
const Res = styled(Result)`
  > div:nth-child(1) {
    color: #72c140;
  }
`;
const EditTag = () => {
  const history = useHistory();
  const { tags, onEditTag, removeTag, findIndex } = useTags();
  const param = useParams<X>();
  const tag = tags.find((tag) => {
    return tag.id === Number(param.id);
  })!;
  const index = findIndex(tag);
  const render = (tag: { id: number; name: string }) => {
    return (
      <>
        <div className="tag">
          <span>标签名</span>
          <input
            defaultValue={tag.name}
            onBlur={(e) => {
              onEditTag(index, e.target.value);
            }}
          />
        </div>
        <button
          onClick={() => {
            removeTag(tag);
          }}
        >
          删除标签
        </button>
      </>
    );
  };
  return (
    <Wrap>
      <div>
        <span
          onClick={() => {
            history.goBack();
          }}
        >
          返回
        </span>
        编辑标签
      </div>
      {tag ? (
        render(tag)
      ) : (
        <Section>
          <CSSTransitionGroup
            transitionEnter={true}
            transitionLeave={true}
            transitionEnterTimeout={2500}
            transitionLeaveTimeout={1500}
            transitionName="animated"
          >
            <div
              key="nima"
              className="animate__heartBeat animate__bounce slower"
            >
              <Res status="success" />
            </div>
            <div key="niba" className="animate__heartBeat animate__fadeInUp">
              您已经成功删除标签
            </div>
          </CSSTransitionGroup>
        </Section>
      )}
    </Wrap>
  );
};

export default EditTag;
