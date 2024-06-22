import React, { Children } from "react";

const TableRow = ({ el, setDataToEdit, deleteData }) => {
  let { name, seasons, episodes, premiere, id } = el;
  return (
    <tr>
      <td>{el.name}</td>
      <td>{el.seasons}</td>
      <td>{el.episodes}</td>
      <td>{el.premiere}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(el.id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default TableRow;
