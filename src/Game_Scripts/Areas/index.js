

const Area = (id, name, text, options={}, directions = {}, items = []) => (
    {
        id: id,
        name: name,
        text: text,
        options: options,
        directions: directions,
        items: items
}
)

const Areas = {
    start: Area(
        0,
        "Starting Area",
        "Hello Traveler, please enter your name",
    ),
    fork: Area(
        1,
        "Fork in the road",
        "Standing on the road you see two roads in front of you, one leading to a" +
        " forest with road between trees, second leads to the distant mountains " +
        "In the corner under a tree you notice a stranger.",
        {1:"Go to forest",
            2:"Follow the road to the mountains ",
            3:"Talk to stranger"},
        {1:"forest",
            2:"road_to_mountains",
            3:"stranger"}
        ),
    road_to_mountains: Area(
        2,
        "Road to mountains",
        "Following the road to mountains you hear rustling in the bushes.",
        {1:"Check rustling",
        2:"Move on"},
        {1:"boar",
        2: "road_to_mountains2"}
    ),
    forest: Area(
        3,
        "Forest",
        "Dark and wide forest, at least there is shade protecting from the sun",
        {1: "Move on",
        2: "Rest under tree"},
        {
            1: "forest_road",
            2: "forest_rest"
        }
    ),
    inventory: Area(
        4,
        "Inventory",
        "Here are your items",
    ),
    road: Area(
        5,
        "Road",
        "",

    ),
    stranger: Area(
        6,
        "Stranger",
        "Stranger seems to be irritated by you walking towards him",
        {1: "Leave",
        2: "Talk"},
        {1: "fork_2",
        2: "death"}
    ),
    death: Area(
        7,
        "Dead",
        "You are dead",
        {1: "Restart"},
        {1: "start"}
    ),
    boar: Area(
        8,
        "Boar",
        "The creature that made noise turned out to be a wild boar!",
        {1: "Flee",
            2: "Play dead"
        },
        {1: "death",
        2: "boar_playdead"}
    ),
    road_to_mountains2: Area(
        9,
        "Road to mountains",
        "You move on with the road",
        {1: "Continue"},
        {1: "demo_end"}
    ),
    fork_2: Area(
        10,
        "Fork in the road",
        "Standing on the road you see two roads in front of you, one leading to a" +
        " forest with road between trees, second leads to the distant mountains. ",
        {1:"Go to forest",
            2:"Follow the road to the mountains ",},
        {1:"forest",
            2:"road_to_mountains",}
    ),
    forest_road: Area(
        11,
        "Trampled path in forest",
        "Moving on you begin to feel thirsty",
        {
            1: "Move on",
            2: "Search for water"
        },
        {
            1: "forest_leave",
            2: "forest_water"
        },
    ),
    forest_leave: Area(
        12,
        "End of forest",
        "Leaving forest you step into the open sun. You hear a voice" +
        "shouting for help",
        {
            1: "Move on",
            2: "Investigate what's going on"
        },
        {
            1: "sun_road",
            2: "sun_event"
        },
    ),
    sun_road: Area(
        13,
        "Dirty road",
        "Following dusty hot road you begin to feel dizzy",
        {
            1: "Drink water from inventory",
            2: "Continue"
        },
        {
            1: "sun_road2",
            2: "death"
        }
    ),

    forest_water: Area(
        14,
        "Forest",
        "You found empty plastic bottle and little spring",
        {
            1: "Grab bottle and pour water into it",
            2: "Leave"
        },
        {
            1: "forest_got_water",
            2: "forest_leave"
        }
    ),
    forest_got_water: Area(
        15,
        "Forest",
        "You poured water into bottle and hid it in the backpack",
        {
            1: "Continue"
        },
        {
            1: "forest_leave"
        }
    ),
    sun_road2: Area(
        16,
        "Dirty road",
        "You feel a lot better",
        {
            1: "Move on"
        },
        {
            1: "demo_end"
        }
    ),
    sun_road3: Area(
        17,
        "Dirty road",
        "",

    ),
    demo_end: Area(
        18,
        "End of the demo",
        "Thank you for playing",
        {
            1: "Restart"
        },
        {
            1: "start"
        }
    ),
    forest_rest: Area(
        19,
        "Forest",
        "You rest under the tree and fall asleep." +
        "You notice apple near you.",
        {
            1: "Grab the apple",
            2: "Ignore the apple"
        },
        {
            1: "forest_road",
            2: "forest_road"
        }
    ),
    forest_apple: Area(
        20,
        "Forest",
        "You grabbed apple and returned on the road",
        {
            1:"Continue"
        },
        {
            1: "forest_road"
        }
    ),
    sun_event: Area(
        21,
        "In development",
        "In development",
        {1:"Continue"},
        {1:"demo_end"}
    ),
    boar_playdead: Area(
        22,
        "Boar",
        "After a while boar decided to leave.",
        {
            1: "Continue"
        },
        {
            1: "road_to_mountains2"
        }

    )
};

export default Areas