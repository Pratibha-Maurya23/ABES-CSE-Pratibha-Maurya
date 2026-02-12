import { useEffect,useState } from 'react';
import axios from 'axios';
import { CgProfile } from "react-icons/cg";
import './App.css'

function App() {
  const [data,setData] = useState([]);
  useEffect(()=>{
    // Using fetch
    // fetch("http://localhost:8080/about")
    // .then((res)=>res.json())
    // .then((result)=>{
    //   setData(result)
    //   )}
    axios.get("http://localhost:8080/about")
    .then((res)=>{setData(res.data)})
    .catch((err)=>{
      console.log(err);
    })
},[]);

  return ( <div class="container">
    {data.map((item) => (
    <div className="box" key={item.id}>
      <div className="img"><CgProfile  className='imgIcon'/></div>
      <div className="info">
        <h2>Name : <span>{item.name}</span></h2>
        <h3>Class : <span>{item.class}</span></h3>
      </div>
    </div>
     ))}
  </div>  
  )
}

export default App;
