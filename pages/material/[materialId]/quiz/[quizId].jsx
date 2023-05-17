import React from "react";
import { useRouter } from "next/router";

import { Space, Radio, Button, Progress } from "antd";

import { BaseLayout } from "/components/Layout";

export const getServerSideProps = async ({ params }) => {
  const response = await fetch(
    `${process.env.BASE_FETCH_URL}/api/texts/${params.materialId}`,
    {
      method: "GET",
    }
  );
  const res = await response.json();
  const quiz = res.quiz.find((q) => q.id == params.quizId);
  console.log(res);

  return {
    props: {
      data: quiz,
      material: res,
      countOfQuiz: res.quiz.length,
    },
  };
};

function arrayShuffle(array) {
  for (let i = array.length - 1; 0 < i; i--) {
    // 0〜(i+1)の範囲で値を取得
    let r = Math.floor(Math.random() * (i + 1));

    // 要素の並び替えを実行
    let tmp = array[i];
    array[i] = array[r];
    array[r] = tmp;
  }
  return array;
}

export default function Post({ data, material, countOfQuiz }) {
  const router = useRouter();
  const nextPageId = Number(data.id) + 1;

  const handleClick = (e) => {
    e.preventDefault();
    if (data.id != countOfQuiz) {
      router.push(`/material/${material.id}/quiz/${nextPageId}`);
    } else {
      router.push(`/material/${material.id}/quiz/result`);
    }
  };

  const progress = ((data.id - 1) / countOfQuiz) * 100;
  var value = "";
  return (
    <BaseLayout>
      <h1>{material.title}</h1>
      <p>
        Q{data.id} {data.question}
      </p>
      <div>
        <Radio.Group value={value}>
          <Space direction="vertical">
            {data.options.map((o) => (
              <Radio value={o.seq} key={o.seq}>
                {o.seq} {o.option}
              </Radio>
            ))}
          </Space>
        </Radio.Group>
      </div>
      <div>答え:{data.answer}</div>
      <div>解説:{data.explanation}</div>
      <Button type="primary" onClick={handleClick}>
        解答する
      </Button>
      <div>
        <Progress
          type="dashboard"
          percent={progress}
          format={() => `${data.id - 1} / ${countOfQuiz}`}
        />
      </div>
    </BaseLayout>
  );
}
