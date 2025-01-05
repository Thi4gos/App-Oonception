import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import logo from '../../public/images/LogoAppOonceptionWhiteSpear.png'
import MenuUser from '../Minor/MenuUser';
import { useState } from 'react';
import { env } from "../../services/getData"
import { faMagnifyingGlass, faSun } from '@fortawesome/free-solid-svg-icons';

function MenuLateral() {
    function addNum(): void {
        console.log(1);
    }

    function addNewPag(): void {
        
    }
    function getDt(): void {
        env.getData
    }

    const [isOpen, turnOpen] = useState(false); {/* usestate boolean para verificar o estado do menu: Aberto por padrão ou minimizado lateralmente*/}

    return (
        <div 
            className={`flex flex-col gap-4 p-4 bg-terciariaBG z-50 transition-all duration-300 ease-in-out
            ${isOpen ? 'w-fit h-screen' : 'w-4 h-full hover:w-24'}`}>
            
            {/* MENU USER */}
            <div>
                <MenuUser />
            </div>
    
            {/* BOTÕES */}
            <div 
                className={`flex flex-col h-auto gap-4 *:w-fit *:h-fit *:text-principalWG *:cursor-pointer
                ${isOpen ? '*:opacity-100 *:pointer-events-auto' : '*:opacity-0 *:pointer-events-none hover:*:opacity-100 hover:*:pointer-events-auto'}`}>
                
                <button onClick={addNewPag}>Criar nova página</button>
                <p className='hover:bg-gray-400'>
                    <FontAwesomeIcon icon={faSun}/> Aparência
                </p>
                <p className="hover:bg-gray-400">
                    <FontAwesomeIcon onClick={addNum} icon={faMagnifyingGlass}/> Pesquisar
                </p>
                <div className='hover:bg-gray-400'>Notificaçãoes</div>
                <div className='hover:bg-gray-400'>Avisos</div>
                <div onClick={getDt}>Mostrar dados</div>
                <div onClick={() => turnOpen(!isOpen)}>Mudar para oculto</div>
            </div>
        </div>
    );    
}
export default MenuLateral;