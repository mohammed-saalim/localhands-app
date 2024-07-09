import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Footer from '../Components/Footer';
import { useRouter } from 'expo-router';

const Account = () => {

  const router = useRouter();


  return (
    <SafeAreaView className="flex-1 bg-white">
     <TouchableOpacity onPress={()=>{router.push('Pages/QuickStartScreen')}}>
      <View className="items-center p-4">
        <Icon name={'ampersand'} size={30} />
      </View>
      </TouchableOpacity> 
      <View className="flex-row items-center justify-between px-4">
        <TouchableOpacity onPress={()=> {router.push('Pages/MainPage')}}>
          <Icon name={'arrow-left'} size={30} />
        </TouchableOpacity>
        <Text className="text-xl font-bold flex-1 text-center">Account</Text>
        <View style={{ width: 30 }}></View>
      </View>
     
      <View className="p-4">
        {[
          'Personal Info',
          'Language',
          'Set up Two-Factor Authorization',
          'Payment',
          'Promos',
          'Settings',
          'Past Jobs',
          'Support',
          'About',
        ].map((item) => (
          <TouchableOpacity key={item} onPress={() => item === 'Language' && router.push('/Pages/Language')}>
          <View className="py-4 border-b border-gray-300">
              <Text>{item}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <Footer />
    </SafeAreaView>
  );
};

export default Account;
