let ava = document.querySelector(".avatar")
let nome = document.querySelector(".name")
let job = document.querySelector(".job")
let description = document.querySelector(".description")



const persons = [{
    image_url: "/public/assets/person1.jpg",
    name: "Jake Gyle",
    job: "WEB DEVELOPER",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,   ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
},
{
    image_url: "/public/assets/model.jpg",
    name: "Gina Toulz",
    job: "MODEL",
    description: "There are many variations of passages of Lorem Ipsum available,  look even slightly believable Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.",
},
{
    image_url: "/public/assets/engineer.jpg",
    name: "Henry Sthulman",
    job: "ENGINEER",
    description: "Contrary to popular belief, Lorem Ipsum is not simply random from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur",
},
{
    image_url: "/public/assets/photographer.jpg",
    name: "Tayane Jones",
    job: "PHOTOGRAPHER",
    description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
},
]


function renderFirts() {
    ava.setAttribute('src', `${persons[0].image_url}`);
    nome.innerText = `${persons[0].name}`
    job.innerText = `${persons[0].job}`
    description.innerText = `${persons[0].description}`
}

renderFirts()


let person_right = 1
document.querySelector(".btn-right").addEventListener("click", (event) => {
    event.preventDefault();
    if (person_right <= persons.length - 1) {
        ava.setAttribute('src', `${persons[person_right].image_url}`);
        nome.innerText = `${persons[person_right].name}`
        job.innerText = `${persons[person_right].job}`
        description.innerText = `${persons[person_right].description}`

        person_right += 1

    } else {
        person_right = 0
    }

})

let person_left = persons.length - 1
document.querySelector(".btn-left").addEventListener("click", (event) => {
    event.preventDefault();
    if (person_left >= 0) {
        ava.setAttribute('src', `${persons[person_left].image_url}`);
        nome.innerText = `${persons[person_left].name}`
        job.innerText = `${persons[person_left].job}`
        description.innerText = `${persons[person_left].description}`

        person_left -= 1

    } else {
        person_left = persons.length - 1
    }

})


document.querySelector(".btn-random").addEventListener("click", (event) => {
    event.preventDefault();
    let randomPerson = Math.floor(Math.random() * persons.length)

    ava.setAttribute('src', `${persons[randomPerson].image_url}`);
    nome.innerText = `${persons[randomPerson].name}`
    job.innerText = `${persons[randomPerson].job}`
    description.innerText = `${persons[randomPerson].description}`

    console.log(randomPerson)
})






// function renderFirst() {
//     nome.innerHTML = persons[2].name
// }

// renderFirst()







