import { Table } from 'antd';
import { useState } from 'react';

const Toptable = ({edge,ap,ict,net,rou,sensor,server}) => {
  const columns = [
    {
      title: '순번',
      dataIndex: 'arr',
    },
    {
      title: '장치ID',
      dataIndex: 'ID',
    },
    {
      title: '장비명칭',
      dataIndex: 'name',
    },
  ];
  
  const data = [
    {
      key: '1',
      arr:'1',
      ID: '1',
      name: '곤지암 엣지센터',
    },
    {
      key: '2',
      arr:'2',
      ID: '2',
      name: '엣지센터2',
    },
    {
      key: '3',
      arr:'3',
      ID: '3',
      name: '엣지센터3',
    },
  ];

  const [selectedRowKeys] = useState([]);

  const hasSelected = selectedRowKeys.length > 0;
  return (
    <div>
      <div
        style={{
          marginBottom: 16,
        }}
      >
        <span
          style={{
            marginLeft: 8,
          }}
        >
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
      </div>
      <Table 
      onRow={(record, rowIndex) => {
    return {
      onClick: (e) => {
        console.log(e)

      }, 
    }
  }}
  columns={columns} dataSource={data} />
    </div>
  );
};
export default Toptable;