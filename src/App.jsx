import React from 'react';
import { useFormik } from 'formik';
import { useDropzone } from 'react-dropzone';
import Logo from "./assets/logo.png"

const MyUploadComponent = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      date_of_air: ''
    },
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append('file', acceptedFiles[0]);
      formData.append('name', values.name);
      formData.append('description', values.description);
      formData.append('date_of_air', values.date_of_air);

      // Make your API call here
      console.log(values);
    }
  });

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone();

  return (
    <form onSubmit={formik.handleSubmit} className="p-8 bg-gray-100 rounded-lg shadow-md animate__animated animate__fadeIn">
      <div {...getRootProps()} className="p-4 border-4 border-dashed border-gray-200 rounded-lg cursor-pointer hover:bg-gray-300 transition duration-300">
        <input {...getInputProps()} />
        <p className="text-center">Drag 'n' drop some files here, or click to select files</p>
      </div>
      <div className="mt-4">
        <input
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          className="p-2 w-full rounded-md border border-gray-300"
          placeholder="Name"
        />
      </div>
      <div className="mt-4">
        <input
          name="description"
          onChange={formik.handleChange}
          value={formik.values.description}
          className="p-2 w-full rounded-md border border-gray-300"
          placeholder="Description"
        />
      </div>
      <div className="mt-4">
        <input
          name="date_of_air"
          type="date"
          onChange={formik.handleChange}
          value={formik.values.date_of_air}
          className="p-2 w-full rounded-md border border-gray-300"
        />
      </div>
      <div className="mt-4">
        <button type="submit" className="p-2 w-full bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
          Submit
        </button>
      </div>
    </form>
  );
};

export default () => (
  <main>
    <div className='fixed bottom-10 right-10 w-20 h-20'>
    <img src={Logo} />
    </div>
  <div className="flex justify-center items-center h-screen w-screen">
    <MyUploadComponent />
  </div>
  </main>
  );
