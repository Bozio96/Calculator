import CustomButton from "@/components/CustomButton";
import CustomText from "@/components/CustomText";
import { Colors } from "@/constants/Colors";
import { globalStyles } from "@/styles/global-styles";
import { View } from "react-native";

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      {/* Resultados */}
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <CustomText text="80 + 20" variant="main" />
        <CustomText text="100" variant="sub" />
      </View>
      {/* Botones */}
      {/* Fila 1 */}
      <View style={globalStyles.row}>
        <CustomButton label="C" color={Colors.lightGray} blackText />
        <CustomButton label="+/-" color={Colors.lightGray} blackText />
        <CustomButton label="del" color={Colors.lightGray} blackText />
        <CustomButton label="÷" color={Colors.orange} />
      </View>
      {/* Fila 2 */}
      <View style={globalStyles.row}>
        <CustomButton label="7" color={Colors.darkGray} />
        <CustomButton label="8" color={Colors.darkGray} />
        <CustomButton label="9" color={Colors.darkGray} />
        <CustomButton label="x" color={Colors.orange} />
      </View>
      {/* Fila 3 */}
      <View style={globalStyles.row}>
        <CustomButton label="4" color={Colors.darkGray} />
        <CustomButton label="5" color={Colors.darkGray} />
        <CustomButton label="6" color={Colors.darkGray} />
        <CustomButton label="+" color={Colors.orange} />
      </View>
      {/* Fila 4 */}
      <View style={globalStyles.row}>
        <CustomButton label="1" color={Colors.darkGray} />
        <CustomButton label="2" color={Colors.darkGray} />
        <CustomButton label="3" color={Colors.darkGray} />
        <CustomButton label="-" color={Colors.orange} />
      </View>
      
      {/* Fila 5 */}
      <View style={globalStyles.row}>
        <CustomButton label="0" color={Colors.darkGray} doubleSize />
        <CustomButton label="." color={Colors.darkGray} />
        <CustomButton label="=" color={Colors.orange} />
      </View>
    </View>
  );
};

export default CalculatorApp;
