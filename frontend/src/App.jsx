import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import NoPage from "./pages/NoPage";
import PlacesRoute from "./pages/PlacesRoute";
import About from "./pages/About";
import BlogsDetails from "./pages/BlogsDetails";
import AdminHome from "./pages/Admin";
import AOS from "aos";
import "aos/dist/aos.css";
import Region from "./pages/Admin/Region";
import Destination from "./pages/Admin/Destination";
import Blog from "./pages/Admin/Blog";
import RegionForm from "./pages/Admin/CreateRegion";
import DestinationForm from "./pages/Admin/CreateDestination";
import DestinationTable from "./pages/Admin/Destination";
import CreateBlog from "./pages/Admin/CreateBlog";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blogs/:id" element={<BlogsDetails />} />
            <Route path="best-places" element={<PlacesRoute />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="admin" element={<AdminHome />} />

          <Route path="admin/region" element={<Region />} />
          <Route path="admin/destination" element={<DestinationTable />} />
          <Route path="admin/blog" element={<Blog />} />
          <Route path="admin/createRegion" element={<RegionForm />} />
           <Route path="admin/createDestination" element={<DestinationForm />} />
           <Route path="admin/createBlog" element={<CreateBlog />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
