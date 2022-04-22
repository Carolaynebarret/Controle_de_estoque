import { Table, PageHeader, Button } from 'antd';
import { useEffect, useState } from 'react';
import FormProduct from '../../components/FormProduct/FormProduct';
import { getProducts } from '../../services/products.service';

function Products() {
  const [products, setProducts] = useState([]); // const products = [];
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data.data.products);
    };

    fetchProducts();
  }, []);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const addProductToList = async (product) => {
    setProducts([...products, product]);
    closeModal();
  };

  const columns = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Categoria',
      dataIndex: 'category',
      key: 'category',
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
      title: 'Data de Fabricação',
      dataIndex: 'manufacturing_date',
      key: 'manufacturing_date',
    },
    {
      title: 'Data de Vencimento',
      dataIndex: 'due_date',
      key: 'due_date',
    },
  ];

  return (
    <div className="Products">
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title="Produtos"
        extra={[
          <Button key="1" type="primary" onClick={showModal}>
            Adicionar
          </Button>,
        ]}
      ></PageHeader>
      <Table dataSource={products} columns={columns} />
      <FormProduct isModalVisible={isModalVisible} closeModal={closeModal} onFinish={addProductToList} />
    </div>
  );
}

export default Products;
