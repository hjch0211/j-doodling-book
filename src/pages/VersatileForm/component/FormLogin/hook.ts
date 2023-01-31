import { useForm } from "react-hook-form";
import { isEmail, isRequired } from "../../../../lib/utils/validation";

const ID = "id";
const PW = "password";

export const useFormLogin = () => {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: { id: "", password: "" },
  });

  // [Todo] reg 작업을 함수로 빼보자
  const reg = {
    email: {
      ...register(ID, {
        validate: { isEmail: (val) => isEmail(val) || "이메일 형식이 올바르지 않습니다." },
      }),
    },
    password: {
      ...register(PW, {
        validate: { isRequired: (val) => isRequired(val) || "비밀번호를 입력해야 합니다." },
      }),
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
