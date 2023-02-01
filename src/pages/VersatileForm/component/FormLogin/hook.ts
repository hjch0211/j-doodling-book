import { useForm } from "react-hook-form";
import { isEmail, isRequired } from "../../../../lib/utils/validation";

const ID = "id";
const PW = "password";

export const useFormLogin = () => {
  const { control, handleSubmit, formState } = useForm();

  // [Todo] reg 작업을 클래스로 빼보자
  const reg = {
    email: {
      control,
      name: ID,
      rules: {
        validate: { isEmail: (val: string) => isEmail(val) || "이메일 형식이 올바르지 않습니다." },
      },
    },
    password: {
      control,
      name: PW,
      rules: {
        validate: { isRequired: (val: string) => isRequired(val) || "비밀번호를 입력해야 합니다." },
      },
    },
  };

  const onSubmit = handleSubmit(async (data) => {
    // [Todo] MSW 작업해서 http request 보내기
    console.log(data);
  });

  // const vldErr = createVldErr(formState, [EMAIL, PW]); // 에러 처리를 위한 코드
  const vldErr = {}; // 에러 처리를 위한 코드

  return { reg, onSubmit, vldErr };
};
