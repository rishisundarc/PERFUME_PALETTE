import React, { useState } from 'react';
import { Table, Typography, Button } from 'antd';
import { Card } from 'antd';
import example from '../pictures/perfumes.jpeg';
import { useNavigate } from 'react-router-dom';
import SelectFlavours from './SelectFlavours';

const { Meta } = Card;
const { Title, Text } = Typography;

const columns = [
  {
    title: 'Item',
    dataIndex: 'item',
    key: 'item',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    render: (text) => `$${text.toFixed(2)}`,
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'total',
    render: (text) => `$${text.toFixed(2)}`,
  },
];

const Output = ({ mlValues }) => {
  const navigate = useNavigate();
  const [showSelectFlavors, setShowSelectFlavors] = useState(false);

  const handleBuyNow = () => {
    navigate("/check");
    console.log('BUY NOW button clicked');
  };

  const handleAdd = () => {
    setShowSelectFlavors(true);
  };

  const data = [
    {
      key: '1',
      item: 'Product A',
      quantity: mlValues['Product A'] || 2, // Replace 'Product A' with your actual item name
      price: 10.0,
      total: 20.0,
    },
    {
      key: '2',
      item: 'Product B',
      quantity: mlValues['Product B'] || 1, // Replace 'Product B' with your actual item name
      price: 15.0,
      total: 15.0,
    },
    // Add more data entries as needed
  ];

  const total = data.reduce((acc, current) => acc + current.total, 0);

  return (
    <div>
      {!showSelectFlavors ? (
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src={example} />}
        >
          <Button
            type="primary"
            style={{ marginTop: '16px', marginLeft: '300px' }}
            onClick={handleAdd}
          >
            ADD
          </Button>
          <Meta title="Customize Perfume" />
        </Card>
      ) : (
        <SelectFlavours />
      )}
      {!showSelectFlavors && (
        <div>
          <Title level={2}>Bill Statement</Title>
          <Table columns={columns} dataSource={data} pagination={false} />

          {mlValues && Object.keys(mlValues).length > 0 && (
            <div style={{ marginTop: '16px' }}>
              <Text strong>Flavor and mL Values:</Text>
              <ul>
                {Object.keys(mlValues).map((flavor) => (
                  <li key={flavor}>
                    {flavor}: {mlValues[flavor]} mL
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div style={{ marginTop: '16px' }}>
            <Text strong>Total:</Text>
            <Text strong style={{ marginLeft: '8px' }}>
              ${total.toFixed(2)}
            </Text>
          </div>
        </div>
      )}

      {!showSelectFlavors && (
        <Button type="primary" style={{ marginTop: '16px' }} onClick={handleBuyNow}>
          BUY NOW
        </Button>
      )}
    </div>
  );
};

export default Output;
