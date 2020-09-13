import React from "react";
import styled from "styled-components";

const StyledPara = styled.p`
    font-size: 1.2rem;
    color: #282c3f;
`;

const Content = () => (
    <>
        <StyledPara>
            I love all things frontend. My day involves figuring out the
            complexities of devices and various requirements, implementing them
            at Swiggy.
        </StyledPara>
        <StyledPara>
            I love debating about various frontend technologies, React +
            Webpack, and Rollup for libraries is winning for me at the moment. I
            enjoy helping others and guiding new people.
        </StyledPara>
        <StyledPara>
            As a web developer, its important to implement things at my best
            possible level, as it is the front to the huge world of any company.
            Therefore, I love working in organizations where the frontend
            challenges are huge.
        </StyledPara>
        <StyledPara>
            I love universal apps, and can be heard quite frequently asking app
            developers to give React Native a try. I have honestly fell in love
            with it, after developing Android apps on Java for over two years.
        </StyledPara>
        <StyledPara>
            I enjoy running marathons. I am working towards getting a Master
            Scuba Diver license.
        </StyledPara>
    </>
);

export default Content;
