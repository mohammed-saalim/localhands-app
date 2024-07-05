import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MainPage = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-white">
      <Navbar />
      <View className="flex-row p-4 bg-white border-b border-gray-300">
        <TextInput
          className="flex-1 border border-gray-300 rounded-full px-4 py-2"
          placeholder="Find your service now"
        />
        <View className="w-20 ml-2 border border-gray-300 rounded-full px-4 py-2 flex-row items-center">
          <Icon name="map-marker" size={20} color="#000" />
          <TextInput
            className="flex-1 ml-2"
            placeholder="60626"
          />
        </View>
      </View>
      <View className="p-4">
        <Text className="text-xl font-bold mb-4">Or Search in the Category List...</Text>
        <View className="flex-row flex-wrap justify-between">
          {[
            "Home Maintenance",
            "Out Door Maintenance",
            "Pet Services",
            "Education and Tutoring",
            "Moving and Shifting",
          ].map(category => (
            <TouchableOpacity key={category} className="bg-custom-yellow p-4 rounded-lg mb-4" style={{ width: '48%', marginBottom: 10 }}>
              <Text className="text-center">{category}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity className="bg-custom-yellow p-4 rounded-full flex-row items-center justify-center" style={{ width: '48%' }}>
            <Text className="text-center mr-2">Show All</Text>
            <Icon name="arrow-right" size={20} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      <View className="p-4">
        <Text className="text-center mb-2">
          Get 10% discount on plumbing with abc plumbing company today!
        </Text>
        <Image source={{ uri: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back05.jpg' }} className="w-full h-32" />
      </View>
      <Footer />
    </View>
  );
};

export default MainPage;
