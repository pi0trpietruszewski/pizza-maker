import React from 'react';
import {Image, useWindowDimensions} from 'react-native';
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
    <Image source={IngredientImages[name]} style={{width, aspectRatio: 1}} />
  );
};
