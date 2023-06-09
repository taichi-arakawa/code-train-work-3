import React from "react";
import Link from "next/link";
import prisma from "../lib/prisma";
import { List, Menu, Empty } from "antd";
import { BaseLayout } from "../components/Layout";
import { BookTwoTone } from "@ant-design/icons";

export const getServerSideProps = async () => {
  const material = await prisma.material.findMany({});
  return { props: { data: material } };
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
              title={<Link href={`material/${item.id}`}>{item.title}</Link>}
              description={item.summary}
            />
          </List.Item>
        )}
      />
    </BaseLayout>
  );
}
