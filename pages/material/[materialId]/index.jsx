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
      hasQuiz: res.quiz,
      data: res.text,
      id: params.materialId,
    },
  };
};

export default function Post({ hasQuiz, data, id }) {
  console.log(hasQuiz);
  return (
    <BaseLayout pageTitle={data.title}>
      <Textbook content={data.content} />
      <div style={{ margin: "30px 0px" }}>
        <h2>テスト/クイズ</h2>
        {hasQuiz.length > 0 ? (
          <Button type="link" href={`${id}/quiz/1`} style={{ margin: "10px" }}>
            テストを受ける
          </Button>
        ) : (
          <>このコンテンツにはテスト・クイズの設定はありません。</>
        )}
      </div>
    </BaseLayout>
  );
}
