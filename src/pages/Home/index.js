import React, { useState } from 'react';
import { MaterialCommunityIcons  } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';
import { View, Text } from 'react-native';

import SearchBar from '../../components/SearchBar';

import styles from './styles';

export default function Home() {

  let [region, setRegion] = useState({
    latitude: -22.418874412405152,
    longitude: -50.579184094823916,
    latitudeDelta: 0.014,
    longitudeDelta: 0.014,
  });

  return(
    <View style={styles.container}>
      <MapView style={styles.map}
        initialRegion={region}
      >
        <Marker 
          coordinate={{
            latitude: -22.418874412405152,
            longitude: -50.579184094823916,
          }}
          title="Livre para Entrega"
          description="Avenida Siqueira Cam..."
          >
          <MaterialCommunityIcons name="truck-fast-outline" size={36} color="black" />
        </Marker>

        <Marker 
          coordinate={{
            latitude: -22.411614279363437,
            longitude: -50.58553556558318,
          }}>
          <MaterialCommunityIcons name="truck-fast" size={36} color="black" />
        </Marker>

        <Marker 
          coordinate={{
            latitude: -22.427096572102258,
            longitude: -50.581855730686925,
          }}
          title="Livre para Entrega"
          description="Rua..."
          >
          <MaterialCommunityIcons name="truck-fast" size={36} color="black" />
        </Marker>

        <Marker 
          coordinate={{
            latitude: -22.419340973719923,
            longitude: -50.58522458531356,
          }}
          title="Fazendo Entrega"
          description="Avenida Galdino...">
          <MaterialCommunityIcons name="truck-fast-outline" size={36} color="black" />
        </Marker>

        <Marker 
          coordinate={{
            latitude: -22.422078293201803,
            longitude: -50.57406659546739,
          }}
          title="Fazendo Entrega"
          description="Rua...">
          <MaterialCommunityIcons name="truck-fast" size={36} color="black" />
        </Marker>
        </MapView>

        <SearchBar />
    </View>
  );
}