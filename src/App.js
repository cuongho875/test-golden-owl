import {useEffect, useState} from 'react';
import json from './app/data/shoes.json';
import './App.scss'
import AppCard from './components/AppCard';
import { useSelector } from 'react-redux';
function App() {
  const [data,setData] = useState(json.shoes);
  useEffect(()=>{
    // console.log(data)
  },[])
  return (
    <div className="App">
      <AppCard type="product" data={data}/>
      <AppCard type="cart"/>
    </div>
  );
}

export default App;
