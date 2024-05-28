import React, { useState, useEffect } from 'react';
import { Table, Space, Switch } from 'antd';
// import ClientsApiService from '../../../api/Client'; 

const User = () => {
  const [clients, setClients] = useState([]);

//   const fetchData = async () => {
//     try {
//       const clientsData = await ClientsApiService.fetchAllClients();
//       setClients(clientsData);
//     } catch (error) {
//       console.error('Error fetching clients:', error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const toggleDoctorStatus = async (id, originalIsFeatured, setIsFeatured) => {
//   try {
//     setIsFeatured(!originalIsFeatured);
//     await ClientsApiService.updateClientFetauredStatus(id);
//     window.location.reload(); // Reload the page after successful update
//   } catch (error) {
//     setIsFeatured(originalIsFeatured);
//     console.error('Error toggling doctor status:', error);
//   }
// };


//   const FeaturedSwitch = ({ id, isFeatured }) => {
//     const [localIsFeatured, setLocalIsFeatured] = useState(isFeatured);

//     const handleChange = () => {
//       toggleDoctorStatus(id, isFeatured, setLocalIsFeatured);
//     };

//     return (
//       <Space size="middle">
//         <Switch
//           checked={localIsFeatured}
//           onChange={handleChange}
//           style={{ backgroundColor: localIsFeatured ? '#53C31B' : '' }}
//         />
//       </Space>
//     );
//   };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'full_name',
      key: 'full_name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Featured',
      key: 'isFeatured',
      render: (text, record) => (
        <FeaturedSwitch id={record._id} isFeatured={record.isFeatured} />
      ),
    },
  ];

  return (
    <div>
      <h1>User Management</h1>
      <Table columns={columns} dataSource={clients} />
    </div>
  );
};

export default User;
