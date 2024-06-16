import { Breadcrumb } from 'antd';
import React from 'react';

const KanbanPage = () => {
    return (
        <div>
            <Breadcrumb items={[{title: 'pages'},{title: <a href="/dashboard">Dashboard</a>},{title: <a href="/dashboard/Kanban">Kanban</a>}]}/>
            Kanban page
        </div>
    );
};

export default KanbanPage;