"use client";
import { Progress } from "antd";
import React from "react";

const ProgressTable: React.FC = () => {
  return (
    <div>
      <table className=" flex flex-col gap-10 text-base text-[#2B3674] mt-6 font-bold mb-5">
        <thead className="border-b-2">
          <tr className="mx-10 flex justify-center ">
            <th className=" text-gray-400 w-[25%]">NAME</th>
            <th className="font-semibold text-gray-400 w-[25%]">STATUS</th>
            <th className="font-semibold text-gray-400 w-[25%]">DATE</th>
            <th className="font-semibold text-gray-400 w-[25%]">PROGRESS</th>
          </tr>
        </thead>
        <tbody className="mx-10">
          <tr className="flex justify-center text-center hover:shadow-md hover:bg-slate-200 rounded-md p-2 cursor-pointer">
            <td className="flex items-center gap-2 w-[25%]">Horizon UI PRO</td>
            <td className=" w-[25%]">
              <div className="flex">
                <p>✅</p> <p>Approved</p>
              </div>
            </td>
            <td className=" w-[25%]">18 Apr 2021</td>
            <td className=" w-[25%]">
              <Progress
                percent={70}
                strokeColor={"#4318ff"}
                status="active"
                showInfo={false}
              />
            </td>
          </tr>
          <tr className="flex justify-center text-center hover:shadow-md hover:bg-slate-200 rounded-md p-2 cursor-pointer">
            <td className="flex items-center gap-2 w-[25%]">Horizon UI Free</td>
            <td className="w-[25%] flex">
              <p>❗</p>
              <p>Disabled</p>
            </td>
            <td className="w-[25%]">18 Apr 2021</td>
            <td className="w-[25%]">
              <Progress
                percent={30}
                strokeColor={"#4318ff"}
                status="active"
                showInfo={false}
              />
            </td>
          </tr>
          <tr className="flex justify-center text-center hover:shadow-md hover:bg-slate-200 rounded-md p-2 cursor-pointer">
            <td className="flex items-center gap-2 w-[25%]">Marketplace</td>
            <td className=" w-[25%] flex">
              <p>⚠️</p> <p>Error</p>
            </td>
            <td className=" w-[25%]">20 May 2021</td>
            <td className=" w-[25%]">
              <Progress
                percent={90}
                strokeColor={"#4318ff"}
                status="active"
                showInfo={false}
              />
            </td>
          </tr>
          <tr className="flex justify-center text-center hover:shadow-md hover:bg-slate-200 rounded-md p-2 cursor-pointer">
            <td className="flex items-center gap-2 w-[25%]">Weekly Updates</td>
            <td className=" w-[25%] flex">
              <p>✅</p> <p>Approved</p>
            </td>
            <td className=" w-[25%]">12 Jul 2021</td>
            <td className=" w-[25%]">
              <Progress
                percent={50}
                strokeColor={"#4318ff"}
                status="active"
                showInfo={false}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProgressTable;
