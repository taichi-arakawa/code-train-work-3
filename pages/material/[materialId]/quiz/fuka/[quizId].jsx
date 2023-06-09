import React, { useState } from "react";
import { useRouter } from "next/router";
import { Space, Radio, Button, Progress, List, Anchor } from "antd";
import prisma from "../../../../../lib/prisma";
import Link from "next/link";
import { BaseLayout } from "/components/Layout";

export const getServerSideProps = async ({ params }) => {
  const material = await prisma.material.findUnique({
    where: {
      id: Number(params?.materialId),
    },
  });

  const quiz = await prisma.quiz.findFirst({
    where: {
      materialId: Number(params?.materialId),
      seq: Number(params?.quizId),
    },
    include: {
      Options: {
        select: {
          seq: true,
          option: true,
        },
      },
    },
  });

  const countOfQuiz = await prisma.quiz.count({
    where: {
      materialId: Number(params?.materialId),
    },
  });

  return {
    props: {
      quiz: quiz,
      material: material,
      countOfQuiz: countOfQuiz,
    },
  };
};

export default function Post({ quiz, material, countOfQuiz }) {
  console.log(quiz, material, countOfQuiz);

  const progress = ((quiz.seq - 1) / countOfQuiz) * 100;

  return (
    <BaseLayout pageTitle={material.title}>
      <p>
        Q{quiz.seq} {quiz.question}
      </p>
      <div>
        <Radio.Group>
          <Space direction="vertical">
            {quiz.Options.map((o) => (
              <Radio value={o.seq} key={o.seq}>
                {o.seq} : {o.option}
              </Radio>
            ))}
          </Space>
        </Radio.Group>
      </div>
      <div>
        <div>答え:{quiz.answer}</div>
        <div>解説:{quiz.explanation}</div>
      </div>
      {/*       

      <Button
        type="primary"
        onClick={pushPrevPage}
        disabled={data.id == 1}
        style={{ margin: "0 10px" }}
      >
        前の問題
      </Button>

      <Button type="primary" onClick={showAnswer} disabled={showed}>
        解答する
      </Button>

      <Button
        style={{ margin: "0 10px" }}
        type="primary"
        onClick={pushNextPage}
      >
        次の問題
            </Button>*/}
      <div>
        <Progress
          type="dashboard"
          percent={progress}
          format={() => `${quiz.seq - 1} / ${countOfQuiz}`}
        />
      </div>
    </BaseLayout>
  );
}
