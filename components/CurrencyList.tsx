import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import { flags } from "../data/flags";
import { Picker } from "@react-native-picker/picker";
import { useRef, useState } from "react";
import useCurrencyStore from '../stores/CurrencyStore';
import { Currency } from "../types/Currency";
import { useRouter } from "expo-router";

export const CurrencyList = (params: any ) => {

  const route = useRouter();

  const { currencies, setSelectedFrom, setSelectedTo } = useCurrencyStore();
  const [list, setList] = useState<Currency[]>(currencies as Currency[]);

  const handleSelected = (flag: Currency) => {
    if (params.params === "from") {
      setSelectedFrom(flag);
    } else {
      setSelectedTo(flag);
    }
    // route.canGoBack() ? route.back() : 
    route.push("/exchange");
  }

  const onSearch = (text: string) => {

    if (text === ""){ setList(currencies as Currency[]); return; }
    const filtered = currencies?.filter(
      (f) => f.name.includes(text.toUpperCase()) || f.code.includes(text.toUpperCase())
    ) as Currency[];
    setList(filtered);
  };
  const renderItem = (flag: Currency) => {
    return (
      <View key={flag.code} style={styles.item}>
        <TouchableOpacity style={styles.rounded} onPress={() => handleSelected(flag)}>
          <Image
            source={{ uri: flag.flag }}
            style={styles.image}
            resizeMode={"cover"}
          />
        <Text style={styles.code}>{flag.code}</Text>
        <Text style={styles.code}>{flag.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return <View style={styles.container}>
    <SearchBar onChangeText={onSearch} />
    { list && list?.length > 0 ? <FlatList
      data={list}
      renderItem={({ item }) => renderItem(item)}
      keyExtractor={(item) => item.code}
    />: <Text>No Encontrado...</Text>}
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    width: "100%",
  },
  code: {
    fontWeight: "bold",
    marginRight: 10,
    marginLeft: 10,

  },
  country: {
    flex: 1,
  },
  rounded: {
    width: "90%",
    height: 40,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: "hidden",
  },
  searchContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
    width:"90%"
  
  },
});

export const SearchBar = ({
  onChangeText,
}: {
  onChangeText: (text: string) => void;
}) => {
  return (
    <View style={styles.searchContainer} >
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Search..."
        maxLength={3}
      />
    </View>
    
  );
};
