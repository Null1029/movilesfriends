import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const index = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.titulo}>Nosotros</Text>
        <Text style={styles.parrafo}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          sunt autem, numquam eius quaerat rem nisi quasi itaque suscipit
          maiores error libero iste aut voluptate quis corporis sint,
          necessitatibus eum.
        </Text>
        <Text style={{ textAlign: "center" }}>
          <Image
            source={require("@/assets/images/icon.png")}
            style={{ width: 300, height: 250 }}
          ></Image>
          <TouchableOpacity style={styles.boton}>
            <Text style={{ textAlign: "center", color: "white" }}>
              Click Aqui
            </Text>
          </TouchableOpacity>
        </Text>
        <Text style={styles.parrafo}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          sunt autem, numquam eius quaerat rem nisi quasi itaque suscipit
          maiores error libero iste aut voluptate quis corporis sint,
          necessitatibus eum.
        </Text>
      </View>
    </ScrollView>
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
