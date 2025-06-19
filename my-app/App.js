// ZONA1: Importaciones
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Pressable,
  Switch
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button as BotonPaper, Provider as ProveedorPaper } from 'react-native-paper';
import { Button as BotonElements } from 'react-native-elements';

// Componente Texto 
const Texto = ({ style, modoOscuro }) => {
  const [contenido, setContenido] = useState("Hola Mundo");
  const actualizaTexto = () => setContenido('Texto actualizado');

  return (
    <Text
      style={[styles.Text, style, { color: modoOscuro ? '#fff' : 'pink' }]}
      onPress={actualizaTexto}
    >
      {contenido}
    </Text>
  );
};

// ZONA2: Principal
export default function App() {

  const [modoOscuro, setModoOscuro] = useState(false);

  
  const alternarModo = () => setModoOscuro(previo => !previo);

  return (
    <ProveedorPaper>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={[styles.container, { backgroundColor: modoOscuro ? '#111' : '#fff' }]}>

          <View style={styles.section}>
            <Text style={styles.title}>Modo de pantalla: {modoOscuro ? 'oscuro' : 'claro'}</Text>
            <Switch value={modoOscuro} onValueChange={alternarModo} />
          </View>

          
          <Texto style={styles.azul} modoOscuro={modoOscuro} />
          <Texto style={styles.verde} modoOscuro={modoOscuro} />
          <Texto style={styles.negro} modoOscuro={modoOscuro} />

          {/* 1. Botón nativo */}
          <View style={styles.section}>
            <Text style={styles.title}>1. Botón (nativo): simple, rápido y multiplataforma</Text>
            <Button
              title="Botón Nativo"
              color="#007bff"
              onPress={() => Alert.alert('¡Botón nativo presionado!')}
            />
          </View>

          {/* 2. TouchableOpacity */}
          <View style={styles.section}>
            <Text style={styles.title}>2. TouchableOpacity: se vuelve transparente al presionar</Text>
            <TouchableOpacity
              style={[styles.btn, { backgroundColor: '#28a745' }]}
              onPress={() => Alert.alert('¡Presionaste TouchableOpacity!')}
            >
              <Text style={styles.btnText}>TouchableOpacity</Text>
            </TouchableOpacity>
          </View>

          {/* 3. TouchableHighlight */}
          <View style={styles.section}>
            <Text style={styles.title}>3. TouchableHighlight: cambia a otro color al presionar</Text>
            <TouchableHighlight
              style={[styles.btn, { backgroundColor: '#ffc107' }]}
              underlayColor="#e0a800"
              onPress={() => Alert.alert('¡Presionaste TouchableHighlight!')}
            >
              <Text style={styles.btnText}>TouchableHighlight</Text>
            </TouchableHighlight>
          </View>

          {/* 4. TouchableWithoutFeedback */}
          <View style={styles.section}>
            <Text style={styles.title}>4. TouchableWithoutFeedback: sin retroalimentación visual</Text>
            <TouchableWithoutFeedback onPress={() => Alert.alert('¡Sin retroalimentación visual!')}>
              <View style={[styles.btn, { backgroundColor: '#17a2b8' }]}>
                <Text style={styles.btnText}>Sin retroalimentación</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>

          {/* 5. Pressable */}
          <View style={styles.section}>
            <Text style={styles.title}>5. Pressable: control total sobre estados como presionado</Text>
            <Pressable
              style={({ pressed }) => [
                styles.btn,
                {
                  backgroundColor: pressed ? '#6c757d' : '#343a40',
                },
              ]}
              onPress={() => Alert.alert('¡Presionaste Pressable!')}
            >
              <Text style={styles.btnText}>Pressable</Text>
            </Pressable>
          </View>

          {/* 6. Botón de Paper */}
          <View style={styles.section}>
            <Text style={styles.title}>6. Botón de Paper: diseño moderno y elegante</Text>
            <BotonPaper
              mode="contained"
              buttonColor="#9c27b0"
              textColor="#fff"
              onPress={() => Alert.alert('¡Presionaste el botón de Paper!')}
              style={styles.paperButton}
            >
              Botón Paper
            </BotonPaper>
          </View>

          {/* 7. Botón de Elements */}
          <View style={styles.section}>
            <Text style={styles.title}>7. Botón de Elements: con iconos y estilos</Text>
            <BotonElements
              title="Botón Elements"
              onPress={() => Alert.alert('¡Presionaste el botón de Elements!')}
              buttonStyle={{
                backgroundColor: '#ff5722',
                borderRadius: 10,
                padding: 10,
              }}
              titleStyle={{ fontWeight: 'bold', fontSize: 16 }}
            />
          </View>

          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </ProveedorPaper>
  );
}

// ZONA3: Estilos
const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 30,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 50,
  },
  Text: {
    fontSize: 27,
    marginVertical: 10,
  },
  azul: { backgroundColor: 'blue' },
  verde: { backgroundColor: 'green' },
  negro: { backgroundColor: 'black' },
  title: {
    fontSize: 16,
    marginVertical: 6,
    textAlign: 'center',
    color: '#000',
  },
  section: {
    marginVertical: 15,
    alignItems: 'center',
    width: '100%',
  },
  btn: {
    padding: 12,
    borderRadius: 8,
    marginTop: 5,
    width: 220,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  paperButton: {
    marginTop: 5,
    width: 220,
  },
});
