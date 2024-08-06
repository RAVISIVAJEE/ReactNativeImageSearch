import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {fetchImages} from './serpApi';
import ImageModal from './ImageModal';

const categories = [
  'All',
  'Nature',
  'Technology',
  'People',
  'Animals',
  'Travel',
];

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [category, setCategory] = useState('All');

  const handleSearch = async () => {
    try {
      const result = await fetchImages(query, category);
      setImages(result);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const renderImage = ({item}) => (
    <TouchableOpacity onPress={() => setSelectedImage(item)}>
      <Image source={{uri: item.thumbnail}} style={styles.image} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for images..."
        value={query}
        onChangeText={setQuery}
      />
      <Picker
        selectedValue={category}
        style={styles.picker}
        onValueChange={itemValue => setCategory(itemValue)}>
        {categories.map(cat => (
          <Picker.Item key={cat} label={cat} value={cat} />
        ))}
      </Picker>
      <Button title="Search" onPress={handleSearch} />
      <FlatList
        data={images}
        renderItem={renderImage}
        keyExtractor={item => item.link}
        numColumns={2}
        contentContainerStyle={styles.imageList}
      />
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 16,
  },
  image: {
    width: 150,
    height: 150,
    margin: 8,
  },
  imageList: {
    alignItems: 'center',
  },
});

export default App;
