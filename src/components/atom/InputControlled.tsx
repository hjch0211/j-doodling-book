import { TextField, TextFieldProps } from "@mui/material";
import { useController, FieldValues, FieldPath, UseControllerProps } from "react-hook-form";

interface MuiProps {
  textFieldProps?: TextFieldProps;
}

/**
 * @description
 * 제어 컴포넌트를 위해 useController를 이용해 Input 생성
 */
export const InputControlled = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  textFieldProps,
  ...props
}: MuiProps & UseControllerProps<TFieldValues, TName>) => {
  const {
    field,
    fieldState: { error },
  } = useController(props);

  return (
    <TextField
      {...textFieldProps}
      {...field}
      error={!!error}
      helperText={!!error && error.message}
    />
  );
};
