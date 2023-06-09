import React from "react";
import { Button } from "antd";
import prisma from "../../../lib/prisma";
import { Textbook } from "../../../components/Textbook";
import { BaseLayout } from "/components/Layout";

export const getServerSideProps = async ({ params }) => {
  const material = await prisma.material.findUnique({
    where: {
      id: Number(params?.materialId),
    },
    include: {
      quiz: true,
    },
  });
  return {
    props: { material },
  };
};

export default function Post({ material }) {
  console.log(material);
  return (
    <BaseLayout pageTitle={material.title}>
      <Textbook content={material.content} />
      <div style={{ margin: "30px 0px" }}>
        <h2>テスト/クイズ</h2>
        {material.quiz.length != 0 ? (
          <Button
            type="link"
            href={`${material.id}/quiz/1`}
            style={{ margin: "10px" }}
          >
            テストを受ける
          </Button>
        ) : (
          <>このコンテンツにはテスト・クイズの設定はありません。</>
        )}
      </div>
    </BaseLayout>
  );
}
