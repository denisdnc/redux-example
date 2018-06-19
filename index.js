const createStore = require('redux').createStore

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      state = state + action.payload
      break;
    case 'SUBTRACT':
      state = state - action.payload
      break;
  }
  return state
}

const store = createStore(reducer, 1)

store.subscribe(() => {
  console.log('Store updated!!!', store.getState())
})

store.dispatch({
  type: 'ADD',
  payload: 1
})

store.dispatch({
  type: 'ADD',
  payload: 4
})

store.dispatch({
  type: 'SUBTRACT',
  payload: 2
})