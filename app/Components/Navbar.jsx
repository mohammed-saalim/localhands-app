import React from 'react';
import { SafeAreaView, View, TouchableOpacity, Text } from 'react-native';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Navbar = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="bg-white">
      <View className="flex-row justify-between items-center p-4 mt-6">
        <TouchableOpacity 
          className="bg-custom-blue p-2 rounded"
          onPress={() => console.log('Navigate to Job Poster main page')}
        >
          <Text className="px-2 text-black font-bold">Find Job</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('Pages/QuickStartScreen')}>
        <View >
          <Icon name={'ampersand'} size={30} />
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('Pages/Account')}>
          <Icon name={'account-circle'} size={30} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Navbar;
