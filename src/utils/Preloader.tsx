import * as React from 'react';
import { View, Modal, ActivityIndicator, StyleSheet, Text } from 'react-native';

const PreloaderModal = ({ visible }) => {
  return (
    <Modal transparent animationType="none" visible={visible}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator size="large" color="#2460A7" />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityIndicatorWrapper: {
    backgroundColor: '#fafafa',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 100,
    height: 100,
    borderColor:'white',
    borderWidth:3
  },
});

export default PreloaderModal;
