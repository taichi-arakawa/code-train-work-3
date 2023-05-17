import { Tree } from "antd";
import { useState } from "react";
import { MinusSquareOutlined } from "@ant-design/icons";

const defaultData = [];

const generateData = (num) => {
  for (let i = 0; i < num; i++) {
    const key = `Quiz ${i}`;
    defaultData.push({
      title: key,
      key,
      icon: <MinusSquareOutlined />,
    });
  }
  return defaultData;
};
generateData(10);

export const SiderBar = (_number) => {
  const [gData, setGData] = useState(defaultData);

  return (
    <Tree showIcon className="draggable-tree" blockNode treeData={gData} />
  );
};
