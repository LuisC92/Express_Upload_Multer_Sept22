/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

function App() {
  const { register, handleSubmit } = useForm();
  const [image, setImage] = useState();
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("myfile", data.file[0]);
    // fetch("http://localhost:5000/upload", {
    //   method: "POST",
    //   body: formData,
    // })
    axios
      .post("http://localhost:5000/upload", formData)
      // .then((res) => res.json())
      .then((res) => setImage(res.data.url))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("file")} type="file" />
        <button type="submit">Submit</button>
      </form>
      <img src={image} alt="uploaded" />
    </div>
  );
}

export default App;
