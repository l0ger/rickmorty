import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

export type RouteParamsType = {
  Home: undefined;
  CharacterDetails: {
    characterId: number;
    characterName: string;
  };
  SearchCharacter: {searchWord?: string | undefined} | undefined;
};

export type ScreenNavigationProp<T extends keyof RouteParamsType> =
  StackNavigationProp<RouteParamsType, T>;
export type ScreenRouteProp<T extends keyof RouteParamsType> = RouteProp<
  RouteParamsType,
  T
>;

export type ScreenProps<RouteName extends keyof RouteParamsType> = {
  navigation: ScreenNavigationProp<RouteName>;
  route: ScreenRouteProp<RouteName>;
};
