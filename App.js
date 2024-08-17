import React from "react";
import { SafeAreaView, StyleSheet } from 'react-native';
import { AppBar } from "@react-native-material/core";
import RpsForm from "./app/RpsForm";

/**
 * The main application component.
 * 
 * @component
 * @returns {JSX.Element} The rendered SafeAreaView containing the AppBar and RpsForm components.
 */
export default function App() {
  return (
    <SafeAreaView spacing={5} style={styles.container}>
      <AppBar title="Rock paper scissors" />
      <RpsForm />
    </SafeAreaView>
  );
}

/**
 * The styles for the App component.
 * 
 * @type {Object}
 * @property {Object} container - The style for the main container of the application, which sets the flex to 1.
 */
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
