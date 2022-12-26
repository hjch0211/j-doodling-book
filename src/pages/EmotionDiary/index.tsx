/** @jsxImportSource @emotion/react */
import React from "react";
import { Text, Empty, H1, H2, H3 } from "../../components/elements";
// import { InputRange } from "../../components/";
import { styledEmotionDiary } from "./styled";
import { RangeInput } from "../../components/elements/input/Range";

function EmotionDiary() {
  const { Layout } = styledEmotionDiary;
  return (
    <Layout>
      <Empty height="3rem" />
      <H1>Emotion Diary</H1>
      <Empty height="3rem" />
      <H2>기록하기</H2>
      <Empty height="1rem" />
      <Text>자신의 감정을 매일 기록해 보아요.</Text>
      <Empty height="1rem" />
      {/* <InputRange labelName="sss" step={1} min={0} max={5} /> */}
      <RangeInput step={1} min={0} max={5} />
    </Layout>
  );
}

export default EmotionDiary;
