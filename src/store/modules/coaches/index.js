import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      coaches: [
        {
          id: 'c1',
          firstName: 'Xavier',
          lastName: 'Hernandez',
          areas: ['frontend', 'backend', 'career'],
          description:
            "I'm Xavier and I work as a freelance web developer. Let me help you become a developer as well!",
          hourlyRate: 99
        },
        {
          id: 'c2',
          firstName: 'Scarlett',
          lastName: 'Johansson',
          areas: ['frontend', 'career'],
          description:
            'I am Scarlett and as a senior developer in a big tech company, I can help you become as strong as Xavier.',
          hourlyRate: 199
        }
      ] 
    };
  },
  mutations,
  actions,
  getters
};