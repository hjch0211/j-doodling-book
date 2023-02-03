import { useForm } from "react-hook-form";
import { isEmail, isRequired } from "../../../../lib/utils/validation";
import { createControlledReg } from "../../../../lib/utils/createControlledReg";

const ID = "id";
const PW = "password";

export const useFormLogin = () => {
  const { control, handleSubmit, formState, setValue } = useForm();
  const createReg = createControlledReg(control);

  const reg = {
    email: createReg(ID, {
      validate: { isEmail: (val: string) => isEmail(val) || "이메일 형식이 올바르지 않습니다." },
    }),
    password: createReg(PW, {
      validate: { isRequired: (val: string) => isRequired(val) || "비밀번호를 입력해야 합니다." },
    }),
  };

  const onSubmit = handleSubmit(async (data) => {
    // [Todo] MSW 작업해서 http request 보내기
    console.log(data);
    console.log(formState.errors);
  });

  return { reg, onSubmit, setValue };
};
