import React from 'react';
import { Modal, Form, Input, InputNumber, Button } from 'antd';
import { saveProducts } from '../../services/products.service';

const FormProduct = ({ isModalVisible, closeModal, onFinish }) => {
  const handleFinish = async (values) => {
    const data = await saveProducts(values);
    onFinish(data.data.product);
  };

  return (
    <>
      <Modal
        title="Adicionar Produto"
        visible={isModalVisible}
        footer={[
          <Button key="cancel" onClick={closeModal}>
            Cancelar
          </Button>,
          <Button form="formProduct" key="submit" htmlType="submit" type="primary">
            Adicionar
          </Button>,
        ]}
      >
        <Form name="formProduct" labelCol={{ span: 8 }} onFinish={handleFinish}>
          <Form.Item label="Nome" name="name" required>
            <Input />
          </Form.Item>
          <Form.Item label="Quantidade" name="quantity" required>
            <InputNumber />
          </Form.Item>
          <Form.Item label="Descrição" name="description" required>
            <Input />
          </Form.Item>
          <Form.Item label="Categoria" name="category" required>
            <Input />
          </Form.Item>
          <Form.Item label="Preço" name="price" required>
            <InputNumber />
          </Form.Item>
          <Form.Item label="Data de Fabricação" name="manufacturing_date" required>
            <Input />
          </Form.Item>
          <Form.Item label="Data de Vencimento" name="due_date" required>
            <Input />
          </Form.Item>
          <Form.Item label="CNPJ do Fornecedor" name="vendor_cnpj" required>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default FormProduct;
