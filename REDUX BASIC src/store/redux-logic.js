import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter-slice'
import authReducer from './auth-slice'

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;

// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'increment') {
//     return { ...state, counter: state.counter + 1 };
//   }
//   if (action.type === 'decrement') {
//     return { ...state, counter: state.counter -1 };
//   }
//   if (action.type === 'countBy') {
//     return { ...state, counter: state.counter + action.value };
//   }
//   if (action.type === 'toggle') {
//     return { ...state, isShown: !state.isShown };
//   } else return state;
// };
