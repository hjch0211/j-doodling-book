/** @jsxImportSource @emotion/react */
import React from "react";
import { Text, Empty, H1, H3 } from "../../components/elements";
import { styledEmotionDiary } from "./styled";

function EmotionDiary() {
  const { Layout } = styledEmotionDiary;
  return (
    <Layout>
      <Empty height="3rem" />
      <H1>Emotion Diadry</H1>
      <Empty height="3rem" />
      <H3>기록하기</H3>
      <Empty height="1rem" />
      <Text>자신의 감정을 매일 기록해 보아요.</Text>
    </Layout>
  );
}

export default EmotionDiary;
