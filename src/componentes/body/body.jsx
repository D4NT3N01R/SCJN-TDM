import { useRef, useState } from 'react';
import './styles.css';  // Este archivo puede ser opcional si ya tienes configurado Tailwind

export const Body = () => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState('Ningún archivo seleccionado');
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file ? file.name : 'Ningún archivo seleccionado');
  };

  const selectFile = () => {
    fileInputRef.current.click();
  };

  const uploadFile = async () => {
    const formData = new FormData();
    if (fileInputRef.current.files[0]) {
      formData.append('file', fileInputRef.current.files[0]);
      
      try {
        const response = await fetch('http://localhost:6000/upload', {
          method: 'POST',
          body: formData
        });
        const data = await response.text();
        alert(data);
      } catch (error) {
        console.error('Error:', error);
        alert('Error al subir el archivo');
      }
    } else {
      alert('Por favor selecciona un archivo primero');
    }
  };

  return (
    <div className="flex flex-col items-center gap-5 bg-aquamarine p-20 h-screen">
      <form id="uploadForm" encType="multipart/form-data" className="flex flex-col items-center justify-center bg-aqua p-7 gap-3">
        <h1 className="text-2xl">Selecciona el archivo a transcribir</h1>
        
        <input 
          type="file" 
          id="fileInput" 
          name="file" 
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />
        
        <label 
          htmlFor="fileInput" 
          className="inline-block"
          onClick={(e) => {
            e.preventDefault();
            selectFile();
          }}
        >
          <button className="w-full py-6 px-5 text-lg bg-white border border-[#003A70] rounded-lg shadow-md hover:-translate-y-3 transition-all duration-100 cursor-pointer">
          Seleccionar archivo
          </button> 
        </label>

        <span id="file-name" className="text-lg">{fileName}</span>
        
        <button 
          className="relative w-2/3 py-6 px-5 text-lg bg-white border border-black rounded-lg overflow-hidden transition-all duration-1000 hover:text-white group"
          type="button" 
          onClick={uploadFile}
        >
          <span className="absolute inset-0 bg-[#003A70] scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 rounded-lg"></span>
          <span className="relative z-10">Subir Archivo</span>
        </button>

      </form>

      <button 
        className="relative h-16 w-1/6 border border-transparent rounded-lg overflow-hidden transition-transform duration-1000 transform hover:scale-110 cursor-pointer group">
        <span className="absolute inset-0 bg-[#003A70] scale-y-0 origin-top transition-transform duration-300 ease-out group-hover:scale-y-100 rounded-lg"></span>
        <span className="relative z-10 text-black group-hover:text-white">Descargar</span>
      </button>

    </div>
  );
};