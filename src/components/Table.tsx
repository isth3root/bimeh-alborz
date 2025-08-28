import React from 'react';

interface TableColumn<T> {
  header: string;
  accessor: keyof T | string; // Allow string for custom columns like 'action'
}

interface TableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  renderCell?: (data: T, column: TableColumn<T>) => React.ReactNode;
  getCellClassName?: (column: TableColumn<T>) => string;
}

const Table = <T extends object>({ columns, data, renderCell, getCellClassName }: TableProps<T>) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead className="bg-gray-800 text-white">
          <tr>
            {columns.map((col) => (
              <th key={String(col.accessor)} className="text-right py-3 px-4 uppercase font-semibold text-sm">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b border-gray-200 hover:bg-gray-100">
              {columns.map((col) => (
                <td
                  key={String(col.accessor)}
                  className={`py-3 px-4 ${getCellClassName ? getCellClassName(col) : ''}`}
                >
                  {renderCell ? renderCell(row, col) : (row[col.accessor as keyof T] as React.ReactNode)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
