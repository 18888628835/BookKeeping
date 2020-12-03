import TypeComponent from "component/Typecomponent";
import React, { FunctionComponent } from "react";
type P = {
  type: string;
  onChange: (type: string) => void;
};
const Type: FunctionComponent<P> = (props) => {
  const { type, onChange } = props;
  return <TypeComponent type={type} onChange={onChange} />;
};

export default Type;
