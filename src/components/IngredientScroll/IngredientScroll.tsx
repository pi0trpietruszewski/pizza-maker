import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Ingredient} from 'src/components/Ingredient/Ingredient';
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

const styles = StyleSheet.create({
  scrollViewWrapper: {
    alignItems: 'center',
  },
  scrollView: {height: '100%'},
});

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
