const COUNTER_INCREASE = 'counter/INCREASE';
const COUNTER_DECREASE = 'counter/DECREASE';

// action creators
export const increaseAction = (number) => {
  return {
    type: COUNTER_INCREASE,
    payload: {
      number,
    },
  }
}

export function decreaseAction(number) {
  return {
    type: COUNTER_DECREASE,
    payload: {
      number,
    },
  }
}

const intitialState = {
  count: 0,
}

export default function counterReducer(state = intitialState, action) {
  switch(action.type) {
    case COUNTER_INCREASE: {
      const { payload } = action;
      const newState = { ...state };
      newState.count += payload.number;
      return newState;
    }
    case COUNTER_DECREASE: {
      const { payload } = action;
      const newState = { ...state };
      newState.count -= payload.number;
      return newState;
    }
    default: return state;
  }
}
