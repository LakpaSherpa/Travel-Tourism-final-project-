import React from "react";
import { NavLink } from "react-router-dom";
function AdminLayout({ children }) {
  const NavItem = [
    {
      label: "Home",
      route: "/admin",
      icon: "fa-solid fa-house",
    },
    {
      label: "Region",
      route: "/admin/region",
      icon: "fa-solid fa-user-group",
    },
    {
      label: "Destination",
      route: "/admin/destination",
      icon: "fa-solid fa-volume-high",
    },
    {
      label: "Booking",
      route: "/admin/booking",
      icon: "fa-solid fa-phone",
    },
    {
      label: "Blog",
      route: "/admin/blog",
      icon: "fa-solid fa-phone",
    },
  ];
  return (
    <div className="overflow-hidden flex h-screen">
      <div
        className={"Layout  w-72 bg-secondary p-10 overflow-auto "}
        style={{
          boxShadow: "0px 4px 31px 0px rgba(0, 0, 0, 0.07)",
        }}
      >
        <h1 className="text-light font-semibold text-5xl text-center my-7">
          <img src="/vite.svg" alt="logo Brp" className="w-10 mx-auto  " />
        </h1>

        <div className="flex flex-col justify-between h-auto w-full">
          <ul className="menu-items flex flex-col w-full">
            {NavItem.map((item, index) => {
              return (
                <NavLink
                  key={index}
                  to={item.route}
                  className={({ isActive }) =>
                    isActive ? "admin-link-active" : "admin-link"
                  }
                >
                  <i className={`${item.icon} text-lg mt-[-2px] `} />
                  {item.label}
                </NavLink>
              );
            })}
          </ul>
          <h1 className=" admin-link w-full cursor-pointer">
            <i
              className={`fa-solid fa-right-from-bracket text-lg mt-[-2px] `}
            />
            Logout
          </h1>
        </div>
      </div>

      <div className="bg-grey flex-1 overflow-y-auto relative">
        <div className="px-10 py-10 h-auto admin-layout-bg">{children}</div>
      </div>
    </div>
  );
}

export default AdminLayout;
