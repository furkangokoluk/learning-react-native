import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";

export default function CoursesScreen() {
  const courses = [
    {name:"Angular",id : 1},
    {name:"React Js",id : 2},
    {name:"C#",id : 3},
    {name:"C Programlama",id : 4},
    {name:"BootStrap",id : 5}
  ];
  return (
    <FlatList data={courses}
    keyExtractor={(item) => item.id}
    renderItem={({item}) => {
      return <Text style={styles.content}>{item.name}</Text>
    }}
    />
  );
}

const styles = StyleSheet.create({
  content: {
    fontSize : 20,
    backgroundColor : "yellow",
    marginVertical : 10,
    padding : 20,
  },
});
