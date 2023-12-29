import { Image, StyleSheet, View} from "react-native";

const App = () => {
  return(
    <View style ={StyleSheet.container}>
      <Image>
        resizeMode="stretch"
        style = {{
          width: "100x",
          height: 180,
          borderWidth: 2,
          borderColor:"red",
          
        }}
        source={require("./assets/sweder.jpeg")}
      </Image>
    </View>
  );
};




const style = StyleSheet.create({
  container:{

    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
});
export default App;