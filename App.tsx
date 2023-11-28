/* George Fabunmi, 2023 */

import * as React from 'react';
import { AuthStack } from './src/stack/AuthStack';
import { DemoStack } from './src/stack/DemoStack';
const Sound = require('react-native-sound');

Sound.setCategory('Playback');

function App(): JSX.Element {
  return (
    <>
      <AuthStack />
    </>
  );
}

export default App;
