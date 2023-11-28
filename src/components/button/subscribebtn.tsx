import {Button, Pressable, Text} from 'react-native';
import Signup from '../../screens/Authentication/Signup_screen';
import tw from 'tailwind-react-native-classnames';

export default function Subscribebtn() {
  return (
    <>
      <Pressable
        style={tw`mt-2 bg-blue-800 w-52 h-12 flex justify-center items-center px-4 rounded-3xl`}
        onPress={() => Signup}>
        <Text style={tw`text-xl text-white`}>ZABI TSARIN NAN</Text>
      </Pressable>
    </>
  );
}
