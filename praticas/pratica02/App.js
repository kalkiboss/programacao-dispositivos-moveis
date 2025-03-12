import { StyleSheet, Text, View } from "react-native";

function AppBar(props) {

  return (
    <View>
<View style={{ height: 50, backgroundColor: "#333", justifyContent: "center", paddingLeft: 16 }}>
<Text style={{fontSize: 20, fontWeight: "bold", color: "#fff"}}>
<Text>{props.titulo}</Text>
</View>
  );
}


function App() {
  return (
   <View style={{ flex: 1, backgroundColor: "#fff", justifyContent: "center", alignItems: "center" }>
    <AppBar titulo="Minha Aplicação React Native" />
    <View></View>
   </View>
  );
}

export default App;

