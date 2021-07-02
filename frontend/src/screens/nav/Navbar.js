import React from "react";
import "./navbar.css";
import DvrIcon from "@material-ui/icons/Dvr";
import MessageIcon from "@material-ui/icons/Message";
import NotificationsIcon from "@material-ui/icons/Notifications";
function Navbar() {
  return (
    <div className="nav shadow-lg">
      <div className="nav flex flex-row font-bold mx-8 my-auto mt-4 justify-between">
        <div className="navLeft">
          <h3>
            Doctor<span className="font-thin">Sahab</span>
          </h3>
        </div>
        <div class="flex rounded-full border-grey-light border w-1/3">
          <button>
            <span class=" flex justify-end items-center text-grey p-2">
              <i class="fas fa-search"></i>
            </span>
          </button>
          <input
            class="w-full rounded mr-4"
            type="text"
            placeholder="Search hospitals nearby"
          />
        </div>
        <div className="navRight flex flex-row  justify-between items-center  ">
          <div className="msg mx-4 ">
            <h3>
              <DvrIcon />
            </h3>
          </div>
          <div className="msg mx-4 ">
            <h3>
              <MessageIcon />
            </h3>
          </div>
          <div className="bell mx-4 ">
            <h3>
              <NotificationsIcon />
            </h3>
          </div>
          <div className="proImg mx-4">
            <h3 className="">
              <img
                src="https://alchetron.com/cdn/madan-krishna-shrestha-3548806c-8a5a-485a-8f52-7ae81b6c0ed-resize-750.jpeg"
                alt=""
                className="rounded-full "
              />
            </h3>
          </div>
          <div className="username">
            <h3> Madan Bahadur</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
