import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import exempleData from './data/exempleData'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={exempleData}
          renderItem={({ item }) => 
          <View> 
            <Text>{item.key}</Text>
            <Text>{item.premium ? "Premium" : "non premium"}</Text>
            <Text>{item.adress}</Text>
            <Text>{item.postal_code}</Text>
            <Text>{item.url_img}</Text>
            <Text>{item.widget_link}</Text>
          </View>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
