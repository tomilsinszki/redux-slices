import {useDispatch, useSelector} from "react-redux";
import {colorSlice} from "../store/colorSlice";

const Container = () => {
    const color = useSelector((state : any) => state.color.value);
    const dispatch = useDispatch();

    console.log('COLOR changed!');

    return (
        <div style={{padding: '30px', backgroundColor: color, marginBottom: '20px'}}>
            <div>
                <button onClick={() => dispatch(colorSlice.actions.set('blue'))}>Blue</button>
                <button onClick={() => dispatch(colorSlice.actions.set('red'))}>Red</button>
            </div>
        </div>
    );
}

export default Container;
