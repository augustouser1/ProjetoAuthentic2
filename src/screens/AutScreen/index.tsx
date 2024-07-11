import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles"
import { MenuStackTypes } from "../../navigation/MenuStack.navigation";
import { styleContainer } from "../../styles/globalstyle";

export function AutScreen({ navigation }: MenuStackTypes) {
    const image = require('../../assets/Autscreen.png')
    return (
        

        <ImageBackground source={image} style={styleContainer.container}>
            <View style={styles.Cadastro}>
                <Text style={styles.Text}>Bem-vindo ao Ourspace</Text>
            </View>
            <TouchableOpacity style={styles.Botao} onPress={() => navigation.push("Regscreen")}>
                <Text>Cadastre-se</Text>

            </TouchableOpacity>
        </ImageBackground>

    )


}