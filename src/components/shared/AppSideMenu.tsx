"use client";
import { Menu } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import type { MenuProps } from "antd";
import { BarChartOutlined, BoxPlotOutlined, HomeFilled, HomeOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
export default function AppSideMenu() {
  const pathname = usePathname();
  const [selectedKey, setSelectedKey] = useState<string[]>([""]);

  useEffect(() => {
    if (pathname.startsWith("/dashboard/Kanban")) {
      setSelectedKey(["3"]);
    } else if (pathname.startsWith("/dashboard/NFT-Marketplace")) {
      setSelectedKey(["4"]);
    } else if (pathname.startsWith("/dashboard/Profile")) {
      setSelectedKey(["5"]);
    } else if (pathname.startsWith("/dashboard/Tables")) {
      setSelectedKey(["6"]);
    } else if (pathname.startsWith("/dashboard")) {
      setSelectedKey(["2"]);
    } else if (pathname === "/") {
      setSelectedKey(["1"]);
    }
  }, [pathname]);

  const menuItems: MenuProps['items'] = [
    { label: <Link className="font-semibold" href="/">Home</Link>,icon: <HomeOutlined />, key: "1" },
    { label: <Link className="font-semibold" href="/dashboard">Dashboard</Link>,icon: <HomeFilled />, key: "2" },
    { type: "divider" as const },
    { label: <Link className="font-semibold" href="/dashboard/NFT-Marketplace">NFT Marketplace</Link>,icon:<ShoppingCartOutlined />, key: "4" },
    { label: <Link className="font-semibold" href="/dashboard/Tables">Tables</Link>,icon:<BarChartOutlined />, key: "6" },
    { label: <Link className="font-semibold" href="/dashboard/Kanban">Kanban</Link>,icon:<BoxPlotOutlined />, key: "3" },
    { label: <Link className="font-semibold" href="/dashboard/Profile">Profile</Link>,icon:<UserOutlined />, key: "5" },

  ];

  return (
    <Menu mode="inline" items={menuItems} 
    selectedKeys={selectedKey}
    />
  );
}
