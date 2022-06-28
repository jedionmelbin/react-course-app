import React from "react";
import styled from "styled-components";

export default function ComponenteEstilizado() {

    let mainColor = `#db7093`, mainAlphaColor89 = '#db709380';


    const setTransition = (time) => `all ${time} ease-in-out`;

    const MyH3 = styled.h3`
      padding: 2rem;
      text-align: center;
      color: ${(props) => props.color};
      background-color: ${mainColor};
      transition: ${setTransition("1s")};

      &:hover {
        background-color: ${mainAlphaColor89};
      }
    `;
    return (
        <>
            <h2>Styled Components</h2>
            <h3>Hola soy un h3 estilizado styled component</h3>
            <MyH3>Soy un h3 utilizado con styled components</MyH3>
            <MyH3 color="#Cb7098">Soy un h3 utilizado con styled components</MyH3>
        </>
    );
}
