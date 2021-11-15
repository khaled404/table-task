import React from "react";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import ShowButton from "./ShowButton";

interface ITable {
  data: Array<any>;
}

export default function Table({ data }: ITable) {
  const tableHeader = Object.keys(data[0]);

  const getTableOptions = (options: Array<string>) => {
    return options.map((type) => {
      switch (type) {
        case "show":
          return <ShowButton key={type} />;
        case "delete":
          return <DeleteButton key={type} />;
        case "edit":
          return <EditButton key={type} />;
        default:
          return <></>;
      }
    });
  };

  const renderRow = () => {
    return data.map((item: any, index: any) => (
      <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
        {tableHeader.map((keyName) => (
          <td
            key={keyName}
            className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 space-x-2"
          >
            {Array.isArray(item[keyName])
              ? getTableOptions(item[keyName])
              : item[keyName]}
          </td>
        ))}
      </tr>
    ));
  };

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {tableHeader.map((name) => (
                    <th
                      key={name}
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>{renderRow()}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
