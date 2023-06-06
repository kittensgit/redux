import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {

  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash)

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash })
  }

  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash })
  }


  return (
    <div className="App">
      <div style={{ fontSize: '3rem' }}>{cash}</div>
      <button onClick={() => addCash(Number(prompt()))}>add cash</button>
      <button onClick={() => getCash(Number(prompt()))}>get cash</button>
    </div>
  );
}

export default App;
