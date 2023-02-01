import { FieldValues, FieldPath, UseControllerProps } from "react-hook-form";
import { TextFieldProps } from "@mui/material";

export type ControlledMuiProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = TextFieldProps & { useControllerProps: UseControllerProps<TFieldValues, TName> };
