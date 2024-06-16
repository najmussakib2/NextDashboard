import { Breadcrumb } from 'antd';
import React from 'react';

const NftPage = () => {
    return (
        <div>
            <Breadcrumb items={[{title: 'pages'},{title: <a href="/dashboard">Dashboard</a>},{title: <a href="/dashboard/NFT-Marketplace">NFT Marketplace</a>}]}/>
            NFT market place
        </div>
    );
};

export default NftPage;