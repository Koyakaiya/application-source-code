import { Pressable, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Login from '../../screens/Authentication/OauthSignup';

export default function Signupbtn() {
  return (
    <>
      <Pressable
        style={tw`bg-blue-800 px-20 py-3 mt-2 rounded-3xl shadow shadow-lg`}
        onPress={() => Login}>
        <Text style={tw`text-base text-white`}>SABON RAJISTA</Text>
      </Pressable>
    </>
  );
}
