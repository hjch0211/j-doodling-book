import { UseControllerProps } from "react-hook-form";
import { TextFieldProps } from "@mui/material";

export type ControlledMuiProps = TextFieldProps & { useControllerProps: UseControllerProps };
