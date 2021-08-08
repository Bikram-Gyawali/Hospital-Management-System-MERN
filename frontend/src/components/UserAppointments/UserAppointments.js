import React, { useEffect, useState } from "react";
// import AppointmentDetailsButton from "components/AppDetailButton/AppointmentDetailsButton";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
function UserAppointments() {
  const userLogin = useSelector((state) => state.userLogin);
  console.log(userLogin);
  const local = "http://localhost:5000/api";
  const [appointmentList, setAppointmentList] = useState([]);
  const [setHosId, setSetHosId] = useState();
  const id = useParams().id;
  useEffect(() => {
    axios.get(`${local}/userAppointment/${id}/myAppointments`).then((data) => {
      setAppointmentList(data.data);
      console.log(data);
      console.log("hello datas");
      //   setSetHosId(data.withHospital);
    });
  }, [id]);

  return (
    <div>

      <table
        class="text-md bg-white shadow-md rounded mb-4"
        style={{ fontSize: "15px" }}
      >
        <tbody>
          <tr class="border-b">
            <th class="text-left py-3 px-1 border-2 ">S.N.</th>
            <th class="text-left py-3 px-1 border-2 ">Hospital Name</th>
            <th class="text-left py-3 px-1 border-2 ">Contact.No</th>
            <th class="text-left py-3 px-1 border-2 ">Service</th>
            <th class="text-left py-3 px-1 border-2 ">Details</th>
            <th class="text-left py-3 px-1 border-2 ">Doctor Assigned</th>
            <th class="text-left py-3 px-1 border-2 ">Date</th>
            <th class="text-left py-3 px-1 border-2 ">Time</th>
            <th class="text-left py-3 px-1 border-2 ">Token No</th>
          </tr>
          {/* rows of data are below now */}
          {appointmentList.map((res) => (
            <tr
              class="border-b hover:bg-orange-100 bg-gray-100"
              style={{ fontSize: "13px" }}
            >
              <td class="p-2 px-2 border-2">
                <span>01.</span>
              </td>
              <td class="p-2 px-2 border-2">
                <span>{res?.name}</span>
              </td>
              <td class="p-2 px-2 border-2">
                <span>{res?.contact}</span>
              </td>
              <td class="p-2 px-2 border-2">
                <span>{res?.services}</span>
              </td>
              <td class="p-2 px-2 border-2">
                {/* <AppointmentDetailsButton res={res} /> */}
              </td>
              <td class="p-2 px-2 border-2">
                <p>{res?.assignedDoctor}</p>
              </td>
              <td class="p-2 px-2 border-2">
                <p>{res?.date}</p>
              </td>
              <td class="p-2 px-2 border-2">
                <p>{res?.docArrival}</p>
              </td>
              <td class="p-2 border-2">
                <p>{res?.token}</p>
              </td>
              <td class="p-3 px-5 flex justify-end">
                <button
                  type="button"
                  onClick={async () => {
                    try {
                      await axios.put(
                        `${local}/userAppointment/${res?._id}/rejected`
                      );
                    } catch (error) {
                      console.log(error);
                    }
                  }}
                  class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserAppointments;
