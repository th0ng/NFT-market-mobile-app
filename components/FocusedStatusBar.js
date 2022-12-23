import { StatusBar } from "react-native";
import { useIsFocused } from "@react-navigation/core";

const FocusedStatusBar = () => {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar animated={true} /> : null;
};

export default FocusedStatusBar;
