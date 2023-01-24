import styled from "@emotion/styled";
import { color } from "../components/constants/colors";

// [Todo] common Page 컨테이너를 여기서 생성
// 그 다음에 App.js에 추가해주기
export const PageLayout = styled.div({
  margin: 0,
  padding: 0,
  width: "100%",
  maxWidth: "100%",
  height: "100%",
  backgroundColor: color.bgGrey,
  color: color.textWhite,
});
