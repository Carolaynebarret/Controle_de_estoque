import { Table } from 'antd';
import { useEffect, useState } from 'react';
import { getSales } from '../../services/sales.service';

function Sales() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const fetchsales = async () => {
      const data = await getSales();
      setSales(data.data.sales);
    };

    fetchsales();
  }, []);

  const columns = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Qntd.',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Preço',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Data',
      dataIndex: 'date',
      key: 'date',
    },
  ];

  return (
    <div className="Sales">
      <Table dataSource={sales} columns={columns} />
    </div>
  );
}

export default Sales;
