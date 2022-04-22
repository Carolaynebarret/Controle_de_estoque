import { PageHeader, Table, Button } from 'antd';
import { useEffect, useState } from 'react';
import FormSale from '../../components/FormSale/FormSale';
import { getSales } from '../../services/sales.service';

function Sales() {
  const [sales, setSales] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const fetchsales = async () => {
      const data = await getSales();
      setSales(data.data.sales);
    };

    fetchsales();
  }, []);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const addSaleToList = async (sale) => {
    setSales([...sales, sale]);
    closeModal();
  };

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
    <>
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title="Vendas"
        extra={[
          <Button key="1" type="primary" onClick={showModal}>
            Adicionar
          </Button>,
        ]}
      ></PageHeader>
      <Table dataSource={sales} columns={columns} rowKey="id" />
      <FormSale isModalVisible={isModalVisible} closeModal={closeModal} onFinish={addSaleToList} />
    </>
  );
}

export default Sales;
