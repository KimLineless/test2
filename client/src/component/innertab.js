// import React, { useEffect,useState } from "react"

import { Tabs } from 'antd';
import Table from './table';

const onChange = (Key) => {
  
};

const Innertab = ({edge,ap,ict,net,rou,sensor,server}) => {

    const items1 = [
        {
        key: '1',
        label: edge[0]?.edge_name,
        children: <Table edge={edge} ap={ap} ict={ict} net={net} rou={rou} sensor={sensor} server={server}/>,
        },  
        {
        key: '2',
        label: edge[1]?.edge_name,
        children: <Table edge={edge} ap={ap} ict={ict} net={net} rou={rou} sensor={sensor} server={server}/>,
        },
        {
        key: '3',
        label:edge[2]?.edge_name,
        children: <Table edge={edge} ap={ap} ict={ict} net={net} rou={rou} sensor={sensor} server={server}/>,
        }
    ];

    return(
        <Tabs defaultActiveKey="1" items={items1} onChange={onChange} /> 
    )
}
export {Innertab};