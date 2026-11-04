import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Viajeros del mundo</Text>
      <Text style={styles.parrafo}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, sunt
        autem, numquam eius quaerat rem nisi quasi itaque suscipit maiores error
        libero iste aut voluptate quis corporis sint, necessitatibus eum.
      </Text>
      <Text style={{ textAlign: "center" }}>
        <Image
          source={require("@/assets/images/logo.png")}
          style={{ width: 300, height: 250 }}
        ></Image>
        <TouchableOpacity
          style={styles.boton}
          onPress={() => router.push("/contactos")}
        >
          <Text style={{ textAlign: "center", color: "white" }}>
            Click Aqui
          </Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  titulo: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 10,
  },

  parrafo: {
    fontSize: 14,
    lineHeight: 30,
  },

  boton: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 10,
  },
});
