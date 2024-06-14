"use client";
import { Menu } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import type { MenuProps } from "antd";

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
    { label: <Link href="/">Home</Link>, key: "1" },
    { label: <Link href="/dashboard">Dashboard</Link>, key: "2" },
    { type: "divider" as const },
    { label: <Link href="/dashboard/Kanban">Kanban</Link>, key: "3" },
    { label: <Link href="/dashboard/NFT-Marketplace">NFT Marketplace</Link>, key: "4" },
    { label: <Link href="/dashboard/Profile">Profile</Link>, key: "5" },
    { label: <Link href="/dashboard/Tables">Tables</Link>, key: "6" },
  ];

  return (
    <Menu mode="inline" items={menuItems} selectedKeys={selectedKey} />
  );
}
