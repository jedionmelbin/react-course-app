import React, {useState, useEffect} from "react";

export default function ScrollHooks() {

    const [scrollY, setScrollY] = useState(0);
    const [name, setName] = useState("jedion");

    useEffect(() => {
        console.log("Moviendo scroll");

        const detectorScroll = () => setScrollY(window.pageYOffset);
        window.addEventListener('scroll', () => {
            detectorScroll();
        });
        return () => {
            window.removeEventListener('scroll', detectorScroll)
        };
    }, [scrollY]);

    useEffect(() => {
        console.log(
            "Fase de montaje"
        )
    }, []);

    useEffect(() => {
        console.log("Fase de actualizacion");
    })

    useEffect(() => {
        return () => {
            console.log("Fase de desmontaje");
            //manjeradores de evento, desconectarse
        }
    });

    return (
        <>
            <h2>Hooks- effects y el cyclo de vida</h2>
            <p>Scroll y del navegador {scrollY}</p>
        </>
    );
}
