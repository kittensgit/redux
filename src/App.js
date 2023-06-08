import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { AsyncDecrementAction, AsyncIcrementAction } from './store/countReducer';

function App() {

  const dispatch = useDispatch()
  const count = useSelector(state => state.countReducer.count)
  const users = useSelector(state => state.usersReducer.users)

  return (
    <div className="App">
      <div style={{ fontSize: '3rem' }}>{count}</div>
      <button onClick={() => { dispatch(AsyncIcrementAction()) }}>increment</button>
      <button onClick={() => { dispatch(AsyncDecrementAction()) }}>decrement</button>
      <button>add users</button>
      {users.length > 0
        ? users.map(user => <div>
          {user.name}
        </div>)
        : <div>user not found</div>
      }
    </div>
  );
}

export default App;
