"use client"
import { Ellipsis, EllipsisVertical } from 'lucide-react';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';

interface DataType {
  key: string;
  name: string;
  age: number;

}

const data: DataType[] = [
  { key: '1', name: 'Landing Page Design', age: 32},
  { key: '2', name: 'Dashboard Builder', age: 42 },
  { key: '3', name: 'Mobile App Design', age: 32},
  { key: '4', name: 'Illustrations', age: 32},
  { key: '5', name: 'Promotional LP', age: 32 },
  // { key: '4', name: 'Disabled User', age: 99, address: 'Sydney No. 1 Lake Park' },
];

const SelectionTable: React.FC = () => {
  const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);

  const selectAllRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (selectAllRef.current) {
      selectAllRef.current.indeterminate = selectedRowKeys.length > 0 && selectedRowKeys.length < data.filter(item => item.name !== 'Disabled User').length;
    }
  }, [selectedRowKeys]);

  const handleSelect = (key: string) => {
    if (selectionType === 'checkbox') {
      setSelectedRowKeys((prev) =>
        prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
      );
    } else {
      setSelectedRowKeys([key]);
    }
  };

  const handleSelectAll = (isSelected: boolean) => {
    if (isSelected) {
      setSelectedRowKeys(data.filter(item => item.name !== 'Disabled User').map(item => item.key));
    } else {
      setSelectedRowKeys([]);
    }
  };

  const isAllSelected = data.filter(item => item.name !== 'Disabled User').every(item => selectedRowKeys.includes(item.key));

  return (
    <div className="">
      <div className="mb-4 flex justify-between items-center">
        <div className='flex gap-2'>
          <label className="mr-2 flex items-center gap-1">
            <input
              type="radio"
              value="checkbox"
              checked={selectionType === 'checkbox'}
              onChange={() => setSelectionType('checkbox')}
            />
            <p>Checkbox</p>
          </label>
          <label className='flex items-center gap-1'>
            <input
              type="radio"
              value="radio"
              checked={selectionType === 'radio'}
              onChange={() => setSelectionType('radio')}
            />
           <p>Radio</p>
          </label>
        </div>
        <div>
          <p className="font-bold text-[#4318FF] px-2 py-2 text-3xl rounded-2xl bg-[#F4F7FE]">
          <Ellipsis strokeWidth={3} />
          </p>
        </div>
      </div>

      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 flex gap-2">
            {selectionType === 'checkbox' && (
                <input
                  type="checkbox"
                  checked={isAllSelected}
                  ref={selectAllRef}
                  onChange={(e) => handleSelectAll(e.target.checked)}
                />
              )}
              <p>Tasks</p>
              </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.key} className={`${item.name === 'Disabled User' ? 'bg-gray-100' : ''}`}>
              <td className="px-4 py-2 flex gap-2">
              <input
                  type={selectionType}
                  checked={selectedRowKeys.includes(item.key)}
                  onChange={() => handleSelect(item.key)}
                  disabled={item.name === 'Disabled User'}
                />
                <p>{item.name}</p>
                </td>
              <td className="px-4 py-2 ">
                <Image src={'/braillesixdots_99639.png'} className='opacity-50' height={20} width={20} alt='sixDot.png' />
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SelectionTable;

