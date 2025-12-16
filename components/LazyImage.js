import { useState } from "react";
import { Image, View } from "react-native";

const placeholder = require("../assets/placeholder.png"); 
// Make sure this file exists, or replace with your own placeholder.

export default function LazyImage({ source, style, resizeMode = "cover" }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <View style={style}>
      {!loaded && (
        <Image
          source={placeholder}
          style={[style, { position: "absolute" }]}
          resizeMode={resizeMode}
        />
      )}
      <Image
        source={source}
        style={style}
        resizeMode={resizeMode}
        onLoad={() => setLoaded(true)}
      />
    </View>
  );
}
