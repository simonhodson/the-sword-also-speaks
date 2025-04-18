import React from 'react'
import { View, ActivityIndicator, StyleSheet, Platform } from 'react-native'

export default function LoadingIndicator() {

    return (
      <View style={styles.loading}>
        <ActivityIndicator size={Platform.OS === 'android' ? 65 : 'large'} />
      </View>
    )
}


const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})