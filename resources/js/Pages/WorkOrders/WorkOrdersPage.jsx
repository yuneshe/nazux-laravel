import React from 'react';
import TechnicianLayout from '@/Layouts/TechnicianLayout';
import WorkOrdersIndex from './Index';

const WorkOrdersPage = ({ workOrders, user, notifications }) => {
    return (
        <TechnicianLayout user={user} notifications={notifications} userId={user.id}>
            <WorkOrdersIndex workOrders={workOrders} />
        </TechnicianLayout>
    );
};

export default WorkOrdersPage;
