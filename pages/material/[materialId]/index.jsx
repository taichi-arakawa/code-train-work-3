import React from "react";
import { Button } from "antd";
import { Textbook } from "../../../components/Textbook";
import { BaseLayout } from "/components/Layout";

export const getServerSideProps = async ({ params }) => {
  const response = await fetch(
    `${process.env.BASE_FETCH_URL}/api/texts/${params.materialId}`,
    {
      method: "GET",
    }
  );
  const res = await response.json();
  return {
    props: {
      data: res.text,
      id: params.materialId,
    },
  };
};

export default function Post({ data, id }) {
  return (
    <BaseLayout pageTitle={data.title}>
      <Textbook content={data.content} />
      <Button type="link" href={`${id}/quiz/1`} style={{ margin: "10px" }}>
        テストを受ける
      </Button>
    </BaseLayout>
  );
}
