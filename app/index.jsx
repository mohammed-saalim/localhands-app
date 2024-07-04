import QuickStartScreen from './QuickStartScreen';
// import Services from './Services'
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';
import MainPage from './MainPage';

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      {/* <QuickStartScreen/> */}
      <MainPage />
    </I18nextProvider>
  );
}
