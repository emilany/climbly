import { StyleSheet } from 'react-native'
import { Text, View } from '@/components/Themed'

export default function LogScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Climb Logs</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})
