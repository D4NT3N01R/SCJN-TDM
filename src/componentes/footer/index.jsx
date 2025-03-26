import logo from '../../assets/SCJN_NEG.png';
import './styles.css'
export const Footer = ()=>{
    return(
        
        <footer className="bg-black text-white w-full py-10 px-10 flex items-center flex-col">
            <div className="flex flex-col justify-center items-center">
            <img 
                    src={logo}
                    alt="Logo SCJN" 
                    className=" items-center w-30 mb-4 justify-center " 
                  />
            <h1> &copy; Copyright SCJN</h1>
            </div>
        </footer>
     
    );
    };