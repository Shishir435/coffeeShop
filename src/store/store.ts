import {create} from 'zustand';
import {produce} from 'immer';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage, {
  useAsyncStorage,
} from '@react-native-async-storage/async-storage';
import CoffeeData from '../data/CoffeeData';
import BeansData from '../data/BeansData';

export const useStore = create(
  persist(
    (set, ger) => ({
      CoffeeList: CoffeeData,
      BeanList: BeansData,
      FavouriteList: [],
      CartPrice: 0,
      CartLsit: [],
      OrderHistoryList: [],
    }),
    {
      name: 'cofee-shop',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
