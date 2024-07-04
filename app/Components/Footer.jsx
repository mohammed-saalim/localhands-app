import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const Footer = () => (
    <View className="absolute bottom-0 left-0 right-0 flex-row justify-around p-4 bg-gray-200">
      {[
        { name: 'home', icon: 'home-outline' },
        { name: 'post', icon: 'add-circle-outline' },
        { name: 'chat', icon: 'chatbubbles-outline' },
        { name: 'account', icon: 'person-outline' },
      ].map(item => (
        <TouchableOpacity key={item.name}>
          <View className="items-center">
            <Icon name={item.icon} size={30} />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );


export default Footer;