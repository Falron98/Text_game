import React from "react";
import {Container, Score, Scores, Top} from "./styled";
import TextArea from "../Text_Area";
import InputHandler from "../Input_Handler";
import TopBar from "../TopBar";

const MainDisplay = (props) =>{
    console.log(props.scores)
    return (
        <div>
            <Container>
                <TopBar player={props.player}/>
                <TextArea area={props.area} player={props.player} inventory={props.inventory} />
                <InputHandler getinput={props.getinput}/>
            </Container>
            <Scores>
                Highscore
                <Top>
                    <div>
                        Name:
                    </div>
                    <div>
                        Score:
                    </div>
                </Top>
                {props.scores.map((player) => (
                    <Score>
                        <div>
                            {player.name}
                        </div>
                        <div>
                            {player.score}
                        </div>
                    </Score>
                ))}
            </Scores>
        </div>
    );
};
export default MainDisplay;