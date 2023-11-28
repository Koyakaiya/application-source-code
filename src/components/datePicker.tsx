import * as React from 'react';
import { Text, SafeAreaView, Platform, TouchableOpacity, Modal, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';

export const DatePickerComp = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState<'date'>('date');
  const [showDate, setShowDate] = useState(false);
  const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(true);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDate(Platform.OS === 'ios');
    setDate(currentDate);
    setIsPlaceholderVisible(false);
  };

  const showMode = (currentMode) => {
    setShowDate(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const toggleDatePicker = () => {
    showDatepicker();
    setIsPlaceholderVisible(false);
  };

  return (
    <View>
      
    </View>
  );
};
