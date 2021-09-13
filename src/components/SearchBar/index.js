import React from 'react';
import { View, Text } from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';
import { MaterialCommunityIcons  } from '@expo/vector-icons';

import styles from './styles';

export default function SearchBar() {
 return (
   <View style={styles.container}>
     <TextInput style={styles.searchBox}
     placeholder={"Procure um frete mais próximo"} />

     <RectButton style={styles.searchUserButton}>
        <MaterialCommunityIcons name="truck-fast-outline" size={24} color="black" />
     </RectButton>
   </View>
  );
}