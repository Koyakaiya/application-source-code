import * as React from "react";
import { useState, useEffect } from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const ImageDisplay = () => {
  const defaultImagePath = 'font_style'; // Default image name
  const defaultFolderPath = 'FONT_STYLE'; // Default folder path
  const endpoint = 'https://api.koyakaiya.com/v1/word/getImage';

  const [imageURL, setImageURL] = useState('');

  useEffect(() => {
    fetchImage(defaultImagePath, defaultFolderPath);
  }, []);

  const fetchImage = async (imageName, folderPath) => {
    try {
      const response = await axios.post(endpoint, {
        image: imageName,
        folderPath: folderPath,
      });

      if (response.data) {
        // Set the imageURL with the response data (assuming it's a URL)
        setImageURL(response.data);
      } else {
        // Handle error when the response does not contain image data
        console.error('Invalid image response:', response.data);
        setImageURL('');
      }
    } catch (error) {
      console.error('Error fetching image:', error);
      setImageURL('');
    }
  };

  return (
    <View style={styles.container}>
      <Button
        title="Fetch Default Image"
        onPress={() => fetchImage(defaultImagePath, defaultFolderPath)}
      />
      {imageURL ? (
        <Image source={{ uri: imageURL }} style={styles.image} />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
});

export default ImageDisplay;
