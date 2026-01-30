import {
  Text,
  View,
} from 'react-native';
import { hello } from '../hello.js';


export function Hello({name}){
    return(
        <View>
            <Text>hello({name?`"${name}"`:""}) returned {hello(name)}</Text>
        </View>
    );
}