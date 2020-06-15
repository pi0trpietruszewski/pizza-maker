export const dough = ['dark', 'regular'];
export type DoughType = typeof dough[number];

export const meat = ['dark', 'regular'];
export type MeatType = typeof meat[number];

export const vegetable = ['dark', 'regular'];
export type VegetableType = typeof vegetable[number];

export interface IngredientsType {
  dough: DoughType[];
  meat: MeatType[];
  vegetable: VegetableType[];
}
export type IngredientsTypes = keyof IngredientsType;

export const Ingredients: IngredientsType = {
  dough,
  meat,
  vegetable,
};

export type IngredientImagesType = VegetableType | MeatType | DoughType;

export const IngredientImages: {[key: string]: NodeRequire} = {
  dark: require('src/asset/dough-dark.jpg'),
  regular: require('src/asset/dough-regular.jpg'),
};
