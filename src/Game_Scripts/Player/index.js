export default class Player{
    constructor(name, location) {
        this.name = name;
        this.location = location;
        this.lastLocation = "";
        this.score = -1;
        this.inventory = [];
    }
    ChangeScore(score){
        this.score = score;
    }
    ChangeLocation(loc){
        this.lastLocation = this.location;
        this.location = loc;
    }
    ChangeName(name){
        this.name = name;
    }
    AddToInventory(item){
        this.inventory.push(item);
    }
    RemoveFromInventory(id){
        this.inventory = this.inventory.filter( ele => ele.id !== id)
    }
    Death(){
        this.ChangeName("")
        this.ChangeScore(-1)
        this.inventory = []
    }

}