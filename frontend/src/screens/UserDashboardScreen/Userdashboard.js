import React, { useState, useEffect } from "react";
import "./userdashboard.css";

import Navbar from "components/DashboardShared/Navbar";
import UserSidebar from "../../components/UserDashboard/UserSidebar";
import axios from "axios";
import Button from "components/GlobalComponents/Button";

function Userdashboard() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row bigBody ">
        <UserSidebar />
        <section className="text-gray-600 body-font">
          <div className="container px-2 py-2 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="mx-auto text-lg mt-2 p-2 font-bold text-gray-600">
                <h6>Hospitals and Clinic </h6>
              </div>
              <section className="text-gray-600 body-font">
                <div className="container px-5 py-5  mx-auto">
                  <div className="flex flex-wrap -m-4">
                    {/* here */}
                    <div className="p-4 md:w-1/3  ">
                      <div className="h-full border-4 shadow border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img
                          className="lg:h-48 md:h-36 w-full object-cover object-center"
                          src="data:image/jpeg;base64,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"
                          alt="blog"
                        />
                        <div className="p-6">
                          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                            Mutu Hospital
                            <p>
                              Location <i className="fas fa-map-marker-alt"></i>
                            </p>
                          </h2>
                          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                            Gautam Buddha Hospital
                          </h1>
                          <p className="leading-relaxed mb-3 text-sm">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Nihil minus consequatur qui voluptatum
                          </p>
                          <div className="flex items-start flex-wrap ">
                            <a
                              className="text-indigo-500 text-sm  inline-flex items-center md:mb-2 lg:mb-0"
                              href="/"
                            >
                              Make Appointment
                              <svg
                                className="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                              </svg>
                            </a>

                            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                              <svg
                                className="w-4 h-4 mr-1"
                                stroke="currentColor"
                                stroke-width="2"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                viewBox="0 0 24 24"
                              >
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>
                              1.2K
                            </span>
                            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                              <svg
                                className="w-4 h-4 mr-1"
                                stroke="currentColor"
                                stroke-width="2"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                viewBox="0 0 24 24"
                              >
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                              </svg>
                              6
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ends */}
                    <div className="p-4 md:w-1/3  ">
                      <div className="h-full border-4 shadow border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img
                          className="lg:h-48 md:h-36 w-full object-cover object-center"
                          src="https://i.ytimg.com/vi/68zgjA4OPVs/maxresdefault.jpg"
                          alt="blog"
                        />
                        <div className="p-6">
                          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                            CATEGORY
                            <p>
                              Location <i className="fas fa-map-marker-alt"></i>
                            </p>
                          </h2>
                          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                            Civil Hospital
                          </h1>
                          <p className="leading-relaxed mb-3 text-sm">
                            Photo booth fam kinfolk cold-pressed sriracha
                            leggings jianbing microdosing tousled waistcoat.
                          </p>
                          <div className="flex items-start flex-wrap">
                            <a
                              className="text-indigo-500 text-sm  inline-flex items-center md:mb-2 lg:mb-0"
                              href="/"
                            >
                              Make Appointment
                              <svg
                                className="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                              </svg>
                            </a>
                            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                              <svg
                                className="w-4 h-4 mr-1"
                                stroke="currentColor"
                                stroke-width="2"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                viewBox="0 0 24 24"
                              >
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>
                              1.2K
                            </span>
                            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                              <svg
                                className="w-4 h-4 mr-1"
                                stroke="currentColor"
                                stroke-width="2"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                viewBox="0 0 24 24"
                              >
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                              </svg>
                              6
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 md:w-1/3  ">
                      <div className="h-full border-4 shadow border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img
                          className="lg:h-48 md:h-36 w-full object-cover object-center"
                          src="https://thehimalayantimes.com/uploads/imported_images/wp-content/uploads/2018/05/Bir-Hospital-1.jpg"
                          alt="blog"
                        />
                        <div className="p-6">
                          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                            Emergency
                            <p>
                              Location <i className="fas fa-map-marker-alt"></i>
                            </p>
                          </h2>
                          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                            Bir Hopital
                          </h1>
                          <p className="leading-relaxed mb-3 text-sm">
                            Photo booth fam kinfolk cold-pressed sriracha
                            leggings jianbing microdosing tousled waistcoat.
                          </p>
                          <div className="flex items-start flex-wrap ">
                            <a
                              className="text-indigo-500 text-sm  inline-flex items-center md:mb-2 lg:mb-0"
                              href="/"
                            >
                              Make Appointment
                              <svg
                                className="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                              </svg>
                            </a>
                            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                              <svg
                                className="w-4 h-4 mr-1"
                                stroke="currentColor"
                                stroke-width="2"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                viewBox="0 0 24 24"
                              >
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>
                              1.2K
                            </span>
                            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                              <svg
                                className="w-4 h-4 mr-1"
                                stroke="currentColor"
                                stroke-width="2"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                viewBox="0 0 24 24"
                              >
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                              </svg>
                              6
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 md:w-1/3  ">
                      <div className="h-full border-4 shadow border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img
                          className="lg:h-48 md:h-36 w-full object-cover object-center"
                          src="https://i.ytimg.com/vi/68zgjA4OPVs/maxresdefault.jpg"
                          alt="blog"
                        />
                        <div className="p-6">
                          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                            CATEGORY
                            <p>
                              Location <i className="fas fa-map-marker-alt"></i>
                            </p>
                          </h2>
                          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                            Civil Hospital
                          </h1>
                          <p className="leading-relaxed mb-3 text-sm">
                            Photo booth fam kinfolk cold-pressed sriracha
                            leggings jianbing microdosing tousled waistcoat.
                          </p>
                          <div className="flex items-start flex-wrap">
                            <a
                              className="text-indigo-500 text-sm  inline-flex items-center md:mb-2 lg:mb-0"
                              href="/"
                            >
                              Make Appointment
                              <svg
                                className="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                              </svg>
                            </a>
                            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                              <svg
                                className="w-4 h-4 mr-1"
                                stroke="currentColor"
                                stroke-width="2"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                viewBox="0 0 24 24"
                              >
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>
                              1.2K
                            </span>
                            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                              <svg
                                className="w-4 h-4 mr-1"
                                stroke="currentColor"
                                stroke-width="2"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                viewBox="0 0 24 24"
                              >
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                              </svg>
                              6
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 md:w-1/3  ">
                      <div className="h-full border-4 shadow border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img
                          className="lg:h-48 md:h-36 w-full object-cover object-center"
                          src="https://thehimalayantimes.com/uploads/imported_images/wp-content/uploads/2018/05/Bir-Hospital-1.jpg"
                          alt="blog"
                        />
                        <div className="p-6">
                          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                            Emergency
                            <p>
                              Location <i className="fas fa-map-marker-alt"></i>
                            </p>
                          </h2>
                          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                            Bir Hopital
                          </h1>
                          <p className="leading-relaxed mb-3 text-sm">
                            Photo booth fam kinfolk cold-pressed sriracha
                            leggings jianbing microdosing tousled waistcoat.
                          </p>
                          <div className="flex items-start flex-wrap ">
                            <a
                              className="text-indigo-500 text-sm  inline-flex items-center md:mb-2 lg:mb-0"
                              href="/"
                            >
                              Make Appointment
                              <svg
                                className="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                              </svg>
                            </a>
                            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                              <svg
                                className="w-4 h-4 mr-1"
                                stroke="currentColor"
                                stroke-width="2"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                viewBox="0 0 24 24"
                              >
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>
                              1.2K
                            </span>
                            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                              <svg
                                className="w-4 h-4 mr-1"
                                stroke="currentColor"
                                stroke-width="2"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                viewBox="0 0 24 24"
                              >
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                              </svg>
                              6
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 md:w-1/3  ">
                      <div className="h-full border-4 shadow border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img
                          className="lg:h-48 md:h-36 w-full object-cover object-center"
                          src="https://i.ytimg.com/vi/68zgjA4OPVs/maxresdefault.jpg"
                          alt="blog"
                        />
                        <div className="p-6">
                          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                            CATEGORY
                            <p>
                              Location <i className="fas fa-map-marker-alt"></i>
                            </p>
                          </h2>
                          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                            Civil Hospital
                          </h1>
                          <p className="leading-relaxed mb-3 text-sm">
                            Photo booth fam kinfolk cold-pressed sriracha
                            leggings jianbing microdosing tousled waistcoat.
                          </p>
                          <div className="flex items-start flex-wrap">
                            <a
                              className="text-indigo-500 text-sm  inline-flex items-center md:mb-2 lg:mb-0"
                              href="/"
                            >
                              Make Appointment
                              <svg
                                className="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                              </svg>
                            </a>
                            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                              <svg
                                className="w-4 h-4 mr-1"
                                stroke="currentColor"
                                stroke-width="2"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                viewBox="0 0 24 24"
                              >
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>
                              1.2K
                            </span>
                            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                              <svg
                                className="w-4 h-4 mr-1"
                                stroke="currentColor"
                                stroke-width="2"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                viewBox="0 0 24 24"
                              >
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                              </svg>
                              6
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 md:w-1/3  ">
                      <div className="h-full border-4 shadow border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img
                          className="lg:h-48 md:h-36 w-full object-cover object-center"
                          src="https://thehimalayantimes.com/uploads/imported_images/wp-content/uploads/2018/05/Bir-Hospital-1.jpg"
                          alt="blog"
                        />
                        <div className="p-6">
                          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                            Emergency
                            <p>
                              Location <i className="fas fa-map-marker-alt"></i>
                            </p>
                          </h2>
                          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                            Bir Hopital
                          </h1>
                          <p className="leading-relaxed mb-3 text-sm">
                            Photo booth fam kinfolk cold-pressed sriracha
                            leggings jianbing microdosing tousled waistcoat.
                          </p>
                          <div className="flex items-start flex-wrap ">
                            <a
                              className="text-indigo-500 text-sm  inline-flex items-center md:mb-2 lg:mb-0"
                              href="/"
                            >
                              Make Appointment
                              <svg
                                className="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                              </svg>
                            </a>
                            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                              <svg
                                className="w-4 h-4 mr-1"
                                stroke="currentColor"
                                stroke-width="2"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                viewBox="0 0 24 24"
                              >
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>
                              1.2K
                            </span>
                            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                              <svg
                                className="w-4 h-4 mr-1"
                                stroke="currentColor"
                                stroke-width="2"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                viewBox="0 0 24 24"
                              >
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                              </svg>
                              6
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div className="mx-auto mt-12 color">
                <h6 className="ml-30 font-semibold underline  text-blue-400 title-font text-3xl">
                  Events Organized By Hospitals Near You
                </h6>
                <section className="text-gray-600 body-font overflow-hidden">
                  <div className="container px-5 py-10 mx-auto">
                    <div className="-my-8 divide-y-2 divide-gray-100">
                      <div className="py-8 flex flex-wrap md:flex-nowrap">
                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                          <span className="font-semibold title-font text-gray-700">
                            Lumbini Hospital
                          </span>
                          <span className="mt-1 text-gray-500 text-sm">
                            12 Jun 2019
                          </span>
                          <span className="mt-1 text-gray-500 text-sm">
                            Location <i className="fas fa-map-marker-alt"></i>
                          </span>
                        </div>
                        <div className="md:flex-grow">
                          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                            Covid Vaccine Available
                          </h2>
                          <p className="leading-relaxed">
                            Our Hospital Is Providing Covid Vaccine to the
                            normal citizens this is an information and
                            invitation to the people of age group 18-50 yrs old
                            public.
                          </p>

                          <a
                            href="/"
                            className="text-indigo-500 inline-flex items-center mt-4"
                          >
                            Learn More
                            <svg
                              className="w-4 h-4 ml-2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M5 12h14"></path>
                              <path d="M12 5l7 7-7 7"></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="py-8 flex flex-wrap md:flex-nowrap">
                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                          <span className="font-semibold title-font text-gray-700">
                            Lumbini Hospital
                          </span>
                          <span className="mt-1 text-gray-500 text-sm">
                            12 Jun 2019
                          </span>
                          <span className="mt-1 text-gray-500 text-sm">
                            Location <i className="fas fa-map-marker-alt"></i>
                          </span>
                        </div>
                        <div className="md:flex-grow">
                          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                            Covid Vaccine Available
                          </h2>
                          <p className="leading-relaxed">
                            Our Hospital Is Providing Covid Vaccine to the
                            normal citizens this is an information and
                            invitation to the people of age group 18-50 yrs old
                            public.
                          </p>

                          <a
                            href="/"
                            className="text-indigo-500 inline-flex items-center mt-4"
                          >
                            Learn More
                            <svg
                              className="w-4 h-4 ml-2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M5 12h14"></path>
                              <path d="M12 5l7 7-7 7"></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="py-8 flex flex-wrap md:flex-nowrap">
                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                          <span className="font-semibold title-font text-gray-700">
                            Lumbini Hospital
                          </span>
                          <span className="mt-1 text-gray-500 text-sm">
                            12 Jun 2019
                          </span>
                          <span className="mt-1 text-gray-500 text-sm">
                            Location <i className="fas fa-map-marker-alt"></i>
                          </span>
                        </div>
                        <div className="md:flex-grow">
                          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                            Covid Vaccine Available
                          </h2>
                          <p className="leading-relaxed">
                            Our Hospital Is Providing Covid Vaccine to the
                            normal citizens this is an information and
                            invitation to the people of age group 18-50 yrs old
                            public.
                          </p>

                          <a
                            href="/"
                            className="text-indigo-500 inline-flex items-center mt-4"
                          >
                            Learn More
                            <svg
                              className="w-4 h-4 ml-2"
                              e
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M5 12h14"></path>
                              <path d="M12 5l7 7-7 7"></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Userdashboard;
