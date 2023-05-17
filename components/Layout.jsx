import React from "react";

import { Layout, Space } from "antd";
import { SiderBar } from "./SiderBar";
import Link from "next/link";

const { Header, Footer, Content, Sider } = Layout;
const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};
const contentStyle = { padding: "20px", backgroundColor: "#fff" };
const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#3ba0e9",
};
const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
};

export const BaseLayout = ({ children }) => {
  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
        height: "100%",
      }}
      size={[0, 48]}
    >
      <Layout>
        <Header style={headerStyle}>
          <Link href="/">HTML Train</Link>
        </Header>
        <Layout>
          <Sider style={siderStyle}>
            Quiz
            <SiderBar number={10} />
          </Sider>
          <Content style={contentStyle}>{children}</Content>
        </Layout>
        <Footer style={footerStyle}>
          &copy; Track BootCamp Open 2023 Group-K
        </Footer>
      </Layout>
    </Space>
  );
};
