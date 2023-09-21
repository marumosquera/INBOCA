import React, { useRef, useEffect, useState } from "react";
import { View, Text, StyleSheet, Animated, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const Intro = () => {
  const [showInBoca, setShowInBoca] = useState(false);
  const [showHola, setShowHola] = useState(true);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const texts = [
    {
      text: "Hello",
      backgroundColor: "#FF8CD8",
      fontSize: 24,
      rotation: "170deg",
      textAlign: "center", // Alineado a la derecha
      width: width * 0.8, // Ancho más grande
      marginVertical: 0, // Margen vertical mayor
    },
    {
      text: "Hola",
      backgroundColor: "#FF8A00",
      fontSize: 28,
      rotation: "10deg",
      textAlign: "center", // Alineado a la izquierda
      width: width * 0.8, // Ancho más grande
      marginVertical: 0, // Margen vertical mayor
    },
    {
      text: "你好",
      backgroundColor: "#00FF00",
      fontSize: 32,
      rotation: "170deg",
      textAlign: "center", // Alineado a la derecha
      width: width * 0.8, // Ancho más grande
      marginVertical: 0, // Margen vertical mayor
    },
    {
      text: "Olá",
      backgroundColor: "#FF5733",
      fontSize: 26,
      rotation: "10deg",
      textAlign: "center", // Alineado a la izquierda
      width: width * 0.8, // Ancho más grande
      marginVertical: 0, // Margen vertical mayor
    },
    {
      text: "Bonjour",
      backgroundColor: "#3498DB",
      fontSize: 30,
      rotation: "170deg",
      textAlign: "center", // Alineado a la derecha
      width: width * 0.8, // Ancho más grande
      marginVertical: 0, // Margen vertical mayor
    },
    {
      text: "Ciao",
      backgroundColor: "#FFC300",
      fontSize: 22,
      rotation: "10deg",
      textAlign: "center", // Alineado a la izquierda
      width: width * 0.8, // Ancho más grande
      marginVertical: 0, // Margen vertical mayor
    },
    {
      text: "こんにちは",
      backgroundColor: "#5E35B1",
      fontSize: 28,
      rotation: "170deg",
      textAlign: "center", // Alineado a la derecha
      width: width * 0.8, // Ancho más grande
      marginVertical: 0, // Margen vertical mayor
    },
    {
      text: "مرحبًا",
      backgroundColor: "#FBC02D",
      fontSize: 24,
      rotation: "10deg",
      textAlign: "center", // Alineado a la izquierda
      width: width * 0.8, // Ancho más grande
      marginVertical: 0, // Margen vertical mayor
    },
    {
      text: "Cześć",
      backgroundColor: "#4CAF50",
      fontSize: 26,
      rotation: "170deg",
      textAlign: "center", // Alineado a la derecha
      width: width * 0.8, // Ancho más grande
      marginVertical: 0, // Margen vertical mayor
    },
    {
      text: "Привет",
      backgroundColor: "#F57C00",
      fontSize: 30,
      rotation: "10deg",
      textAlign: "center", // Alineado a la izquierda
      width: width * 0.8, // Ancho más grande
      marginVertical: 0, // Margen vertical mayor
    },
    {
      text: "Hallo",
      backgroundColor: "#9C27B0",
      fontSize: 24,
      rotation: "170deg",
      textAlign: "center", // Alineado a la derecha
      width: width * 0.8, // Ancho más grande
      marginVertical: 0, // Margen vertical mayor
    },
  ];

  useEffect(() => {
    if (showInBoca) {
      // Anima la escala desde 0.5 a 1 para el texto "inBoca"
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }).start();
    }
  }, [showInBoca, scaleAnim]);

  useEffect(() => {
    if (!showInBoca && showHola) {
      const fadeInAnimation = Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      });

      fadeInAnimation.start(() => {
        setTimeout(() => {
          fadeInAnimation.reset();
          setShowHola(false);

          // Espera antes de mostrar "inBoca"
          setTimeout(() => {
            setShowInBoca(true);
          }, 1200);
        }, 1200);
      });
    }
  }, [showInBoca, fadeAnim, showHola]);

  return (
    <View style={styles.container}>
      {showInBoca ? (
        <Animated.View
          style={[
            styles.inBocaContainer,
            { transform: [{ scale: scaleAnim }] },
          ]}
        >
          <Text style={styles.inBocaText}>inBoca</Text>
          <Text style={styles.sloganText}>Buenos Aires en tus manos</Text>
        </Animated.View>
      ) : (
        <View style={styles.holaContainer}>
          {showHola &&
            texts.map((item, index) => (
              <Animated.Text
                key={index}
                style={[
                  styles.holaText,
                  {
                    opacity: fadeAnim,
                    transform: [{ scale: fadeAnim }, { rotate: item.rotation }],
                    backgroundColor: item.backgroundColor,
                    fontSize: item.fontSize,
                    textAlign: item.textAlign, // Aplica la alineación según el objeto
                    width: item.width, // Aplica el ancho personalizado
                    marginVertical: item.marginVertical, // Aplica el margen vertical personalizado
                  },
                ]}
              >
                {item.text}
              </Animated.Text>
            ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // Fondo negro
  },
  inBocaContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inBocaText: {
    fontSize: 36, // Más grande para "inBoca"
    color: "#FFF", // Letras blancas
  },
  sloganText: {
    fontSize: 30,
    color: "#FF8A00", // "Manos" en naranja
  },
  holaContainer: {
    flexDirection: "row",
    justifyContent: "space-between", // Justificar espacio entre elementos
    paddingHorizontal: 20, // Espacio alrededor del texto
    flexWrap: "wrap", // Ajustar elementos en varias filas
  },
  holaText: {
    marginBottom:3, // Margen vertical mayor
    color: "#FFF", // Letras blancas para "Hola"
    borderRadius: 49, // Borde redondeado
    paddingVertical: 10,
    paddingHorizontal: 30, // Espacio alrededor del texto
  },
});

export default Intro;
