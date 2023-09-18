import React from "react";

import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

import "./Table.css";

export const Table = ({ rows, deleteRow, editRow }) => {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>Students</th>
            <th >Tutors Assigned</th>
            <th className="classes">Classes per week</th>
            <th className="subjects">Subjects</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {
            return (
              <tr key={idx}>
                <td>{row.students
                }</td>

                <td className="expand">{row.tutors}</td>
                
                {/*this is the mechanism for the classes per week live and so on please review this bcs we wanna change it */}
                <td> 
                {row.classes}
                </td>

                <td className="expand">{row.subjects}</td>

                {/*this is for actions */}
                <td className="fit">
                  <span className="actions">
                    <BsFillTrashFill
                      className="delete-btn"
                      onClick={() => deleteRow(idx)}
                    />
                    <BsFillPencilFill
                      className="edit-btn"
                      onClick={() => editRow(idx)}
                    />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};