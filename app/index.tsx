import CustomButton from "@/components/CustomButton";
import CustomText from "@/components/CustomText";
import { Colors } from "@/constants/Colors";
import { useCalculator } from "@/hooks/useCalculator";
import { globalStyles } from "@/styles/global-styles";
import { View } from "react-native";

const CalculatorApp = () => {
  const {
    formula,
    firstNumber,
    clean,
    changeSign,
    removeLastDigit,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    equalOperation,
    buildNumber,
  } = useCalculator();
  return (
    <View style={globalStyles.calculatorContainer}>
      {/* Resultados */}
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <CustomText text={formula} variant="main" />

        {formula === firstNumber ? (
          <CustomText text=" " variant="sub" />
        ) : (
          <CustomText text={firstNumber} variant="sub" />
        )}
      </View>
      {/* Botones */}
      {/* Fila 1 */}
      <View style={globalStyles.row}>
        <CustomButton
          label="C"
          color={Colors.lightGray}
          blackText
          onPress={clean}
        />
        <CustomButton
          label="+/-"
          color={Colors.lightGray}
          blackText
          onPress={changeSign}
        />
        <CustomButton
          label="del"
          color={Colors.lightGray}
          blackText
          onPress={removeLastDigit}
        />
        <CustomButton
          label="÷"
          color={Colors.orange}
          onPress={divideOperation}
        />
      </View>
      {/* Fila 2 */}
      <View style={globalStyles.row}>
        <CustomButton
          label="7"
          color={Colors.darkGray}
          onPress={() => buildNumber("7")}
        />
        <CustomButton
          label="8"
          color={Colors.darkGray}
          onPress={() => buildNumber("8")}
        />
        <CustomButton
          label="9"
          color={Colors.darkGray}
          onPress={() => buildNumber("9")}
        />
        <CustomButton
          label="x"
          color={Colors.orange}
          onPress={multiplyOperation}
        />
      </View>
      {/* Fila 3 */}
      <View style={globalStyles.row}>
        <CustomButton
          label="4"
          color={Colors.darkGray}
          onPress={() => buildNumber("4")}
        />
        <CustomButton
          label="5"
          color={Colors.darkGray}
          onPress={() => buildNumber("5")}
        />
        <CustomButton
          label="6"
          color={Colors.darkGray}
          onPress={() => buildNumber("6")}
        />
        <CustomButton
          label="+"
          color={Colors.orange}
          onPress={addOperation}
        />
      </View>
      {/* Fila 4 */}
      <View style={globalStyles.row}>
        <CustomButton
          label="1"
          color={Colors.darkGray}
          onPress={() => buildNumber("1")}
        />
        <CustomButton
          label="2"
          color={Colors.darkGray}
          onPress={() => buildNumber("2")}
        />
        <CustomButton
          label="3"
          color={Colors.darkGray}
          onPress={() => buildNumber("3")}
        />
        <CustomButton
          label="-"
          color={Colors.orange}
          onPress={subtractOperation}
        />
      </View>

      {/* Fila 5 */}
      <View style={globalStyles.row}>
        <CustomButton
          label="0"
          color={Colors.darkGray}
          doubleSize
          onPress={() => buildNumber("0")}
        />
        <CustomButton
          label="."
          color={Colors.darkGray}
          onPress={() => buildNumber(".")}
        />
        <CustomButton
          label="="
          color={Colors.orange}
          onPress={equalOperation}
        />
      </View>
    </View>
  );
};

export default CalculatorApp;
