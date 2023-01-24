/**
 * Create a pure color independent of logic
 */
const originColor = {
  grey1: "#434242",
  grey2: "#222222",
  white: "#FFFFFF",
  pastelYellow: "#F3EFE0",
  turquoise: "#22A39F",
};

export const color = {
  ...originColor,
  bgGrey: originColor.grey2,
  textWhite: originColor.white,
};
