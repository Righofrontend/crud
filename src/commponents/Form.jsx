import React, { useEffect } from "react";
import { useState } from "react";
const initialForm = {
  name: "",
  seasons: "",
  episodes: "",
  premiere: "",
  id: null,
};

const Form = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.seasons) {
      alert("Datos incompletos");
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };
  const handleReset = (e) => {
    setForm({ initialForm });
    setDataToEdit(null);
  };

  return (
    <div>
      <h2>{dataToEdit ? "Editar serie" : "Agregar Anime"} </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={handleChange}
          value={form.name}
        />
        <input
          type="text"
          name="seasons"
          placeholder="Temporadas"
          onChange={handleChange}
          value={form.seasons}
        />
        <input
          type="text"
          name="episodes"
          placeholder="Episodios"
          onChange={handleChange}
          value={form.episodes}
        />
        <input
          type="text"
          name="premiere"
          placeholder="Estreno"
          onChange={handleChange}
          value={form.premiere}
        />
        <input type="submit" value="Enviar" />
        <input type="reset" value="limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default Form;
