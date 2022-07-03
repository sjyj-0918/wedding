import styled from "styled-components";
import "../font/font.css";
import BodyContainer from "./BodyContainer";
import texture from "../images/natural-paper.png";
import TopContainer from "./TopContainer";
import PhotoContainer from "./PhotoContainer";

const Main = styled.div`
    width: 100vw;
    background-color: #f7f1f0;
    background-image: url(${texture});
`;

function MainContainer() {
    return (
        <Main>
            <TopContainer/>
            <BodyContainer/>
            <PhotoContainer/>
        </Main>
    );
}

export default MainContainer;