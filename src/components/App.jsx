import {Hello} from './Hello.jsx';
import { SnowRemoval } from './SnowRemoval.jsx';
import {
  View,
} from 'react-native';

export default function App() {
  return (
    <View>
      <Hello name="Rich" />
      <Hello />
      <Hello name="Biff" />
      <SnowRemoval cm={0.5} />
      <SnowRemoval cm={1.5} />
    </View>
  );
}

