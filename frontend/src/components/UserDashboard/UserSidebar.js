import React from "react";
import "./sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import MessageIcon from "@material-ui/icons/Message";
import ContactsIcon from "@material-ui/icons/Contacts";
import DvrIcon from "@material-ui/icons/Dvr";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
function UserSidebar() {
  return (
    <div className="sidebar shadow-lg">
      <div className="flex flex-col mx-2  mt-6 ">
        <div className="flex flex-row  pt-3  ml-3 pointer hover:bg-gray-100 mt-2 p-2 ">
          <h1 className="mr-4">
            <HomeIcon />
          </h1>
          <h1>Dashboard</h1>
        </div>
        <div className="flex flex-row  pt-3  ml-3 pointer hover:bg-gray-100 mt-2 p-2  ">
          <h1 className="mr-4">
            <i className="far fa-calendar-alt text-lg "></i>
          </h1>
          <h1>Appointments</h1>
        </div>
        <div className="flex flex-row  pt-3  ml-3 pointer hover:bg-gray-100 mt-2 p-2 ">
          <h1 className="mr-4">
            <i className="fas fa-ambulance"></i>
          </h1>
          <h1>Emergency</h1>
        </div>
        <div className="flex flex-row  pt-3  ml-3 pointer hover:bg-gray-100 mt-2 p-2 ">
          <h1 className="mr-4">
            <MessageIcon />
          </h1>
          <h1>Messages</h1>
        </div>

        <div className="flex flex-row  pt-3  ml-3 pointer hover:bg-gray-100 mt-2 p-2 ">
          <h1 className="mr-4">
            <ContactsIcon />
          </h1>
          <h1>Contacts</h1>
        </div>
        <div className="flex flex-row  pt-3  ml-3 pointer hover:bg-gray-100 mt-2 p-2 ">
          <h1 className="mr-4">
            <i className="fas fa-pills"></i>
          </h1>
          <h1>Medics</h1>
        </div>
        <div className="flex flex-row  pt-3  ml-3 pointer hover:bg-gray-100 mt-2 p-2 ">
          <h1 className="mr-4">
            <i className="fas fa-syringe"></i>
          </h1>
          <h1>Blood Bank</h1>
        </div>
        <div className="flex flex-row  pt-3  ml-3 pointer hover:bg-gray-100 mt-2 p-2 ">
          <h1 className="mr-4">
            <DvrIcon />
          </h1>
          <h1>Events</h1>
        </div>
        <div className="flex flex-row  pt-3  ml-3 pointer hover:bg-gray-100 mt-2 p-2 ">
          <h1 className="mr-4">
            <AccountBalanceIcon />
          </h1>
          <h1>Fund</h1>
        </div>
        <div className="flex flex-row  pt-3  ml-3 pointer hover:bg-gray-100 mt-2 p-2 ">
          <h1 className="mr-4">
            <i className="fas fa-wheelchair"></i>
          </h1>
          <h1>Handicapped</h1>
        </div>
        <div className="flex flex-row  pt-3  ml-3 pointer hover:bg-gray-100 mt-2 p-2 ">
          <h1 className="mr-4">
            <i className="fas fa-signal"></i>
          </h1>
          <h1>Plans</h1>
        </div>
      </div>
    </div>
  );
}

export default UserSidebar;
