import { GetterTree } from 'vuex';
import { ProfileState } from './types';
import { RootState } from '../../types';

export const getters: GetterTree<ProfileState, RootState> = {
  fullName(state): string {
    const { user } = state;
    const firstName = user?.firstName;
    const lastName = user?.lastName;

    if (firstName && lastName) {
      return `${firstName} ${lastName}`;
    } else {
      return 'NoName';
    }
  },
};
