import React from 'react';
import {
  Image,
  ImageURISource,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import {styles} from './styles';
import {
  DoughType,
  IngredientImages,
  MeatType,
  VegetableType,
} from 'src/variables/IngredientList';

interface Props {
  name: DoughType | MeatType | VegetableType;
}

export const Ingredient = ({name}: Props) => {
  const {width} = useWindowDimensions();
  return (
    <Image
      source={IngredientImages[name] as ImageURISource}
      style={StyleSheet.flatten([{width}, styles.image])}
    />
  );
};
