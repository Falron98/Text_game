import {useEffect, useState} from "react";
import Player from "../Player";
import Areas from "../Areas";
import MainDisplay from "../../mods/Main_Display";
import Items from "../Items";

const MainLogic = (props) => {
    const [player] = useState(new Player("","start"));
    const [area, SetArea] = useState(Areas.start);
    const [update, Setupdate] = useState(false);
    const [data, SetData] = useState([])

    useEffect(() => {}, [update])

    const changeLocation = () => {
        player.lastLocation = player.location
        SetArea(Areas[player.location]);
    };

    const getInput = (i, setText) =>{
        doLogic(i);
        setText("");
    };

    const doLogic = (i) => {
        switch(player.location){
            case "start":
                player.Death()
                Setupdate(!update)
                if(i.length > 0) {
                    player.ChangeName(i)
                    player.ChangeScore(0)
                    player.location = "fork";
                    changeLocation();
                }
                if(player.location !== "inventory") {
                    Areas[player.location].directions[5] = "inventory";
                    Areas[player.location].options[5] = "Inventory";
                }
                break;
            default:
                player.location = Areas[player.location].directions[i].toLowerCase();
                console.log(player.location)
                console.log(player.lastLocation)
                if( player.location === "inventory") {
                    Areas[player.location].directions[0] = player.lastLocation;
                    Areas[player.location].options[0] = "Leave"
                }
                if(player.location !== "inventory" && player.lastLocation !== "death" && player.lastLocation !== "demo_end" && player.location !== "demo_end" && player.location !== "start") {
                    Areas[player.location].directions[5] = "inventory";
                    Areas[player.location].options[5] = "Inventory";
                }
                if(player.location !== "start" && player.location !== "death" && player.location !== "inventory" && player.lastLocation !== "inventory") {
                    player.ChangeScore(player.score + 1)
                }
                if(player.location === "forest_got_water"){
                    if(player.inventory.includes(Items.BottledWater) === false) {
                        player.AddToInventory(Items.BottledWater)
                    }
                }
                if(player.location === "forest_road" && player.lastLocation === "forest_rest"){
                    if(i === "1"){
                        alert("Added apple to your inventory");
                        player.AddToInventory(Items.Apple)
                        Setupdate(!update)
                    }
                }
                if(player.location === "death" || player.location === "demo_end"){
                    SetData([...data, {name:player.name, score:player.score}]
                    )
                }
                if(player.location === "sun_road2"){
                    if(i === "1" && player.inventory.includes(Items.BottledWater) === false){
                        alert("You don't have water in your inventory")
                        player.location = "sun_road"
                    }else if(i === "1" && player.inventory.includes(Items.BottledWater) === true){
                        alert("You used water from your inventory")
                        player.RemoveFromInventory(Items.BottledWater.id)
                        Setupdate(!update)
                    }
                    changeLocation();
                }
                else{
                    changeLocation();
                }
            }
    }
    return (
        <div>
            <MainDisplay area={area} inventory={player.inventory} getinput={getInput} player={player} scores={data}/>
        </div>
    );
}

export default MainLogic