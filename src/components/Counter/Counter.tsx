import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { decrement, increment } from '../../features/counter/counterSlice';
import styles from './style.module.scss';

const Counter = () => {
    // The `state` arg is correctly typed as `RootState` already
    const count = useAppSelector(state => state.counter.value);
    const dispatch = useAppDispatch();

    return (
        <>
            <h1 className={styles.greeting}>Sample RTK Counter</h1>
            <button onClick={() => dispatch(decrement())}>-</button>
            <div>{count}</div>
            <button onClick={() => dispatch(increment())}>+</button>
        </>
    );
};

export default Counter;
