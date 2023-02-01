import { TextField, TextFieldProps } from "@mui/material";
import { useController, FieldValues, FieldPath, UseControllerProps } from "react-hook-form";

type Prop<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = TextFieldProps & { useControllerProps: UseControllerProps<TFieldValues, TName> };

/**
 * @description
 * 제어 컴포넌트를 위해 useController를 이용해 Input 생성
 */
export const InputControlled = ({ useControllerProps, ...props }: Prop) => {
  const {
    field,
    fieldState: { error },
  } = useController(useControllerProps);

  return <TextField {...props} {...field} error={!!error} helperText={!!error && error.message} />;
};
