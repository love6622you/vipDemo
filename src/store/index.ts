import { createStore, StoreOptions } from 'vuex';

import { RootState } from './types';
import { profile } from './modules/profile/index';

export const store = createStore<RootState>({
  state: {
    version: '1.0.0',
  },
  modules: {
    profile,
  },
});
