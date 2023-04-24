const categories = [
    {
        title: "Urban Sounds",
        itemcount: "12",
        image: require("../assets/artwork/urban.jpg"),
        id: "1",
        content: [
            {
                title: "City Street Ambience",
                duration: "2:45",
                file: require("../assets/sounds/car.mp3"),
                id: "1.1",
            },
            {
                title: "Train Passing By",
                duration: "1:58",
                file: require("../assets/sounds/train.mp3"),
                id: "1.2",
            },
        ],
    },
    {
        title: "Nature Sounds",
        itemcount: "15",
        image: require("../assets/artwork/nature.png"),
        id: "2",
        content: [
            {
                title: "Loud",
                duration: "2:45",
                file: require("../assets/sounds/car.mp3"),
                id: "2.1",
            },
            {
                title: "Train Passing By",
                duration: "1:58",
                file: require("../assets/sounds/train.mp3"),
                id: "2.2",
            },
        ],
    },
    {
        title: "Noises",
        itemcount: "6",
        image: require("../assets/artwork/noises.jpg"),
        id: "3",
    },
    {
        title: "Household Sounds",
        itemcount: "10",
        image: require("../assets/artwork/household.jpg"),
        id: "4",
    },
]

export default categories;