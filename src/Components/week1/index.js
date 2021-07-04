import React from "react";
import loader from "./Assests/loader.png";
import style from 'styled-components'; 
import { getByDisplayValue } from "@testing-library/dom";
import { findByLabelText } from "@testing-library/dom";

const StyledWrapper = styled.div` 
    display: flex;
    justify-content: center;
    height: 70vw;
    flex-direction: row-reverse;
    background: #e5e5e5

`;

const StyledHeader = styled.h1` 
    text-align: center;
    colour: #000000;
    font-size: 80px;

`;
const week1 = ()=> (
    <>

    <StyledWrapper>
        <div>
        <img scr={loader}/>
        <StyledHeader> Loading </StyledHeader>
        </div>
    </StyledWrapper>


    </>
);

export default week1;