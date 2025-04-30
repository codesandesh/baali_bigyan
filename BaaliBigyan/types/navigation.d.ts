import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  DoctorLogin: undefined;
  UserLogin: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
} 