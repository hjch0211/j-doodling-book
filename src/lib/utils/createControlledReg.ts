import {
  Control,
  FieldValues,
  FieldPath,
  RegisterOptions,
  FieldPathValue,
  UseControllerProps,
} from "react-hook-form";

type CreateReg<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  (
    name: TName,
    rules?: Omit<
      RegisterOptions<TFieldValues, TName>,
      "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
    >,
    shouldUnregister?: boolean,
    defaultValue?: FieldPathValue<TFieldValues, TName>
  ): UseControllerProps;
};

export const createControlledReg = (control: Control) => {
  const createReg: CreateReg = (name, rules, shouldUnregister, defaultValue) => {
    return {
      control,
      name,
      rules,
      shouldUnregister,
      defaultValue,
    };
  };
  return createReg;
};
