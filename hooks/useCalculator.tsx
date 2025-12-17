import { useEffect, useRef, useState } from "react";

enum Operator {
  add = "+",
  subtract = "-",
  multiply = "x",
  divide = "÷",
} //Los valores que puede tener la operacion explicitos

export const useCalculator = () => {
  const [formula, setFormula] = useState<string>("0");
  const [number, setNumber] = useState<string>("0");
  const [firstNumber, setFirstNumber] = useState<string>("0");

  const lastOperation = useRef<Operator>(undefined);

  useEffect(() => {
    //Falta calcular subresultado inferior a la cuenta
    setFormula(number);
  }, [number]);

  //Boton de borrar todo
  const clean = () => {
    setFormula("0");
    setFirstNumber("0");
    setNumber("0");
    lastOperation.current = undefined;
  };

  //Boton de Cambiar de signo
  const changeSign = () => {
    if (number.includes("-")) {
      return setNumber(number.replace("-", ""));
    } else {
      return setNumber("-" + number);
    }
  };

  //Boton de borrar ultimo digito
  const removeLastDigit = () => {
    let currentSign = "";
    let temporalNumber = number;

    //Quita una longitud al string si es negativo (para que no cuente el -)
    if (number.includes("-")) {
      currentSign = "-";
      temporalNumber = number.substring(1);
    }

    if (temporalNumber.length > 1) {
      return setNumber(currentSign + temporalNumber.slice(0, -1)); //Corta el ultimo digito
    }
    setNumber("0");
  };

  const setLastNumber = () => {
    //Calculo previo

    if (number.endsWith(".")) {
      setFirstNumber(number.slice(0, -1));
    }else{
      setFirstNumber(number);
      setNumber("0"); 
    }
  }

  //Boton de dividir
  const divideOperation = ()=>{
    setLastNumber();
    lastOperation.current = Operator.divide;
  }
  //Boton de multiplicar
  const multiplyOperation = ()=>{

  }
  //Boton de restar
  const subtractOperation = ()=>{

  }
  //Boton de sumar
  const addOperation = ()=>{

  }
  //Boton de igual
  const equalOperation = ()=>{

  }

  //Construir numero arriba
  const buildNumber = (input: string) => {
    //Verificar si ya existe el punto decimal que no se pueda agregar otro
    if (number.includes(".") && input === ".") return;

    //Verificar si el numero es 0 o -0
    if (number.startsWith("0") || number.startsWith("-0")) {
      //Si el input es un punto decimal permitirlo
      if (input === ".") {
        return setNumber(number + input);
      }
      //Si el input es 0 y ya hay un punto decimal permitirlo
      if (input === "0" && number.includes(".")) {
        return setNumber(number + input);
      }

      //Si el input es diferente de 0 y no hay punto decimal reemplazar el 0 o -0 (Para que no ponga 01, sino 1)
      if (input !== "0" && !number.includes(".")) {
        return setNumber(input);
      }

      //Evitar el 00000000000
      if (input === "0" && !number.includes(".")) {
        return;
      }
    }
    setNumber(number + input);
  };
  return {
    //Props
    formula,
    number,
    firstNumber,

    //Metodos
    clean,
    changeSign,
    removeLastDigit,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    equalOperation,
    buildNumber,
  };
};
