import React from "react";
import "../style/table.css"

const Table = ({ data, headers, actions }) => {
  return (
    <table className="table table-bordered">
      <thead className="bg-dark text-white">
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            {headers.map((header, index) => (
              <td key={index}>{item[header.toLowerCase()]}</td>
            ))}
            <td>
              {actions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => {
                    // Handle the action
                  }}
                  className={action.className}
                >
                  {action.label}
                </button>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;