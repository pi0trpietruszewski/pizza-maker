import React from 'react';
import {ScrollView} from 'react-native';
import {Ingredient} from 'src/components/Ingredient/Ingredient';
import {styles} from './styles';
import {
  Ingredients,
  IngredientsTypes,
  DoughType,
  MeatType,
  VegetableType,
} from 'src/variables/IngredientList';

interface Props {
  type?: IngredientsTypes;
}

export const IngredientScroll = ({type = 'dough'}: Props) => {
  return (
    <ScrollView
      pagingEnabled
      contentContainerStyle={styles.scrollViewWrapper}
      horizontal
      style={styles.scrollView}>
      {Ingredients[type].map((it: DoughType | MeatType | VegetableType) => (
        <Ingredient name={it} />
      ))}
    </ScrollView>
  );
};
