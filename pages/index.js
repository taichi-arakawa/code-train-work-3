import React from "react";
import Link from "next/link";
import { List } from "antd";
import { BaseLayout } from "../components/Layout";
import { BookTwoTone } from "@ant-design/icons";

export const getServerSideProps = async () => {
  const response = await fetch(`${process.env.BASE_FETCH_URL}/api/texts`, {
    method: "GET",
  });
  const res = await response.json();
  // console.log(res);
  return {
    props: {
      data: res,
    },
  };
};

export default function Home({ data }) {
  //console.log(data);
  return (
    <BaseLayout>
      <List
        pagination={"bottom"}
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
