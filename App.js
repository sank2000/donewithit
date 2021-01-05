import React, { useState } from 'react';
// import HomeScreen from './app/screen/HomeScreen';
// import ViewImage from './app/screen/ViewImage';
// import ListingDetailsScreen from './app/screen/ListingDetailsScreen';
// import ListingsScreen from './app/screen/ListingsScreen';
// import MessagesScreen from './app/screen/MessagesScreen';
// import AccountScreen from './app/screen/AccountScreen';

import Screen from './app/components/Screen';
import AppPicker from './app/components/AppPicker';
import AppTextInput from './app/components/AppTextInput';

const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Cameras', value: 3 },
];

export default function App() {
  const [category, setCategory] = useState(categories[0]);

  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        icon="apps"
        placeholder="Category"
      />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  );
}
