import Link from "next/link";

export default function Header() {
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
        <Header style={headerStyle}>HTML Train</Header>
        <Layout>
          <Sider style={siderStyle}>
            Quiz
            <SiderBar number={10} />
          </Sider>
          <Content style={contentStyle}>
            {data.map((d) => (
              <Textbook content={d.content} />
            ))}
          </Content>
        </Layout>
        <Footer style={footerStyle}>テスト太郎</Footer>
      </Layout>
    </Space>
  );
}
