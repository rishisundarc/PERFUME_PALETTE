import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Input, InputNumber } from 'antd';
import { addflavour, deleteFlavour, getflavour } from './services/Api';
import { toast } from 'react-toastify';
const StockTable = () => {
  const [feedbackData, setFeedbackData] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    stock: '',
    price: '',
  });
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);
  const [form] = Form.useForm();

  const fetchData = async () => {
    try {
      const response = await getflavour();
      setFeedbackData(response.data);
    } catch (error) {
      console.error('Error fetching feedback data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    {
      title: 'Stock ID',
      dataIndex: 'flavourID',
      key: 'flavourID',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Available',
      dataIndex: 'stock',
      key: 'stock',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <span>
          <Button type="primary" onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Button type="danger" onClick={() => handleDelete(record.flavourID)}>
            Delete
          </Button>
        </span>
      ),
    },
  ];

  const handleEdit = (record) => {
    form.setFieldsValue({
      name: record.name,
      description: record.description,
      stock: record.available,
      price: record.price,
    });
    setEditingRecord(record);
    setIsEditModalVisible(true);
  };

  const handleDelete = async (flavourID) => {
    try {
      const response = await deleteFlavour(flavourID);
      window.location.reload();
      if (response.status === 200) {
        toast.success('Flavor deleted successfully');
        fetchData();
      } else {
        toast.error('Failed to delete flavor');
      }
    } catch (error) {
      console.error('Error deleting flavor:', error);
    }
  };

  const handleAddSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await addflavour(formData);
      window.location.reload();
      setFormData(response.data);
    } catch (error) {
      console.error('Error in handleSubmit:', error);
    }
  };

  return (
    <div>
      <h3>Stock Table</h3>
      <Button type="primary" onClick={() => setIsAddModalVisible(true)}>
        Add
      </Button>
      <Table columns={columns} dataSource={feedbackData} />

      <Modal
        title="Add Product"
        visible={isAddModalVisible}
        onCancel={() => {
          setIsAddModalVisible(false);
          form.resetFields();
        }}
        footer={null}
      >
        <Form
          form={form}
          onSubmit={() => setIsAddModalVisible(false)}
          layout="vertical"
        >
          <Form.Item
            name="name"
            label="Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            rules={[{ required: true, message: 'Please enter the name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            rules={[
              {
                required: true,
                message: 'Please enter the description of quantity',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="available"
            label="Available"
            value={formData.stock}
            onChange={(e) =>
              setFormData({ ...formData, stock: e.target.value })
            }
            rules={[
              {
                required: true,
                message: 'Please enter the available quantity',
              },
            ]}
          >
            <InputNumber min={0} />
          </Form.Item>
          <Form.Item
            name="price"
            label="Price"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
            rules={[{ required: true, message: 'Please enter the price' }]}
          >
            <InputNumber min={0} />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              onClick={handleAddSubmit}
            >
              Add
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="Edit Product"
        visible={isEditModalVisible}
        onCancel={() => {
          setIsEditModalVisible(false);
          setEditingRecord(null);
          form.resetFields();
        }}
        footer={null}
      >
        <Form
          form={form}
          onSubmit={() => setIsEditModalVisible(false)}
          layout="vertical"
        >
          <Form.Item
            name="name"
            label="Name"
            value={editingRecord ? editingRecord.name : ''}
            rules={[{ required: true, message: 'Please enter the name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            value={editingRecord ? editingRecord.description : ''}
            rules={[
              {
                required: true,
                message: 'Please enter the description of quantity',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="available"
            label="Available"
            value={editingRecord ? editingRecord.available : ''}
            rules={[
              {
                required: true,
                message: 'Please enter the available quantity',
              },
            ]}
          >
            <InputNumber min={0} />
          </Form.Item>
          <Form.Item
            name="price"
            label="Price"
            value={editingRecord ? editingRecord.price : ''}
            rules={[{ required: true, message: 'Please enter the price' }]}
          >
            <InputNumber min={0} />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              onClick={handleEdit}
            >
              Save
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default StockTable;
