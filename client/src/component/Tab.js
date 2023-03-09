import { Tabs } from 'antd';
import { Innertab } from './innertab';
import React, { useState } from "react"

const onChange = (key) => {
  console.log(key);
};





const Tab = ({edge,ap,ict,net,rou,sensor,server}) =>{


  const items = [
    {
      key: '1',
      label: '센터',
      children: <Innertab edge={edge} ap={ap} ict={ict} net={net} rou={rou} sensor={sensor} server={server}/>,
    },  
    {
      key: '2',
      label: "서버",
      children: <Innertab edge={edge} ap={ap} ict={ict} net={net} rou={rou} sensor={sensor} server={server}/>,
    },
    {
      key: '3',
      label: `스위치`,
      children: <Innertab edge={edge} ap={ap} ict={ict} net={net} rou={rou} sensor={sensor} server={server}/>,
    },
    {
      key: '4',
      label: `라우터`,
      children: <Innertab edge={edge} ap={ap} ict={ict} net={net} rou={rou} sensor={sensor} server={server}/>,
    },
    {
      key: '5',
      label: `센서`,
      children: <Innertab edge={edge} ap={ap} ict={ict} net={net} rou={rou} sensor={sensor} server={server}/>,
    },
  ];  

  
  
  
  return(<Tabs defaultActiveKey="1" items={items} onChange={onChange}/>)
  

} 
export {Tab};