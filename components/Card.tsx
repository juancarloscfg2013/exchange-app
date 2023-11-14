import { View, StyleSheet } from "react-native";

export const Card = ({children}: {children: React.ReactNode}) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 10,
        marginTop: 50,
        marginHorizontal: 15,
        alignSelf:"flex-start",
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});