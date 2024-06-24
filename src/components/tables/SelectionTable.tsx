"use client"
import React, { useState, useRef, useEffect } from 'react';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

const data: DataType[] = [
  { key: '1', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park' },
  { key: '2', name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park' },
  { key: '3', name: 'Joe Black', age: 32, address: 'Sydney No. 1 Lake Park' },
  { key: '4', name: 'Disabled User', age: 99, address: 'Sydney No. 1 Lake Park' },
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
    <div className="p-4">
      <div className="mb-4">
        <label className="mr-2">
          <input
            type="radio"
            value="checkbox"
            checked={selectionType === 'checkbox'}
            onChange={() => setSelectionType('checkbox')}
          />
          Checkbox
        </label>
        <label>
          <input
            type="radio"
            value="radio"
            checked={selectionType === 'radio'}
            onChange={() => setSelectionType('radio')}
          />
          Radio
        </label>
      </div>

      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-4 py-2">
              {selectionType === 'checkbox' && (
                <input
                  type="checkbox"
                  checked={isAllSelected}
                  ref={selectAllRef}
                  onChange={(e) => handleSelectAll(e.target.checked)}
                />
              )}
            </th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Age</th>
            <th className="px-4 py-2">Address</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.key} className={`${item.name === 'Disabled User' ? 'bg-gray-100' : ''}`}>
              <td className="px-4 py-2">
                <input
                  type={selectionType}
                  checked={selectedRowKeys.includes(item.key)}
                  onChange={() => handleSelect(item.key)}
                  disabled={item.name === 'Disabled User'}
                />
              </td>
              <td className="px-4 py-2">{item.name}</td>
              <td className="px-4 py-2">{item.age}</td>
              <td className="px-4 py-2">{item.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SelectionTable;

