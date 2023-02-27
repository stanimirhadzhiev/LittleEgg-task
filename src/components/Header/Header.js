import style from "./Header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';

export const Header = () =>{
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const handleToggle = () => {
        setIsNavExpanded(false);
    };

    return(
        <header className={style["header"]}>
            <div className={style["dots"]}></div> 
            <div className={style["container"]}>
                <a href="/"><img className={style["logo"]}  src={require("../../assets/images/logo.png")} alt=""/></a>
                 
                <div className={style["navigation-wrapper"]}>
                    <nav>
                        <ul className={isNavExpanded ? `${style.topnav} ${style.expanded}` : `${style.topnav}`}>
                            <li><a href="#" onClick={handleToggle}>НАЧАЛО</a></li>
                            <li><a href="#" onClick={handleToggle}>ЗА НАС</a></li>
                            <li><a href="#" onClick={handleToggle}>УСЛУГИ</a></li>
                            <li><a href="#" onClick={handleToggle}>КОНТАКТИ</a></li>
                            <li><a className={style["phone-button"]} href="tel:+35929711427" onClick={handleToggle}>+359 2 971 14 27</a></li>
                            <li><a className={style["language"]} href="#" onClick={handleToggle}>English</a></li> 
                        </ul> 
                    </nav>
                    <button className={style.hamburger} onClick={() => {
                        setIsNavExpanded(!isNavExpanded)
                    }}>
                        <GiHamburgerMenu />
                    </button>
                </div>
            </div>
            <div className={style["title-wrapper"]}>
                <h4>Доверен съветник от над ДЕСЕТ години</h4>
                <h1>Защита и разумно увеличаване на богатството на нашите клиенти</h1>
            </div>
            
        </header>
    );
}