import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';

const Language = () => {
  const router = useRouter();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <View className="flex-1 bg-white">
      <View className="pt-10 pb-4 items-center relative">
        <TouchableOpacity onPress={() => router.push('/Pages/Account')} className="absolute left-4 top-10">
          <Icon name="arrow-left" size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> {router.push('Pages/QuickStartScreen')}}>
        <Icon name="ampersand" size={30} />
        </TouchableOpacity>
        <Text className="text-xl font-bold mt-2">{t('Language')}</Text>
      </View>
      <View className="flex-1 p-4">
        {['en', 'hi', 'ta', 'te'].map((language) => (
          <TouchableOpacity key={language} onPress={() => changeLanguage(language)}>
            <View className="py-4 border-b border-gray-300">
              <Text>{language}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Language;
