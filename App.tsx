import Navigation from './src/components/navigators';
import { View } from 'react-native';
import BottomTabs from './src/components/navigators/BottomTabs';
import { Fragment } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  return ( 
    // <Navigation />
    <BottomTabs />
  );
}

export default App;