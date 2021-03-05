import React from "react";
import { SafeAreaView, FlatList, Text, View, Image } from "react-native";

const DATA = [
  {
    id: "1",
    title: "light vs indulgent dessert recipes",
    image:
      "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/309733.jpg"
  },
  {
    id: "2",
    title: "savoury lasagna",
    image:
      "data:image/jpeg;base64,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"
  },
  {
    id: "3",
    title: "peanut butter oatmeal",
    image:
      "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/4070d9fbdd8a48939d08232f78b5fff4/HowToGetProteinWithoutMeatOrDairyFBNEW.jpg?resize=1600:*&output-format=jpg&output-quality=auto"
  },
  {
    id: "4",
    title: "brilliant queen's gambit inspired recipes",
    image:
      "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/308761.jpg?output-format=auto&output-quality=auto"
  },
  {
    id: "5",
    title: "40-clove garlic chicken",
    image:
      "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/120895.jpg?output-format=auto&output-quality=auto"
  },
  {
    id: "6",
    title: "Recipes to make you feel like you're in schitt's creek",
    image:
      "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/309731.jpg?output-format=auto&output-quality=auto"
  },
  {
    id: "7",
    title: "i recreated some of blackpink's favorite foods",
    image:
      "https://i.ytimg.com/vi/xP8Ric15tgQ/maxresdefault.jpg"
  },
  {
    id: "8",
    title: "alfredo chicken bake",
    image:
      "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/e025695faf82444381606156d320db4a/BFV9176_Chicken_Bake_4_Ways_FB1080SQ.jpg"
  },
  {
    id: "8",
    title: "tropical green protein smoothie",
    image:
      "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/ef8ce9bda8334ccda4d2749ec90457ed/BFV21177_ProteinSmoothies5Ways-FB1080SQ.jpg?output-format=auto&output-quality=auto"
  },
  {
    id: "8",
    title: "easy to eat wraps for when you're on the go",
    image:
      "https://www.superhealthykids.com/wp-content/uploads/2019/05/SHK-April-Recipes-17-1-745x497.jpg"
  }
  
];

export default class Recent extends React.Component {
  _renderItem = ({ item }) => (
    <View style={{ flex: 1, justifyContent: 'space-between', marginHorizontal: 1.5, marginBottom: 20 }}>

      <Image
        style={{ width: "100%", height: 140 }}
        source={{ uri: item.image }}
      />
      <Text style={{ textAlign: "center", marginTop: 8 }}>{item.title}</Text>
    </View>
  );

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={{ fontSize: 15, fontWeight: '700', marginTop: 20, paddingHorizontal: 15, color: '#DE5D83' }} >RECENT</Text>
        <FlatList
          data={DATA}
          renderItem={this._renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingVertical: 20 }}
        />
      </SafeAreaView>
    );
  }
}