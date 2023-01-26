import { UseFormRegister, UseFormRegisterReturn, FieldValues } from "react-hook-form";
import { Validations } from "./validation";

type Validate = {
  name: string;
  type: Validations;
  criterion?: number;
  errMsg: string;
};

type CreateRHFRegister = {
  (
    register: UseFormRegister<FieldValues>,
    fieldName: string,
    validate?: Validate
  ): UseFormRegisterReturn;
};

export const createRHFRegister: CreateRHFRegister = (register, fieldName, validate) => {
  return {
    ...register(
      fieldName,
      validate === undefined
        ? {}
        : {
            [validate.name]: {
              validate: (val: string) =>
                validate.criterion === undefined
                  ? validate.type(val)
                  : validate.type(val, validate.criterion),
            },
          }
    ),
  };
};
