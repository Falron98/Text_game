
const Item = (id, name, des )=> (
    {
        id : id,
        name : name,
        des : des,
    }
)

const Items = {
    BottledWater: Item(
        1,
        "Bottled Water",
        "Seems fresh and good to drink",
    ),
    Apple: Item(
        2,
        "Apple",
        "Fresh apple"
    )
};

export default Items

