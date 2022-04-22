import React from 'react';
import { Modal, Form, Input, InputNumber, Button } from 'antd';
import { saveSale } from '../../services/sales.service';

const FormSale = ({ isModalVisible, closeModal, onFinish }) => {
  const handleFinish = async (values) => {
    const data = await saveSale(values);
    onFinish(data.data.sale);
  };

  return (
    <>
      <Modal
        title="Adicionar Venda"
        visible={isModalVisible}
        footer={[
          <Button key="cancel" onClick={closeModal}>
            Cancelar
          </Button>,
          <Button form="formSale" key="submit" htmlType="submit" type="primary">
            Adicionar
          </Button>,
        ]}
      >
        <Form name="formSale" labelCol={{ span: 8 }} onFinish={handleFinish}>
          <Form.Item label="Quantidade" name="quantity" required>
            <InputNumber />
          </Form.Item>
          <Form.Item label="Data" name="date" required>
            <Input />
          </Form.Item>
          <Form.Item label="Preço" name="price" required>
            <InputNumber />
          </Form.Item>
          <Form.Item label="ID do Produto" name="product_id" required>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default FormSale;
