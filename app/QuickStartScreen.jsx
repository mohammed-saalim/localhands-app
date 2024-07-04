import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useTranslation } from 'react-i18next';

export default function QuickStartScreen() {
//   const router = useRouter(); // Commented out for now
const { t } = useTranslation();

  return (
    <View className="flex-1 justify-center items-center bg-custom-blue">
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }} // Temporary dummy image URL
        className="w-32 h-32 mb-6"
      />
      <Text className="text-2xl font-bold text-white mb-4">{t('quick_start')}</Text>
      <TouchableOpacity
        className="bg-custom-yellow py-4 px-8 rounded-full mb-4"
        // onPress={() => router.push('/post-job')} // Commented out for now
      >
        <Text className="text-lg font-bold">{t('post_job')}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-custom-yellow py-4 px-8 rounded-full"
        // onPress={() => router.push('/job-list')} // Commented out for now
      >
        <Text className="text-lg font-bold">{t('find_job')}</Text>
      </TouchableOpacity>
    </View>
  );
}
