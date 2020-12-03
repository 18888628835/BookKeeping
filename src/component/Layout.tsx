import styled from "styled-components";
import React, { FunctionComponent, useState } from "react";
import { NavLink } from "react-router-dom";
import Svg from "./Svg";
const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 375px;
  height: 100vh;
  margin: 0 auto;
`;
const Main = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;
const LinkList = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 20px;
  position: relative;
  border-top: 1px solid #e3e3e3;
  .select {
    color: #333333;
  }
  a:nth-child(2) > div {
    position: absolute;
    left: 50%;
    top: -17px;
    text-align: center;
    transform: translateX(-50%);
    .icon {
      font-size: 43px;
      border-radius: 50%;
      border-top: 3px solid #e9e9e9;
      background-color: #feffff;
      margin-bottom: 5px;
    }
  }
`;
type P = {
  children: JSX.Element[];
};

const initValue = [
  ["/tags", "icon-biaoqian", "标签"],
  ["/", "icon-tianjia", "记账"],
  ["/account", "icon-tubiao4", "明细"],
];
type X = typeof initValue;
const Layout: FunctionComponent<P> = (props) => {
  const state = useState<X>(initValue)[0];
  return (
    <Wrap>
      <Main>{props.children}</Main>
      <LinkList>
        {state.map((v) => {
          return (
            <NavLink key={v[0]} exact to={v[0]} activeClassName="select">
              <Svg name={v[1]} tagName={v[2]} />
            </NavLink>
          );
        })}
      </LinkList>
    </Wrap>
  );
};
export default Layout;
