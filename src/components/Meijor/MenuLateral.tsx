import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import logo from '../../public/images/LogoAppOonceptionWhiteSpear.png'
import { useState } from 'react';
import { env } from "../../services/getData"
import ButtonToSomething from '../Minor/DirectoToButton';
import { faMagnifyingGlass, faSun, faBars } from '@fortawesome/free-solid-svg-icons';

function MenuLateral() {
    // function addNum(): void {
    //     console.log(1);
    // }

    function addNewPag(): void {
        
    }
    function getDt(): void {
        env.getData
    }

    const [isOpen, turnOpen] = useState(true); {/* usestate boolean para verificar o estado do menu: Aberto por padrão ou minimizado lateralmente*/}

    return (
        <div 
            className={`flex flex-col gap-4 p-4 bg-terciariaBG z-50 transition-all duration-300 ease-in-out
            ${isOpen ? 'w-fit h-screen' : 'w-4 h-full hover:w-24'}`}>
            
            {/* MENU USER */}
            <div className='flex flex-row gap-3 align-middle justify-center'>     
                <p>Usuário logado</p>
                <FontAwesomeIcon  onClick={() => turnOpen(!isOpen)} className='mt-1 cursor-pointer' icon={faBars} />
                {/* <img src={picture} alt="Profile picture"/> */}   
                
            </div>
    
            {/* BOTÕES */}
            <div 
                className={`flex flex-col h-auto gap-4 *:w-fit *:h-fit *:text-principalWG *:cursor-pointer
                ${isOpen ? '*:opacity-100 *:pointer-events-auto' : '*:opacity-0 *:pointer-events-none hover:*:opacity-100 hover:*:pointer-events-auto'}`}>
                
                <button onClick={addNewPag}>Criar nova página</button>
                <ButtonToSomething title='Aparência' icon={faSun}></ButtonToSomething>        
                <ButtonToSomething title='Pesquisar' icon={faMagnifyingGlass} ></ButtonToSomething>
                <ButtonToSomething title='botão teste'></ButtonToSomething>
                <ButtonToSomething title='Notificações'></ButtonToSomething>
                <ButtonToSomething title='Avisos'></ButtonToSomething>
                
                <div onClick={getDt}>Mostrar dados</div>
            </div>
        </div>
    );    
}
export default MenuLateral;