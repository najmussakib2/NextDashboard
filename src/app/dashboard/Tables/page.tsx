import { Breadcrumb } from 'antd';
import React from 'react';

const TablePage = () => {
    return (
        <div>
            <Breadcrumb items={[{title: 'pages'},{title: <a href="/dashboard">Dashboard</a>},{title: <a href="/dashboard/Tables">Tables</a>}]}/>
            table page
        </div>
    );
};

export default TablePage;