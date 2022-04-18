import React, {ComponentRef, createRef, useRef} from "react";

export default function Referencias() {

    //let refMenu = createRef(),
    let refMenu = useRef(),
        refMenuBtn = useRef();

    console.log(refMenu, refMenuBtn);

    const handleToggleMenu = (e) => {
        /*const $menu = document.getElementById('menu');
        if (e.target.textContent === "Menu") {
            e.target.textContent = 'Cerrar';
            $menu.style.display = 'block';

        } else {
            e.target.textContent = 'Menu';
            $menu.style.display = "none";
        }*/

        if (refMenuBtn.current.textContent == "Menu") {
            refMenuBtn.current.textContent = 'Cerrar';
            refMenu.current.style.display = 'block';
        } else {
            refMenuBtn.current.textContent = 'Menu';
            refMenu.current.style.display = "none";
        }

    }

    return (
        <>
            <h2>Referencias</h2>
            <button id="menu-btn" ref={refMenuBtn} onClick={handleToggleMenu}>Menu</button>
            <nav id="menu" style={{display: "none"}} ref={refMenu}>
                <ul>
                    <li><a href="#">Sección 1</a></li>
                    <li><a href="#">Sección 2</a></li>
                    <li><a href="#">Sección 3</a></li>
                    <li><a href="#">Sección 4</a></li>
                    <li><a href="#">Sección 5</a></li>
                </ul>
            </nav>
        </>
    );
}
