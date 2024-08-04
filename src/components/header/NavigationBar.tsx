import Links from "./Links";
import LanguageSwitcher from "./LanguageSwitcher";

interface NavigationBarProps {
    isMobile: boolean;
    isMenuActive: boolean;
    handleCloseMenu: () => void;
    handleOpenMenu: () => void;
}

const NavigationBar:React.FC<NavigationBarProps> = (props) => {
    return (
        <div className="options flex relative shrink-0 flex-row items-center justify-between">
        {!props.isMobile && <Links />}
        <LanguageSwitcher />
        {props.isMobile && props.isMenuActive && (
            <div
                onClick={props.handleCloseMenu}
                className="relative flex z-50 flex-col w-7 items-center space-y-[5px] right-[-12px] top-[-2px]"
            >
                <span className="absolute block w-6 h-[3px] translate-x-[-50%] transform rotate-[-45deg] bg-white"></span>
                <span className="absolute block w-6 h-[3px] translate-x-[-50%]  translate-y-[-4.9px] transform rotate-[45deg] bg-white"></span>
            </div>
        )}
        {props.isMobile && !props.isMenuActive && (
            <div
                onClick={props.handleOpenMenu}
                className="relative z-50 flex-shrink-0 w-7 inline-flex flex-col items-center space-y-[5px]"
            >
                <span className="block w-7 h-[3px] bg-white"></span>
                <span className="block w-7 h-[3px] bg-white"></span>
                <span className="block w-7 h-[3px] bg-white"></span>
            </div>
        )}
    </div>
    )
}

export default NavigationBar;