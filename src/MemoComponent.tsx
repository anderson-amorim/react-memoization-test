import React from "react";

type Props = {
  value?: string;
  obj?: {
    id: number;
    value: string;
  };
  list?: string[];
  element?: JSX.Element;
  onLoad?: () => void;
};

const MemoComponent: React.FC<Props> = ({
  value = "",
  obj = {},
  list = [],
  element,
  onLoad,
}) => {
  console.log("MemoComponent rendered", { value, obj, onLoad, element, list });
  return (
    <div style={styles}>
      <div>
        Value: <code>{value}</code>
      </div>
      <div>
        Obj: <code>{JSON.stringify(obj)}</code>
      </div>
      <div>
        List: <code>{JSON.stringify(list)}</code>
      </div>
      <div>
        Element: <code>{element}</code>
      </div>
      <div>
        OnLoad: <code>{onLoad && onLoad.toString()}</code>
      </div>
    </div>
  );
};

const styles: React.CSSProperties = {
  marginBottom: 10,
  border: "1px solid #FFF",
  padding: 10,
  width: 600,
  textAlign: "left",
  fontSize: 18,
};

export default React.memo(MemoComponent);
