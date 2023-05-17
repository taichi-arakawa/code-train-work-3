import React from "react";
import { useRouter } from "next/router";

import { Button, Result } from "antd";

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
      material: res,
    },
  };
};

export default function Post({ material }) {
  const router = useRouter();

  const handleClick = (e) => {
    const firstQuizId = material.quiz[0].id;
    e.preventDefault();
    router.push(`/material/${material.id}/quiz/${firstQuizId}`);
  };
  return (
    <BaseLayout>
      <h1>{material.title}</h1>
      <Result
        status="success"
        title="受験完了"
        subTitle="受験完了"
        extra={[
          <Button type="primary" key="console" href="/">
            マテリアル一覧に戻る
          </Button>,
          <Button key="buy" onClick={handleClick}>
            もう一度受験する
          </Button>,
        ]}
      />
    </BaseLayout>
  );
}
