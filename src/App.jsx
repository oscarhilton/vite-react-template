import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useDropzone } from 'react-dropzone';
import Logo from "./assets/logo.png"
import image1 from "./assets/1.jpg"
import image2 from "./assets/2.jpg"
import image3 from "./assets/3.jpg"

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

const ImageGallery = () => {
  // Replace these with the names of your downloaded images
  const imageNames = [image1, image2, image3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageNames.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer);
  }, [imageNames]);

  return (
    <div className="relative w-full h-80 w-80 overflow-hidden rounded-lg m-2">
      {imageNames.map((imageName, index) => (
        <img
          key={imageName}
          src={`${imageName}`}
          alt={`Carousel image ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
    </div>
  );
};

export default () => (
  <main className='m-10'>
  <div className="sm:m-auto block sm:flex sm:justify-center sm:items-center sm:h-screen sm:w-screen">
    <div className='w-full sm:w-auto'>
      <h1 className='mb-2'>AudioFormatPro.</h1>
      <p className='mb-8'>
        Format all your audio files in one place to provide to your internal team.
      </p>
      <MyUploadComponent />
    </div>
    <div className='m-8 hidden sm:block w-full sm:w-80'>
      <div className='mt-28'>
        <ImageGallery />
        <span className='font-mono text-xs text-center w-full sm:w-auto block'
          >all images sourced from <a href="https://www.facebook.com/resonancefm/?locale=en_GB">facebook.</a>
        </span>
      </div>
    </div>
  </div>
    <footer className='sm:fixed mt-10 bottom-10 right-10 flex font-mono text-sm items-center text-gray-500'>
    Made with ❤️ for <img className="mx-2" width={30} height={18} src={Logo} /> <span className='mx-2'>by</span> <a href="#">Object2</a>
    </footer>
  </main>
  );
