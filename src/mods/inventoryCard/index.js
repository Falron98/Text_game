import {Card} from "./styled";

const inventoryCard = (props) =>{
    return(
        <Card>
            <h5>Name: {props.ele.name}</h5>
            <h5>Description: {props.ele.des}</h5>
        </Card>
    )
}


export default inventoryCard