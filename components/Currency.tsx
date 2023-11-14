import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export const CurrencyComponent = (currency: any ) => {
    return currency && (
        <View style={styles.item}>
        <TouchableOpacity style={styles.rounded} onPress={() =>{}}>
          <Image
            source={{ uri: currency.currency.flag }}
            style={styles.image}
            resizeMode={"cover"}
          />
        </TouchableOpacity>
        <Text style={styles.code}>{currency.currency.code}</Text>
        <FontAwesome style={styles.arrow} name="chevron-down" size={12} color="#3C3C3C" />
      </View>
    );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    margin: 5,
    width: "60%",
  },
  rounded: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 45/2,
    alignSelf: "center",
  },
  code:{
    marginLeft: 10,
    fontSize: 15,
    color: "#26278D",
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: -10,

  },
  arrow:{
    marginLeft: 10,
    marginTop: -10,
    alignSelf: "center",
  }
})
