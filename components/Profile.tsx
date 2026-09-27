import { Image, StyleSheet, Text, View } from 'react-native';

type ProfileProps = {
  name: string;
  photo: number;
};

export default function Profile({ name, photo }: ProfileProps) {
  return (
    <View style={styles.container}>
      <Image source={photo} style={styles.photo} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center' },
  photo: { width: 120, height: 120, borderRadius: 60 },
  name: { fontSize: 18, fontWeight: 'bold', marginTop: 8 },
});