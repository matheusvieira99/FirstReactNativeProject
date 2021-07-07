import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';

const App = () => {
  return(
    <View style={styles.containerExterno}>
      <StatusBar hidden />
      <View style={styles.retanguloSuperior}></View>
      

      <View style={styles.containerInterno1}>
        <View style={styles.quadrado}></View>
        <View style={styles.retanguloLaranja}></View>
      </View>

      <View style={styles.containerMetade}>
        <View style={styles.retanguloRosa}></View>
        <View style={styles.retanguloVioleta}></View>
        {/* <View style={styles.retanguloSeparador}></View> */}
      </View>

      <View style={styles.containerSeparador}>
        <View style={styles.retanguloSeparador}></View>
      </View>

        <View style={styles.containerInterno3}>
          <View style={styles.containerInterno2}>
            <View style={styles.quadrado}></View>
            <View style={styles.quadrado}></View>
            <View style={styles.quadrado}></View>
          </View>

          <View style={styles.containerInterno2}>
            <View style={styles.quadrado}></View>
            <View style={styles.quadrado}></View>
            <View style={styles.quadrado}></View>
          </View>

        </View>


          <View style={styles.rodape}></View>

      </View>

  );
}

const styles = StyleSheet.create({
  containerExterno: {
    flex: 1,
  },

  containerInterno1: {
    flex: 1,
    paddingTop: 40,
  },

  containerMetade: {
    flexDirection: 'row-reverse'
  },


  containerInterno2: {

    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  containerInterno3: {
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 90,
    paddingTop: 40
  },

  containerSeparador: {
    flexDirection: 'column'
  },

  retanguloSuperior: {
    backgroundColor: "#50E3C2",
    height: 25,
    width: "100%",
    
  },

  rodape: {
    backgroundColor: "#4A90E2",
    height: 60,
    width: "100%",
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },


  quadrado: {
    backgroundColor: "#F5A623",
    height: 100,
    width: 100,
    alignSelf: 'center'
  },

  retanguloLaranja: {
    backgroundColor: "#F5A623",
    height: 30,
    width: 150,
    marginTop: 20,
    alignSelf: 'center'
  },

  retanguloRosa: {
    backgroundColor: "#9013FE",
    height: 78,
    width: "50%",
  },

  retanguloVioleta: {
    backgroundColor: "#4A90E2",
    height: 78,
    width: "50%",
  },

  retanguloSeparador: {
    backgroundColor: "#50E3C2",
    height: 13,
    width: "100%",
  }
});

export default App;