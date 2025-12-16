import { globalStyles } from "@/styles/global-styles";
import { Text, type TextProps } from "react-native";

interface Props extends TextProps {
  text: string;
  variant?: "main" | "sub";
}

const CustomText = ({ text, variant = "main", ...rest }: Props) => {
  return (
    <Text
      style={[
        variant === "main" && globalStyles.mainResult,
        variant === "sub" && globalStyles.subResult,
      ]}
      numberOfLines={1}
      adjustsFontSizeToFit
      {...rest}
    >
      {text}
    </Text>
  );
};

export default CustomText;
