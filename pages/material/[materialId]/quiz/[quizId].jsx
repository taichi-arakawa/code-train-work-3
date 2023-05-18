import React, { useState } from "react";
import { useRouter } from "next/router";
import { Space, Radio, Button, Progress, List, Anchor } from "antd";
import Link from "next/link";
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
  console.log("[quizid.jsx]", res);
  console.log(res.quiz, "quiz");
  return {
    props: {
      data: quiz,
      material: res.text,
      materialId: params.materialId,
      countOfQuiz: res.quiz.length,
    },
  };
};

export default function Post({ data, material, materialId, countOfQuiz }) {
  const router = useRouter();
  const nextPageId = Number(data.id) + 1;
  const prevPageId = Number(data.id) - 1;

  const pushNextPage = (e) => {
    e.preventDefault();
    if (data.id != countOfQuiz) {
      router.push(`/material/${materialId}/quiz/${nextPageId}`);
    } else {
      router.push(`/material/${materialId}/quiz/result`);
    }
    setValue("");
    setShowed(false);
  };

  const pushPrevPage = (e) => {
    e.preventDefault();
    router.push(`/material/${materialId}/quiz/${prevPageId}`);
  };

  const showAnswer = (e) => {
    setShowed(true);
  };
  const progress = ((data.id - 1) / countOfQuiz) * 100;

  const [value, setValue] = useState("");
  const [showed, setShowed] = useState(false);

  const changeValue = (e) => {
    //console.log(e.target.value);
    setValue(e.target.value);
  };

  const sideBar = (
    <List
      size="small"
      //pagination={{ position: "top", align: "end" }}
      dataSource={material.quiz}
      renderItem={(item) => (
        <List.Item
          style={{
            background: item.id == data.id ? "lightgray" : "#3ba0e9",
            lineWidth: 2,
          }}
        >
          <List.Item.Meta
            title={
              <Link href={`/material/${materialId}/quiz/${item.id}`}>
                {`quiz ${item.id}`}
              </Link>
            }
          />
        </List.Item>
      )}
    />
  );

  return (
    <BaseLayout sideBar={sideBar} pageTitle={material.title}>
      <p>
        Q{data.id} {data.question}
      </p>
      <div>
        <Radio.Group value={value} onChange={changeValue}>
          <Space direction="vertical">
            {data.options.map((o) => (
              <Radio value={o.seq} key={o.seq}>
                {o.seq} {o.option}
              </Radio>
            ))}
          </Space>
        </Radio.Group>
      </div>
      {showed ? (
        <div>
          <div>答え:{data.answer}</div>
          <div>解説:{data.explanation}</div>
        </div>
      ) : (
        <div></div>
      )}

      <Button
        type="primary"
        onClick={pushPrevPage}
        disabled={data.id == 1}
        style={{ margin: "0 10px" }}
      >
        前の問題
      </Button>

      <Button type="primary" onClick={showAnswer} disabled={!showed}>
        解答する
      </Button>

      <Button
        style={{ margin: "0 10px" }}
        type="primary"
        onClick={pushNextPage}
        disabled={showed}
      >
        次の問題
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
