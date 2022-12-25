import { Text, Empty } from "../../components/elements";

// [Todo] 스토리북을 달아보는 것도 좋을 듯
function DesignSystem() {
  return (
    <>
      <Empty height="5rem" />
      <Text as="span">{'<Text as="span" />'}</Text>
      <Empty height="1rem" />
      <Text as="div">{'<Text as="div" />'}</Text>
    </>
  );
}

export default DesignSystem;
