import React from "react";

import AdminDashboard from "./pages/admin/Dashboard.jsx/AdminDashBoard";

const AdminLayout = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <>
      <AdminDashboard />

    </>
  );
};

export default AdminLayout;
