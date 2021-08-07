import React, { useRef, useState, useEffect } from "react";
import { Button } from "@material-ui/core";
// import AppointmentDetailsButton from "components/AppDetailButton/AppointmentDetailsButton";
import axios from "axios";
import { useParams } from "react-router-dom";
function HospitalAppointments() {
  const asignDate = useRef();
  const asignTime = useRef();
  const asignToken = useRef();
  const asignDoc = useRef();
  const [file, setFile] = useState("");
  const [docAssigned, setDocAssigned] = useState("");
  const [assignedTime, setAssignedTime] = useState("");
  const [assignedDate, setAssignedDate] = useState("");
  const [assignedToken, setAssignedToken] = useState("");
  const [approvedList, setApprovedList] = useState([]);

  const [datas, setDatas] = useState([]);

  const id = useParams().hospitalId;
  const local = "http://localhost:5000/api";

  useEffect(() => {
    const getAppoiments = async () => {
      const { data } = await axios.get(
        `${local}/userAppointment/${id}/appointment/hospitalallappointments`
      );
      setDatas(data);
      const getApprovedList = async () => {
        const { data } = await axios.get(
          `${local}/userAppointment/${id}/approvedList`
        );
        // console.log(data);
        setApprovedList(data);
      };
      getApprovedList();
    };
    getAppoiments();
  }, [datas, id, approvedList]);

  // useEffect(() => {
  //   const getApprovedList = async () => {
  //     const list = await axios.get(
  //       `${local}/userAppointment/${id}/approvedList`
  //     );
  //     setApprovedList(list);
  //   };
  //   getApprovedList();
  // }, [approvedList, id]);

  // console.log(datas);
  const setSchedule = {
    token: assignedToken,
    date: assignedDate,
    doctime: assignedTime,
    assignedDoc: docAssigned,
    status: { pending: false, done: true, rejected: false },
  };
  // const handleAppointments = async (res) => {
  //   let id = res?._id;
  //   try {
  //     await axios.put(`${local}/userAppointment/${id}/approved`, setSchedule);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleRejectAppointments = async (res) => {
  //   try {
  //     await axios.put(`${local}/userAppointment/${res?._id}/rejected`);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // console.log(approvedList);

  const uploadReports = async (res) => {
    const id = res?._id;
    const formData = new FormData();
    formData.append("report", file);
    await axios.post(
      `http://localhost:5000/api/reports/${id}/uploadreport`,
      formData
    );
    console.log("reports");
  };

  const uploadReport = async () => {
    const reports = {};
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      reports.img = fileName;
      // console.log(newPost);
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div>
      <div className="text-gray-900 bg-gray-200">
        <div className="p-4 flex">
          <h1 className="text-xl">New Appointments List</h1>
        </div>
        <div className="px-3 py-1 flex justify-around">
          <table
            className="text-md bg-white shadow-md rounded mb-4"
            style={{ fontSize: "15px" }}
          >
            <tbody>
              <tr className="border-b">
                <th className="text-left py-3 px-1 border-2 ">S.N.</th>
                <th className="text-left py-3 px-1 border-2 ">Name</th>
                <th className="text-left py-3 px-1 border-2 ">Contact.No</th>
                <th className="text-left py-3 px-1 border-2 ">Service</th>
                <th className="text-left py-3 px-1 border-2 ">Details</th>
                <th className="text-left py-3 px-1 border-2 ">Doctor Assigned</th>
                <th className="text-left py-3 px-1 border-2 ">Date</th>
                <th className="text-left py-3 px-1 border-2 ">Time</th>
                <th className="text-left py-3 px-1 border-2 ">Token No</th>
              </tr>
              {/* rows of data are below now */}
              <tr
                className="border-b hover:bg-orange-100 bg-gray-100"
                style={{ fontSize: "13px" }}
              >
                <td className="p-2 px-2 border-2">
                  <span>01.</span>
                </td>
                <td className="p-2 px-2 border-2">
                  <span>Madan Bahadur</span>
                </td>
                <td className="p-2 px-2 border-2">
                  <span>9867134457</span>
                </td>
                <td className="p-2 px-2 border-2">
                  <span>Blood Test</span>
                </td>
                <td className="p-2 px-2 border-2">
                  {/* <AppointmentDetailsButton /> */}
                  {/* <Button>View Details</Button> */}
                </td>
                <td className="p-2 px-2 border-2">
                  <select className="bg-transparent" ref={asignDoc}>
                    <option>None</option>
                    <option>Dr.Sanduik Ruit</option>
                    <option>Dr.Pathak</option>
                    <option>Dr.Achaya</option>
                  </select>
                </td>
                <td className="p-2 px-2 border-2">
                  <input type="date" ref={asignDate} />
                </td>
                <td className="p-2 px-2 border-2">
                  <input type="time" ref={asignTime} />
                </td>
                <td className="p-2 border-2">
                  <input
                    type="text"
                    style={{ width: "100px" }}
                    placeholder="token.no"
                  />
                </td>
                <td className="p-3 px-5 flex justify-end">
                  <button
                    type="button"
                    className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  >
                    Approve
                  </button>
                  <button
                    type="button"
                    className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  >
                    Reject
                  </button>
                </td>
              </tr>
              {datas &&
                datas.map(
                  (res, key) =>
                    res?.status.pending === true &&
                    res?.status.done === false && (
                      <tr
                        className="border-b hover:bg-orange-100 bg-gray-100"
                        style={{ fontSize: "13px" }}
                      >
                        <td className="p-2 px-2 border-2">
                          <span>{key}</span>
                        </td>
                        <td className="p-2 px-2 border-2">
                          <span>{res?.name}</span>
                        </td>
                        <td className="p-2 px-2 border-2">
                          <span>{res?.contact}</span>
                        </td>
                        <td className="p-2 px-2 border-2">
                          <span>{res?.services}</span>
                        </td>
                        <td className="p-2 px-2 border-2">
                          {/* <AppointmentDetailsButton res={res} /> */}
                        </td>
                        <td className="p-2 px-2 border-2">
                          <select
                            className="bg-transparent"
                            onChange={(e) => {
                              setDocAssigned(e.target.value);
                            }}
                            ref={asignDoc}
                          >
                            <option>None</option>
                            <option>Dr.Sanduik Ruit</option>
                            <option>Dr.Pathak</option>
                            <option>Dr.Achaya</option>
                          </select>{" "}
                        </td>
                        <td className="p-2 px-2 border-2">
                          <input
                            type="date"
                            onChange={(e) => {
                              setAssignedDate(e.target.value);
                            }}
                            ref={asignDate}
                          />{" "}
                        </td>
                        <td className="p-2 px-2 border-2">
                          <input
                            type="time"
                            ref={asignTime}
                            onChange={(e) => {
                              setAssignedTime(e.target.value);
                            }}
                          />
                        </td>{" "}
                        <td className="p-2 border-2">
                          <input
                            type="text"
                            style={{ width: "100px" }}
                            placeholder="token.no"
                            ref={asignToken}
                            onChange={(e) => {
                              setAssignedToken(e.target.value);
                            }}
                          />
                        </td>{" "}
                        <td className="p-3 px-5 flex justify-end">
                          <button
                            onClick={async () => {
                              // handleAppointments(res);
                              try {
                                await axios.put(
                                  `${local}/userAppointment/${res?._id}/approved`,
                                  setSchedule
                                );
                              } catch (error) {
                                console.log(error);
                              }
                            }}
                            type="button"
                            className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                          >
                            Approve
                          </button>
                          <button
                            onClick={async () => {
                              try {
                                await axios.put(
                                  `${local}/userAppointment/${res?._id}/rejected`
                                );
                              } catch (error) {
                                console.log(error);
                              }
                            }}
                            type="button"
                            className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                          >
                            Reject
                          </button>
                        </td>
                      </tr>
                    )
                )}
            </tbody>
          </table>
        </div>
      </div>

      {/* approved appoinment lists are right  belows */}
      <div className="text-gray-900 bg-gray-200">
        <div className="p-4 flex">
          <h1 className="text-xl">Approved Appointment List</h1>
        </div>
        <div className="px-3 py-1 flex justify-around">
          <table
            className="text-md bg-white shadow-md rounded mb-4"
            style={{ fontSize: "15px" }}
          >
            <tbody>
              <tr className="border-b">
                <th className="text-left py-3 px-1 border-2 ">S.N.</th>
                <th className="text-left py-3 px-1 border-2 ">Name</th>
                <th className="text-left py-3 px-1 border-2 ">Contact.No</th>
                <th className="text-left py-3 px-1 border-2 ">Service</th>
                <th className="text-left py-3 px-1 border-2 ">Details</th>
                <th className="text-left py-3 px-1 border-2 ">Doctor Assigned</th>
                <th className="text-left py-3 px-1 border-2 ">Date</th>
                <th className="text-left py-3 px-1 border-2 ">Time</th>
                <th className="text-left py-3 px-1 border-2 ">Token No</th>
              </tr>
              {/* rows of data are below now */}
              {approvedList &&
                approvedList.map(
                  (res, key) =>
                    res?.status.pending === false &&
                    res?.status.done === true && (
                      <tr
                        className="border-b hover:bg-orange-100 bg-gray-100"
                        style={{ fontSize: "13px" }}
                      >
                        <td className="p-2 px-2 border-2">
                          <span>{key}</span>
                        </td>
                        <td className="p-2 px-2 border-2">
                          <span>{res.name}</span>
                        </td>
                        <td className="p-2 px-2 border-2">
                          <span>{res?.contact}</span>
                        </td>
                        <td className="p-2 px-2 border-2">
                          <span>{res?.services}</span>
                        </td>
                        <td className="p-2 px-2 border-2">
                          {/* <AppointmentDetailsButton res={res} /> */}
                        </td>
                        <td className="p-2 px-2 border-2">
                          <span>{res?.assignedDoctor}</span>
                        </td>
                        <td className="p-2 px-2 border-2">
                          {res?.date.toString().substr(0, 10)}
                        </td>
                        <td className="p-2 px-2 border-2">{res?.docArrival}</td>
                        <td className="p-2 border-2">{res?.token}</td>
                        <td className="p-3 px-5 flex justify-end">
                          <label htmlFor="file" className="shareOption">
                            <i className="fas fa-upload mr-3 text-3xl"></i>
                            <input
                              style={{ display: "none" }}
                              type="file"
                              id="file"
                              accept=".png,.jpeg,.jpg,.pdf"
                              onChange={(e) => setFile(e.target.files[0])}
                            />
                          </label>

                          <button
                            onClick={() => {
                              uploadReports(res);
                            }}
                            type="button"
                            className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                          >
                            Upload Reports
                          </button>
                        </td>
                      </tr>
                    )
                )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default HospitalAppointments;
