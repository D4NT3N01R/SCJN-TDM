import logo from '../../assets/SCJN_NEG.png';
import './style.css'
export const Header = () => {
  return (
    <header className="bg-black text-white w-full py-10 px-10 flex items-center">
      <a href="https://www.scjn.gob.mx/" target='blank' >
      <img 
        src={logo}
        alt="Logo SCJN" 
        className="h-19 mr-4 cursor-pointer" // Ajusta la altura (h-16) según necesites
      />
      </a>
      <h1 className="m-0 text-xl font-bold">Suprema Corte de Justicia de la Nación</h1>
    </header>
  );
};