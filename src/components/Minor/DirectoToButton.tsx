import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type ButtonProps = {
    title: string; // DEFINE O TÍTULO COMO PROPRIEDADE
    icon?: IconProp 
};

function ButtonToSomething({ title, icon }: ButtonProps) {
    return (
        <div>
            <button className="bg-[#f3f7fe] text-[#3b82f6] border-none cursor-pointer rounded-lg w-[150px] h-[35px] flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#3b82f6] hover:shadow-[0_0_0_5px_#3b83f65f] hover:text-white">
                {icon && <FontAwesomeIcon icon={icon} className="text-lg" />} {/* Renderiza o ícone se existir */}
                {title}
            </button>
        </div>
    );
}

export default ButtonToSomething;
