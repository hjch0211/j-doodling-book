import React from "react";
import { Text, Empty, H1, H2 } from "../../components/elements";
import { styledEmotionDiary } from "./component";

// [Todo] 모바일에 맞춰서 개발해야 됨
function EmotionDiary() {
  const { Layout, EDRange } = styledEmotionDiary;
  return (
    <Layout>
      <Empty height="3rem" />
      <H1>Emotion Diary</H1>
      <Empty height="3rem" />
      <H2>기록하기</H2>
      <Empty height="1rem" />
      <Text>자신의 감정을 매일 기록해 보아요.</Text>
      <Empty height="1rem" />
      <EDRange step={1} min={0} max={5} />
    </Layout>
  );
}

export default EmotionDiary;
