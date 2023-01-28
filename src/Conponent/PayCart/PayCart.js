import React from 'react';
import styled from 'styled-components';

export const Mainstyled = styled.div`
  width: 80%;
  border: 1px solid black;
  height: 500px;
  margin: 0 auto;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  border: 1px solid red;
`;

export const Conperfum = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid black;
  display: flex;
`;

export default function PayCart(props) {
  return (
    <Mainstyled>
      <Conperfum>
        <Image src ={props.url} />
        <h1> {props.title}</h1>
        <p>{props.price}</p>
      </Conperfum>
    </Mainstyled>
  );
}
