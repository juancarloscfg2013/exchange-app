import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import useCurrencyStore from "../stores/CurrencyStore";
import { Currency } from "../types/Currency";
import { useEffect, useState } from "react";
import { CurrencyComponent } from "../components/Currency";
import { Link } from "expo-router";
import { Card } from "../components/Card";
import { FontAwesome } from "@expo/vector-icons";
import { isRecent } from "../helper/date";

export default function ExchangeScreen() {
  const {
    selectedFrom,
    selectedTo,
    fetchRates,
    rates,
  } = useCurrencyStore();
  
  const handleRates = () => {
    rates ?? fetchRates();
    (rates && isRecent(rates?.timestamp)) ?? fetchRates();
  };

  useEffect(() => {
    rates ?? handleRates();
  }, [rates]);

  const handleConvert = () => {
    // Obtener tipos de cambio
    handleRates();

    // Cantidad a convertir
    const amount = toConvert;

    // Tipo de cambio de la moneda origen
    const fromRate = rates?.rates[from.code];

    // Tipo de cambio de la moneda destino
    const toRate = rates?.rates[to.code];

    // Fórmula para convertir
    const converted =
      toRate && fromRate
        ? Math.round(((amount * toRate) / fromRate) * 100) / 100
        : undefined;

    // Tasa de cambio
    const change = converted
      ? Math.round((converted / amount) * 100) / 100
      : undefined;

    // Setear resultados
    setConverted(converted ?? 0);
    setChange(change ?? 0);
  };

  const from: Currency = selectedFrom as Currency;
  const to: Currency = selectedTo as Currency;
  const [converted, setConverted] = useState(0);
  const [change, setChange] = useState(0);

  const [toConvert, setToConvert] = useState(0);

  return (
    <>
      {rates ? (
        <View style={styles.container}>
          <Card>
            <View style={styles.subcontainer}>
              <View style={styles.dropdown}>
                <Text style={styles.title}>Ammount: </Text>
                <Link href="/modal?params=from" asChild>
                  <Pressable>
                    {() => <CurrencyComponent currency={from} />}
                  </Pressable>
                </Link>
              </View>

              <TextInput
                value={toConvert.toString()}
                onChange={(e) => setToConvert(Number(e.nativeEvent.text))}
                style={styles.input}
              />
            </View>

            <View style={styles.separator}>
              <TouchableOpacity
                style={{
                  borderColor: "black",
                  borderWidth: 1,
                  width: 45,
                  height: 45,
                  padding: 10,
                  alignSelf: "center",
                  borderRadius: 45 / 2,
                  backgroundColor: "#26278D",
                }}
                onPress={() => {
                  handleConvert();
                }}
              >
                <FontAwesome
                  style={{
                    alignSelf: "center",
                    transform: [{ rotate: "90deg" }],
                  }}
                  name="exchange"
                  size={20}
                  color="white"
                />
              </TouchableOpacity>
            </View>

            <View style={styles.subcontainer}>
              <View style={styles.dropdown}>
                <Text style={styles.title}>Converted Ammount: </Text>
                <Link href="/modal?params=to" asChild>
                  <Pressable>
                    {() => <CurrencyComponent currency={to} />}
                  </Pressable>
                </Link>
              </View>
              <TextInput
                value={converted.toString()}
                editable={false}
                style={styles.input}
              />
            </View>
            {converted !== 0 && (
              <Text style={[styles.title, { alignSelf: "baseline" }]}>
                Indicative Exchange Rate 1{from.code} = {change} {to.code}
              </Text>
            )}
          </Card>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EAEAFA",
  },
  subcontainer: { flexDirection: "row", width: "100%" },
  dropdown: {
    flexDirection: "column",
    width: "40%",
  },
  title: {
    fontSize: 14,
    fontWeight: "normal",
    color: "#989898",
    marginLeft: 12,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "100%",
    justifyContent: "center",
  },
  input: {
    borderColor: "transparent",
    borderWidth: 1,
    width: "40%",
    height: 45,
    justifyContent: "center",
    marginLeft: 60,
    borderRadius: 10,
    backgroundColor: "#EFEFEF",
    paddingRight: 20,
    textAlign: "right",
    alignSelf: "center",
  },
});
