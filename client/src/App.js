import './App.css';
import React, { useEffect,useState } from "react"
import {Tab} from './component/Tab';
import Axios from "axios"

function App() {

  const [edge,setEdge] = useState([])
  const [ap,setAp] = useState('')
  const [ict,setIct] = useState('')
  const [net,setNet] = useState('')
  const [rou,setRou] = useState('')
  const [sensor,setSensor] = useState('')
  const [server,setServer] = useState('')

  useEffect(() =>{
    Axios.get("/api/allFacilInfo")
    .then((res)=>{
      if(res.status === 200){
        console.log(res.data);
        setEdge(res.data?.edgeInfo)
        setAp(res.data.apName)
        setIct(res.data.ictInfo)
        setNet(res.data.networkInfo)
        setRou(res.data.routerInfo)
        setSensor(res.data.sensorInfo)
        setServer(res.data.serverInfo)
      }
    }).catch((e)=>{
      console.log("error",e);
    })
  },[])


  return (

    <div className="App">
      <div className='wrap_box'>
      <h3>시설정보</h3>
      <Tab edge={edge} ap={ap} ict={ict} net={net} rou={rou} sensor={sensor} server={server}/>
      <h3>시설 상세정보</h3>
    </div>
    </div>
  );
}

export default App;
