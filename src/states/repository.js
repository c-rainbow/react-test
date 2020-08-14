import create from 'zustand';


export const [useRepositoryStore] = create(set => ({
  originalRepository: null,
  repository: null,
  loadNewRepo: (repo) => set({originalRepository: repo, repository: repo}),
  setFilteredRepo: (filtered) => set({repository: filtered}),
  clearFilteredRepo: () => set(state => ({repository: state.originalRepository}))
}));