import { useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import {  useSelector } from 'react-redux/es/hooks/useSelector';


const Counter = () => {
  const counter = useSelector(state => state.counter);

  const dispatch = useDispatch();

  const incrmentHandler =() =>{
    dispatch({type: 'incriment'})
  }
  const decrimentHandler =() =>{
    dispatch({type: 'decriment'})
  }
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrmentHandler}>Incriment</button>
        <button onClick={decrimentHandler}>Decriment</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
