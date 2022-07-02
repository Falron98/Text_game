import {Container, Line} from "./styled";


const TopBar = (props) =>{
    return(
        <>
        <Container>
            <h4>{props.player.name.length > 0 ? `Name: ${props.player.name}`: ""}</h4>
            <br/>
            <h4>{props.player.score > -1 ? `Moves: ${props.player.score}`: ""}</h4>
        </Container>
            <Line/>
        </>
    );
};

export default TopBar