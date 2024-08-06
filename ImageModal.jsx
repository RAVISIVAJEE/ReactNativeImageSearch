import React from 'react';
import {
  Modal,
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const ImageModal = ({image, onClose}) => {
  if (!image) return null;

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={!!image}
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
        <Image
          source={{uri: image.thumbnail}}
          style={styles.image}
          resizeMode="contain"
        />
        {console.log(image)}
        <Text style={styles.imageDetails}>Title: {image.title}</Text>
        <Text style={styles.imageDetails}>Height: {image.height}</Text>
        <Text style={styles.imageDetails}>Width: {image.width}</Text>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: '90%',
    height: '70%',
  },
  imageDetails: {
    color: '#fff',
    marginTop: 10,
    fontSize: 16,
  },
});

export default ImageModal;
