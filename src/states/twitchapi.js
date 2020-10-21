import create from 'zustand';


export const [useTwitchApiStore] = create(set => ({
  apiClient: null,
  setApiClient: (client) => set({apiClient: client}),
  clearApiClient: () => set({apiClient: null})
}));