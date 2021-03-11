import { ActionTree } from 'vuex';
import axios from 'axios';
import { ProfileState, User } from './types';
import { RootState } from '../../types';

export const actions: ActionTree<ProfileState, RootState> = {
  ActionsGetUserInfo({ commit }): void {
    axios
      .get('/api/userInfo')
      .then((response) => {
        const payload: User = response?.data;
        commit('profileLoaded', payload);
      })
      .catch((error) => {
        console.log(error);
        commit('profileError');
      });
  },
};
