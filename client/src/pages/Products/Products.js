import { Table } from 'antd';
import { useEffect, useState } from 'react';
import { getProducts } from '../../services/products.service';

function Products() {
  const [products, setProducts] = useState([]); // const products = [];

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data.data.products);
    };

    fetchProducts();
  }, []);

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
      <Table dataSource={products} columns={columns} />
    </div>
  );
}

export default Products;
