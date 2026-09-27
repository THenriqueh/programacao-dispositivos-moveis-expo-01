import { StyleSheet, Text, View } from 'react-native';
import Profile from './Profile';

export default function MiniBio() {
  return (
    <View style={styles.container}>
      <Profile
        name="Thallis Ferreira"
        photo={require('../assets/images/profile.jpg')}
      />
      <Text style={styles.bio}>
        Desenvolvedor backend, estudante de Sistemas para Internet, dando os primeiros passos no mundo mobile.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', padding: 16 },
  bio: { fontSize: 14, textAlign: 'center', marginTop: 8, fontStyle: 'italic' },
});