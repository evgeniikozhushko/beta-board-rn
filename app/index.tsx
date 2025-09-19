import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AppImage from '../assets/images/appImage.png';

const HomeScreen = () => {
  const router = useRouter();
  
  return (
    <View style={styles.container}>
      <Image source={AppImage} style={styles.image} />
      <Text style={styles.title}>Welcome to beta board</Text>
      <Text style={styles.subtitle}>You climbing management application</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/dashboard')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#fff',
  },
  image: {
    width: 100,
    height: 30,
    marginBottom: 20,
    borderRadius: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;