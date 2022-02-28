import { useTheme } from "@react-navigation/native";
import { View, Text, Image, Button } from "react-native";

const icon = require("../../assets/adaptive-icon.png");

export default function AppfirstLaunchScreen({ navigation }) {
  const colors = useTheme();
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          flex: 100
        }}
      >
        <Text
          style={{
            color: colors.colors.text,
            fontSize: 40,
            alignSelf: "center",
            fontWeight: "bold"
          }}
        >
          급식
        </Text>
        <Image
          style={{ height: 100, width: 100, alignSelf: "center" }}
          source={icon}
        />
        <Text>설치해 주셔서 감사합니다!</Text>
        <Text>아래 버튼을 누르면 설정으로 이동합니다.</Text>
        <Text>설정에서는 학교 설정 및 알레르기 유발 식품 설정을</Text>
        <Text>할 수 있습니다.</Text>
        <Button
          onPress={() => {
            navigation.navigate("급식tab", { screen: "급식" });
            navigation.navigate("설정tab");
          }}
          title="설정으로 이동"
        />
      </View>
      <Text
        style={{ textAlignVertical: "bottom", margin: 5, alignSelf: "center" }}
      >
        문성호
      </Text>
    </View>
  );
}