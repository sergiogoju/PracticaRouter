<template>
    <div>
        <h1>Book List</h1>
        <ul>
            <li v-for="product in products" :key="product.id">
                <router-link :to="'/product/' + product.id">{{
                    product.name
                }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: [
                {
                    name: "Dune",
                    author: "Frank Herbert",
                    year: "1965",
                    id: "1",
                },
                {
                    name: "Ender's Game",
                    author: "Orson Scott Card",
                    year: "1985",
                    id: "2",
                },
                {
                    name: "1984",
                    author: "George Orwell",
                    year: "1949",
                    id: "3",
                },
                {
                    name: "Foundation",
                    author: "Isaac Asimov",
                    year: "1951",
                    id: "4",
                },
                {
                    name: "The Hitchhiker's Guide to the Galaxy",
                    author: "Douglas Adams",
                    year: "1979",
                    id: "5",
                },
                {
                    name: "Brave New World",
                    author: "Aldous Huxley",
                    year: "1932",
                    id: "6",
                },
                {
                    name: "Neuromancer",
                    author: "William Gibson",
                    year: "1984",
                    id: "7",
                },
                {
                    name: "Snow Crash",
                    author: "Neal Stephenson",
                    year: "1992",
                    id: "8",
                },
                {
                    name: "The Martian",
                    author: "Andy Weir",
                    year: "2011",
                    id: "9",
                },
                {
                    name: "Starship Troopers",
                    author: "Robert A. Heinlein",
                    year: "1959",
                    id: "10",
                },
                {
                    name: "I, Robot",
                    author: "Isaac Asimov",
                    year: "1950",
                    id: "11",
                },
                {
                    name: "The War of the Worlds",
                    author: "H.G. Wells",
                    year: "1898",
                    id: "12",
                },
                {
                    name: "Fahrenheit 451",
                    author: "Ray Bradbury",
                    year: "1953",
                    id: "13",
                },
                {
                    name: "The Time Machine",
                    author: "H.G. Wells",
                    year: "1895",
                    id: "14",
                },
                {
                    name: "The Matrix",
                    author: "The Wachowskis",
                    year: "1999",
                    id: "15",
                },
                {
                    name: "A Wrinkle in Time",
                    author: "Madeleine L'Engle",
                    year: "1962",
                    id: "16",
                },
                {
                    name: "The Hunger Games",
                    author: "Suzanne Collins",
                    year: "2008",
                    id: "17",
                },
                {
                    name: "The Giver",
                    author: "Lois Lowry",
                    year: "1993",
                    id: "18",
                },
                {
                    name: "Jurassic Park",
                    author: "Michael Crichton",
                    year: "1990",
                    id: "19",
                },
                {
                    name: "The Lord of the Rings",
                    author: "J.R.R. Tolkien",
                    year: "1954",
                    id: "20",
                },
            ],
        };
    },
};
</script>
