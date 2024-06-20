import React, { useEffect, useState } from 'react';
import { Table, Button, Modal, Form, Input } from 'antd';
import { addUser, deleteUser, getUsers } from './services/Api';
const CustomerTable = () => {
  const [feedbackData, setFeedbackData] = useState([]);
  const [isAddUserModalVisible, setIsAddUserModalVisible] = useState(false); // State to manage modal visibility
  const fetchData = async () => {
    try {
      const response = await getUsers();
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
      title: 'User ID',
      dataIndex: 'userID',
      key: 'userID',
    },
    {
      title: 'First Name',
      dataIndex: 'firstname',
      key: 'firstname',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastname',
      key: 'lastname',
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <span>
          
          <Button type="primary" onClick={() => handleDelete(record.userID)}>
            Delete
          </Button>
        </span>
      ),
    },
  ];

  const handleDelete = async (userID) => {
    try {
      const response = await deleteUser(userID);
    window.location.reload();
    if (response.status === 200) {
      fetchData();
    }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };


  return (
    <div>
      <Table columns={columns} dataSource={feedbackData} />

    </div>
  );
};

export default CustomerTable;
