import ToggleButton from '@/components/ToggleButton';
import { BarChartOutlined, BellOutlined, InfoCircleOutlined, SearchOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Space, Switch } from 'antd';
import Image from 'next/image';
import React, { useState } from 'react';

const DashboardPage = () => {
    


    return (
        <div className=''>
            <Breadcrumb items={[{ title: 'pages' }, { title: <a href="/dashboard">Dashboard</a> }]} />
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-bold text-[#2B3674]'>Main Dashboard</h1>
                <div className='p-2  bg-white flex gap-3 items-center rounded-full'>
                    <div className='bg-[#F4F7FE] rounded-full w-44 flex justify-center items-center'>
                        <SearchOutlined className='w-14 pl-3' />
                        <input type="text" className='bg-[#F4F7FE] py-1 overflow-hidden rounded-e-full' name="" id="" />
                    </div>
                   
                    <BellOutlined className='text-lg'  style={{color: "#b4bad4"}} />
                    <ToggleButton />
                    <InfoCircleOutlined className='text-lg' style={{color: "#b4bad4"}} />
                    <Image alt='avatar' className='rounded-full' width={30} height={30} src={"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}></Image>
                </div>
            </div>
            <section className='flex gap-5'>
                <div className='bg-white flex gap-2'><BarChartOutlined /><div><p>Earnings</p><h1>$350.4</h1></div></div>
                <div className='bg-white flex gap-2'><BarChartOutlined /><div><p>Earnings</p><h1>$350.4</h1></div></div>
                <div className='bg-white flex gap-2'><BarChartOutlined /><div><p>Earnings</p><h1>$350.4</h1></div></div>
                <div className='bg-white flex gap-2'><BarChartOutlined /><div><p>Earnings</p><h1>$350.4</h1></div></div>
                <div className='bg-white flex gap-2'><BarChartOutlined /><div><p>Earnings</p><h1>$350.4</h1></div></div>
                <div className='bg-white flex gap-2'><BarChartOutlined /><div><p>Earnings</p><h1>$350.4</h1></div></div>
              
            </section>
        </div>
    );
};

export default DashboardPage;