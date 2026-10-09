import { View, Text, Pressable } from "react-native";

type Props = {
    navegar: (pagina: string) => void;
};

export default function Contato({ navegar }: Props) {
    return (
        <View>
            <Text className="mb-4 text-center text-2xl font-bold">
                Contato
            </Text>

            <Text className="mb-8 text-center text-lg text-gray-700">
                Entre em contato conosco.
            </Text>

            <Pressable
                className="mb-3 w-full rounded-xl bg-indigo-600 p-4"
                onPress={() => navegar("inicio")}
            >
                <Text className="text-center font-bold text-white">
                    Início
                </Text>
            </Pressable>

            <Pressable
                className="mb-3 w-full rounded-xl bg-indigo-600 p-4"
                onPress={() => navegar("sobre")}
            >
                <Text className="text-center font-bold text-white">
                    Sobre
                </Text>
            </Pressable>

            <Pressable
                className="w-full rounded-xl bg-indigo-600 p-4"
                onPress={() => navegar("produtos")}
            >
                <Text className="text-center font-bold text-white">
                    Produtos
                </Text>
            </Pressable>
        </View>
    );
}