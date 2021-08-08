import { fonts } from 'fonts'
import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import COLUMNS from './columns'
import { useTable } from 'react-table'
import { useMemo } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";
import AppointmentDetailsButton from 'components/AppointmentDetailsButton'
import Button from 'components/GlobalComponents/Button'


const Container = styled.div`
    margin-bottom: 60px;
`

const H2 = styled.h2`
    font-weight: ${fonts.medium};
    font-size: 30px;
    margin-bottom: 20px;
`

const Table = styled.table`
`
const TableHead = styled.thead``

const TableBody = styled.tbody``

const TH = styled.th``

const TableRow = styled.tr``

const TD = styled.td``



const PendingAppointments = () => {

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

    const { id } = useParams();
    const local = "http://localhost:5000/api";

    const setSchedule = {
        token: assignedToken,
        date: assignedDate,
        doctime: assignedTime,
        assignedDoc: docAssigned,
        status: { pending: false, done: true, rejected: false },
    };

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
                setApprovedList(data);
            };
            getApprovedList();
        };
        getAppoiments();
    }, [datas, id, approvedList]);

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => {
        
        const getTableDatas = async () => {
            const { data } = await axios.get(
              `http://localhost:5000/userAppointment/allAppointments`
            );
            return data;
        }

        getTableDatas();

    }, [])

    return (
        <Container>
            <H2>Pending Appointments</H2>
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
                            <AppointmentDetailsButton />
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
                                        key =  {res._id}
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
                                            <AppointmentDetailsButton res={res} />
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
                                                <option>Ram Prasad</option>
                                                <option>Hari Prasad</option>
                                                <option>Mr. Kate</option>
                                                <option>Bikash</option>
                                                <option>Yubraj</option>
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
        </Container>
    )
}

export default PendingAppointments
