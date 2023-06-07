import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addCashAction, getCashAction } from './store/cashReducer';
import { addCustomersAction, removeCustomersAction } from './store/customerReducer';
import { fetchCustomers } from './asyncAction';

function App() {

  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)

  const addCash = (cash) => {
    dispatch(addCashAction(cash))
  }

  const getCash = (cash) => {
    dispatch(getCashAction(cash))
  }
  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now
    }
    dispatch(addCustomersAction(customer))
  }

  const removeCustomer = (id) => {
    dispatch(removeCustomersAction(id))
  }


  return (
    <div className="App">
      <div style={{ fontSize: '3rem' }}>{cash}</div>
      <button onClick={() => addCash(Number(prompt()))}>add cash</button>
      <button onClick={() => getCash(Number(prompt()))}>get cash</button>
      <button onClick={() => addCustomer(prompt())}>add customer</button>
      <button onClick={() => dispatch(fetchCustomers())}>add many customers</button>
      {customers.length > 0
        ? customers.map(customer => <div onClick={() => removeCustomer(customer.id)}>
          {customer.name}
        </div>)
        : <div>customers no found</div>
      }
    </div>
  );
}

export default App;
