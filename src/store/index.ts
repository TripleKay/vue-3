import { createStore } from 'vuex'

export default createStore({
  state: { //data
    name: 'TRIPLE-K',
    user: [
      {
        id: 1,
        name: 'Kyaw Kyaw',
        job: 'programmer',
        workingHour: '20hr',
        isDone: true
      },
      {
        id: 2,
        name: 'Aung Aung',
        job: 'gamer',
        workingHour: '10hr',
        isDone: false
      },
      {
        id: 3,
        name: 'Mr.K',
        job: 'developer',
        workingHour: '8hr',
        isDone: true
      },
      {
        id: 4,
        name: 'Kyaw Kyi',
        job: 'engineer',
        workingHour: '9hr',
        isDone: true
      },
    ]
  },
  getters: { //computed
    getUserCount : state => state.user.length,
    doneJob: state => state.user.filter( x => x.isDone === true ),
    unDoneJobCount: (state,getters) => getters.getUserCount - getters.doneJob.length
  },
  mutations: { // action->use->change state data
  },
  actions: { //methods
  },
  modules: {
  }
})
