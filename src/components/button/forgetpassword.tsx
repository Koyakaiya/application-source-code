import { Button, Pressable, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import * as React from 'react';
import Register from '../../screens/Authentication/SignupScreen';

export default function ForgetPasswordbtn() {
  return (
    <>
      <Pressable
        style={tw`bg-blue-800 px-10 py-3 mt-8 rounded-3xl`}
        onPress={() => Register}>
        <Text style={tw`text-base text-white`}>Aika Bayamin da ka Shigar</Text>
      </Pressable>
    </>
  );
}
