import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    background: {
        flex: 1, //Toma todo el espacio disponible
        backgroundColor: Colors.background,
    },
    calculatorContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 50
    },
    mainResult: {
        color: Colors.textPrimary,
        fontSize: 70,
        textAlign: 'right',
        fontWeight: 400
    },
    subResult: {
        color: Colors.textSecondary,
        fontSize: 40,
        textAlign: 'right',
        fontWeight: 300
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10,
    },
    button:{
        height: 80,
        width: 80,
        backgroundColor: Colors.darkGray,
        justifyContent: 'center',
        marginHorizontal: 10,
        borderRadius: 100
    },
    buttonText: {
        textAlign: 'center',
        color: Colors.textPrimary,
        fontSize: 30,
        fontWeight: '500',
        padding: 10,
    }

})