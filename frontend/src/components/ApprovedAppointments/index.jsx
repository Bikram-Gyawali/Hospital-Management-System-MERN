import { fonts } from 'fonts'
import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
// import COLUMNS from './columns'
import { useTable } from 'react-table'
import { useMemo } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";
import AppointmentDetailsButton from 'components/AppointmentDetailsButton'

const Container = styled.div``

const H2 = styled.h2`
    font-weight: ${fonts.medium};
    font-size: 30px;
    margin-bottom: 20px;
`

const ApprovedAppointments = () => {
    const { id } = useParams();
    const local = "http://localhost:5000/api";


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
    const setSchedule = {
        token: assignedToken,
        date: assignedDate,
        doctime: assignedTime,
        assignedDoc: docAssigned,
        status: { pending: false, done: true, rejected: false },
    };
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
        <Container>
            <H2>Approved Appointments</H2>
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
                                            <span>{res?.name && res.name}</span>
                                        </td>
                                        <td className="p-2 px-2 border-2">
                                            <span>{res?.contact && res?.contact}</span>
                                        </td>
                                        <td className="p-2 px-2 border-2">
                                            <span>{res?.services && res?.services}</span>
                                        </td>
                                        <td className="p-2 px-2 border-2">
                                            <AppointmentDetailsButton res={res} />
                                        </td>
                                        <td className="p-2 px-2 border-2">
                                            <span>{res?.assignedDoctor && res?.assignedDoctor}</span>
                                        </td>
                                        <td className="p-2 px-2 border-2">
                                            {res?.date && res?.date.toString().substr(0, 10)}
                                        </td>
                                        <td className="p-2 px-2 border-2">{res?.docArrival && res?.docArrival}</td>
                                        <td className="p-2 border-2">{res?.token && res?.token}</td>
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
        </Container>
    )
}

export default ApprovedAppointments
