import ToggleButton from '@/components/ToggleButton';
import { ToggleSwitch } from '@/components/ui/ToggleButton';
import { BellOutlined, InfoCircleOutlined, SearchOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import { Sparkles } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const NftPage = () => {
    return (
        <div>
            <Breadcrumb items={[{ title: 'pages' }, { title: <a href="/dashboard">Dashboard</a> }, { title: <a href="/dashboard/NFT-Marketplace">NFT Marketplace</a> }]} />
            <header>
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-[#2B3674]">NFT market place</h1>
                    <div className="p-2 bg-white flex gap-3 items-center rounded-full">
                        <div className="bg-[#F4F7FE] rounded-full w-44 flex justify-center items-center">
                            <SearchOutlined className="pl-3" />
                            <input
                                type="text"
                                placeholder='Search'
                                className="bg-[#F4F7FE] ml-1 py-1 overflow-hidden rounded-e-full"
                                name=""
                                id=""
                            />
                        </div>
                        <ToggleSwitch/>
                        <BellOutlined className="text-lg" style={{ color: "#b4bad4" }} />
                        <ToggleButton />
                        <InfoCircleOutlined
                            className="text-lg"
                            style={{ color: "#b4bad4" }}
                        />
                        <Image
                            alt="avatar"
                            className="rounded-full"
                            width={30}
                            height={30}
                            src={
                                "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                            }
                        ></Image>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default NftPage;