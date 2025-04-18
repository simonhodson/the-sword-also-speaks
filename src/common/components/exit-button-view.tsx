import React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";

export default function ExitButton({ onExit }: { onExit: () => void } ) {

    return (
        <View>
            <Pressable onPress={onExit}>
                <Text>Exit</Text>
            </Pressable>
        </View>
    )

}