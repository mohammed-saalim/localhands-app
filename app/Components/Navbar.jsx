import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Navbar = () => {
  return (
    <View className="bg-white top-4 flex-row justify-between items-center p-4">
      <TouchableOpacity 
        className="bg-custom-blue p-2 rounded"
        onPress={() => {
          // Future implementation for navigation
          console.log('Navigate to Job Poster main page');
        }}
      >
        <Text className="px-2 text-black font-bold">Find Job</Text>
      </TouchableOpacity>
      <Icon  name={'ampersand'} size={30} />
      <TouchableOpacity>
        <Icon name={'account-circle'} size={30} />
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
