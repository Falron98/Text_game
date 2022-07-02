import {Container, ItemContainer, Line} from "./styled";
import InventoryCard from "../inventoryCard";

const TextArea = (props) => {

    const getAreas = () =>
        Object.entries(props.area.options)
                .filter(([key, val]) => val !== null)
                .map(([key, value]) => (
                    <h3>
                        {key} : {value}
                    </h3>
                ));

    const getInventory = () =>
        props.inventory.map((ele) => <InventoryCard ele={ele} />);

    console.log(props.area)
    return (
        <Container>
            <h2>{`You are in : ${props.area.name}`}</h2>
            <h4>{props.area.text}</h4>
            <h3>{props.area.name.toLowerCase() === "dead" && `You made:  ${props.player.score} moves`}</h3>
            <h3>{props.area.name.toLowerCase() === "end of the demo" && `Your made: ${props.player.score} moves`}</h3>
            <ItemContainer>
                {props.area.name.toLowerCase() === "inventory" && getInventory()}
            </ItemContainer>
            <Line/>
            {getAreas()}
        </Container>
    )
};

export default TextArea;