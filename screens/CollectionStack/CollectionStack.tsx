import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Collection } from '../Collection/Collection';
import { CollectionBlog } from '../CollectionBlog/CollectionBlog';
import { NewCollection } from '../NewCollection/NewCollection';
import { EditCollection } from '../EditCollection/EditCollection';

const CollectionStackNavigator = createStackNavigator();

export const CollectionStack = () => {
  return (
    <CollectionStackNavigator.Navigator
      initialRouteName="Collection"
      screenOptions={{
        headerShown: false,
      }}>
      <CollectionStackNavigator.Screen
        name="Collection"
        component={Collection}
      />
      <CollectionStackNavigator.Screen
        name="CollectionBlog"
        component={CollectionBlog}
      />
      <CollectionStackNavigator.Screen
        name="NewCollection"
        component={NewCollection}
      />
      <CollectionStackNavigator.Screen
        name="EditCollection"
        component={EditCollection}
      />
    </CollectionStackNavigator.Navigator>
  );
};
