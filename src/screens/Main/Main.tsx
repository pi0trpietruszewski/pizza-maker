import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {IngredientScroll} from 'src/components/IngredientScroll/IngredientScroll';

export const Main = () => {
  return (
    <SafeAreaView>
      <Text style={{textAlign: 'center', fontSize: 20}}>Pizza Maker</Text>
      <IngredientScroll />
    </SafeAreaView>
  );
};
