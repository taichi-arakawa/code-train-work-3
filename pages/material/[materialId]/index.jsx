import React from "react";

import { Layout, Space, Typography, Button } from "antd";
import { Textbook } from "../../../components/Textbook";
import { BaseLayout } from "/components/Layout";

const { Title } = Typography;

const { Header, Footer, Content } = Layout;

export const getServerSideProps = async ({ params }) => {
  const response = await fetch(
    `${process.env.BASE_FETCH_URL}/api/texts/${params.materialId}`,
    {
      method: "GET",
    }
  );
  const res = await response.json();
  console.log(res);
  return {
    props: {
      data: res,
    },
  };
};

export default function Post({ data }) {
  return (
    <BaseLayout>
      <h1>{data.title}</h1>
      <Textbook content={data.content} />
      <Button type="link" href={`${data.id}/quiz/1`}>
        テストを受ける
      </Button>
    </BaseLayout>
  );
}
