import { connect } from 'react-redux';
import Calc from '../../components/Calc';
import { decreaseAction, increaseAction } from '../../reducers/counter';

const mapStateToProps = (state) => {
  const { counter } = state;
  const { count } = counter;
  return {
    counter: count,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increase: function(number = 1) {
      const action = increaseAction(number);
      dispatch(action);
    },
    decrease: function(number = 1) {
      dispatch(decreaseAction(number));
    },
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increase: increaseAction,
//     decrease: decreaseAction,
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(Calc);
