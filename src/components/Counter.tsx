import {useDispatch, useSelector} from "react-redux";
import {counterSlice} from "../store/counterSlice";

const Counter = () => {
    const counter = useSelector((state : any) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <main>
            <h2>Redux Counter</h2>
            <div style={{marginBottom: '30px'}}>{counter}</div>
            <div>
                <button onClick={() => dispatch(counterSlice.actions.increment())}>Increase</button>
                <button onClick={() => dispatch(counterSlice.actions.decrement())}>Decrease</button>
            </div>
        </main>
    );
}

export default Counter;
