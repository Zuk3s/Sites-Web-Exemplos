import React from "react";
import { Dimensions, Image, View, StyleSheet, Text } from "react-native";
import Itens from "../componentes/itens";




export default function Cesta() {
    return (
        <>
            <Image source={require('../../assets/topo.png')} style={estilos.topo} />
            <Text style={estilos.titulo}>Detalhes da cesta</Text>

            <View style={estilos.cesta}>
                <Text style={estilos.nome}>Cesta de Verduras</Text>
                <View style={estilos.fazenda}>
                    <Image source={require("../../assets/logo.png")} style={estilos.imagemFazenda} />
                    <Text style={estilos.nomeFazenda}>Fazenda do Felipin</Text>
                </View>
                <Text style={estilos.descricao}>Uma cesta com produtos selecionados cuidadosamente da fazenda diretamente para sua cozinha.</Text>
                <Text style={estilos.preco}>R$40,00</Text>

                <Itens />
            </View>
        </>
    );
}

const width = Dimensions.get('screen').width

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * (width + 100)
    },

    titulo: {
        position: "absolute",
        width: "100%",
        textAlign: "center",
        fontSize: 16,
        marginTop: "20%",
        color: "white",
        padding: 16,
        lineHeight: 26
    },

    cesta: {
        paddingHorizontal: 25,
        paddingVertical: 20,
    },

    fazenda: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },

    imagemFazenda: {
        width: 40,
        height: 40,
        marginRight: 8
    },

    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontFamily: "MontserraBold"
    },

    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        fontFamily: "MontserraRegular"
    },
    descricao: {
        fontSize: 16,
        lineHeight: 26,
        color: "#A3A3A3"
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    }
});