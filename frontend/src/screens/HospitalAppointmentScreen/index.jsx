import React from 'react'
import DashboardLayout from 'components/DashboardShared/DashboardLayout'
import useGetHospitalData from 'hooks/useGetHospitalSidebarData';
import DashboardContentWrapper from 'components/DashboardShared/DashboardContentWrapper';
import PendingAppointments from 'components/PendingAppointments';
import ApprovedAppointments from 'components/ApprovedAppointments';
const HospitalAppointment = () => {
    const { hospitalMenuData } = useGetHospitalData()
    return (
        <DashboardLayout menuData={hospitalMenuData}>
            <DashboardContentWrapper>
                <PendingAppointments />
                <ApprovedAppointments />
            </DashboardContentWrapper>
        </DashboardLayout>
    )
}

export default HospitalAppointment
