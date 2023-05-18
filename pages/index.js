import React from "react";
import Link from "next/link";
import { List, Menu, Empty } from "antd";
import { BaseLayout } from "../components/Layout";
import { BookTwoTone } from "@ant-design/icons";

export const getServerSideProps = async () => {
  const response = await fetch(`${process.env.BASE_FETCH_URL}/api/texts`, {
    method: "GET",
  });
  const res = await response.json();
  return {
    props: {
      data: res,
    },
  };
};

export default function Home({ data }) {
  return (
    <BaseLayout pageTitle="コンテンツ">
      <List
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<BookTwoTone style={{ fontSize: "40px" }} />}
              title={
                <Link href={`material/${item.id}`}>{item.data.title}</Link>
              }
              description={item.data.summary}
            />
          </List.Item>
        )}
      />
    </BaseLayout>
  );
}
