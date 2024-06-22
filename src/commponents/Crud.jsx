import React, { useState } from "react";
import Form from "./Form";
import Table from "./Table";

const seriesDB = [
  {
    id: 1,
    name: "One push man",
    seasons: "10",
    episodes: "600",
    premiere: 2001,
  },

  {
    id: 2,
    name: "Naruto",
    seasons: "9",
    episodes: "220",
    premiere: 2000,
  },

  {
    id: 3,
    name: "One picie",
    seasons: "11",
    episodes: "1108",
    premiere: 2006,
  },

  {
    id: 4,
    name: "Black clover",
    seasons: "4",
    episodes: "170",
    premiere: 2001,
  },

  {
    id: 5,
    name: "Dragon ball",
    seasons: 9,
    episodes: 500,
    premiere: 1990,
  },
];

const Crud = () => {
  const [db, setDb] = useState(seriesDB);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
  };

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id ${id}?`
    );

    if (isDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    }
  };

  return (
    <div>
      <Form
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <Table data={db} setDataToEdit={setDataToEdit} deleteData={deleteData} />
    </div>
  );
};

export default Crud;
