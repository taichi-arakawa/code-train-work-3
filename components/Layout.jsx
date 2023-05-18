import React from "react";
import Image from "next/image";
import { Layout, theme } from "antd";
import Link from "next/link";
const { Header, Footer, Content, Sider } = Layout;
const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#FFF",
  backgroundColor: "#3ba0e9",
};
const footerStyle = {
  textAlign: "center",
};

export const BaseLayout = ({ children, sideBar, pageTitle }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        style={siderStyle}
        // collapsible
        // collapsed={collapsed}
        // onCollapse={(value) => setCollapsed(value)}
        // style={siderStyle}
      >
        <Link href="/">
          <div style={{ margin: "20px 0", textAlign: "center" }}>
            <Image
              src="/logo_background.svg"
              width={64}
              height={64}
              alt="My avatar"
            />
          </div>
        </Link>

        {sideBar}
      </Sider>
      <Layout>
        {/* <Avatar icon={<UserOutlined />} /> */}
        <Header
          style={{
            padding: "0px 40px",
            fontSize: "30px",
            fontWeight: "bold",
            background: colorBgContainer,
          }}
        >
          {pageTitle && pageTitle}
        </Header>
        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            {children}
          </div>
        </Content>

        <Footer style={footerStyle}>
          &copy; Track BootCamp Open 2023 Group-K
        </Footer>
      </Layout>
    </Layout>
  );
};
