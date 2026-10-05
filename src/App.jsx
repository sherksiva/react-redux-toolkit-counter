import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, reset } from './CounterSlice';

export default function App() {
  // Read 'value' from the 'counter' slice
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Count: {count}</h2>
      <div>
        <button onClick={() => dispatch(decrement())}>- Decrease</button>
        <button onClick={() => dispatch(increment())} style={{ margin: '0 10px' }}>
          + Increase
        </button>
        <button onClick={() => dispatch(incrementByAmount(5))}>
          + Add 5
        </button>
        <button onClick={() => dispatch(reset())} style={{ marginLeft: '10px' }}>
          Reset
        </button>
      </div>
    </div>
  );
}
