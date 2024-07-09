import React from 'react';
import { Stack } from 'expo-router';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Stack>
        <Stack.Screen name="QuickStartScreen" options={{ headerShown: false }} />
        <Stack.Screen name="Pages/Account" options={{ headerShown: false }} />
        <Stack.Screen name="Pages/Language" options={{ headerShown: false }} />
      </Stack>
    </I18nextProvider>
  );
}
