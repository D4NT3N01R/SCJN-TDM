# React + vite: SCJN-TDM

Los package manager de JS a instalar para que funcione el proyecto son acorde a las dependencias declaradas en el package.json, son las siguientes:

-npm install normalize.css
-npm install @tailwindcss/vite

Todo en la carpeta del proyecto.

Versiones usadas en la creación de la pagina:

Node.JS - v22.14.0
NPM - v11.2.0
Vite - v6.2.3 
-----------------------------------------------
En caso de corromporse algun archivo, crear otro proyecto vite con: npm create vite@latest -> <Project-name> -> react -> Javascript y sustituir la carpeta /src, despues agregar los siguientes cambios al index.html:
<!-- <link rel="icon"  href="./src/assets/LogoHorizontal.png" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SCJN-TDM</title> -->
    y a vite.config.js:

<!-- import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
}) -->




