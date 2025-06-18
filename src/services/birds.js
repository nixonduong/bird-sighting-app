import { BASEURL, XAPIKEY } from "../utils/constants.js"

const data = [
    {
        "birdId": "1006.BIRD",
        "name": "Bald Eagle",
        "size": 107,
        "weight": 4897,
        "lifespan": 23,
        "habitat": "Forest, near large bodies of open water",
        "diet": "Carnivore, fish, small mammals",
        "diurnal": true
    },
    {
        "birdId": "1007.BIRD",
        "name": "Emperor Penguin",
        "size": 150,
        "weight": 30106,
        "lifespan": 20,
        "habitat": "Antarctic region, coastal areas",
        "diet": "Carnivore, fish, krill",
        "diurnal": true
    },
    {
        "birdId": "1008.BIRD",
        "name": "Kakapo",
        "size": 60,
        "weight": 1263,
        "lifespan": 70,
        "habitat": "Forested islands",
        "diet": "Leaves, fern fronds, bark, roots, flowers, fruit, seeds",
        "diurnal": false
    },
    {
        "birdId": "1009.BIRD",
        "name": "Hyacinth Macaw",
        "size": 97,
        "weight": 1625,
        "lifespan": 54,
        "habitat": "Tropical rainforests",
        "diet": "Omnivore, nuts, fruits, seeds",
        "diurnal": true
    },
    {
        "birdId": "101.BIRD",
        "name": "Peregrine Falcon",
        "size": 48,
        "weight": 961,
        "lifespan": 16,
        "habitat": "Cliffs, tall buildings, open landscapes",
        "diet": "Carnivore, birds, small mammals",
        "diurnal": true
    },
    {
        "birdId": "1014.BIRD",
        "name": "Great Horned Owl",
        "size": 71,
        "weight": 1229,
        "lifespan": 28,
        "habitat": "Woodlands, forests, and deserts",
        "diet": "Carnivore, small mammals, birds, reptiles",
        "diurnal": false
    },
    {
        "birdId": "1015.BIRD",
        "name": "Hyacinth Macaw",
        "size": 73,
        "weight": 1222,
        "lifespan": 40,
        "habitat": "Tropical rainforests",
        "diet": "Omnivore, nuts, fruits, seeds",
        "diurnal": true
    },
    {
        "birdId": "1016.BIRD",
        "name": "Peregrine Falcon",
        "size": 50,
        "weight": 1019,
        "lifespan": 16,
        "habitat": "Cliffs, tall buildings, open landscapes",
        "diet": "Carnivore, birds, small mammals",
        "diurnal": true
    },
    {
        "birdId": "1017.BIRD",
        "name": "Emperor Penguin",
        "size": 141,
        "weight": 28396,
        "lifespan": 18,
        "habitat": "Antarctic region, coastal areas",
        "diet": "Carnivore, fish, krill",
        "diurnal": true
    },
    {
        "birdId": "1018.BIRD",
        "name": "Kakapo",
        "size": 67,
        "weight": 1404,
        "lifespan": 78,
        "habitat": "Forested islands",
        "diet": "Leaves, fern fronds, bark, roots, flowers, fruit, seeds",
        "diurnal": false
    },
    {
        "birdId": "1019.BIRD",
        "name": "Great Horned Owl",
        "size": 79,
        "weight": 1368,
        "lifespan": 31,
        "habitat": "Woodlands, forests, and deserts",
        "diet": "Carnivore, small mammals, birds, reptiles",
        "diurnal": false
    },
    {
        "birdId": "102.BIRD",
        "name": "Bald Eagle",
        "size": 77,
        "weight": 3518,
        "lifespan": 17,
        "habitat": "Forest, near large bodies of open water",
        "diet": "Carnivore, fish, small mammals",
        "diurnal": true
    },
    {
        "birdId": "1020.BIRD",
        "name": "Hyacinth Macaw",
        "size": 72,
        "weight": 1200,
        "lifespan": 40,
        "habitat": "Tropical rainforests",
        "diet": "Omnivore, nuts, fruits, seeds",
        "diurnal": true
    },
    {
        "birdId": "1021.BIRD",
        "name": "Great Horned Owl",
        "size": 64,
        "weight": 1109,
        "lifespan": 25,
        "habitat": "Woodlands, forests, and deserts",
        "diet": "Carnivore, small mammals, birds, reptiles",
        "diurnal": false
    },
    {
        "birdId": "1025.BIRD",
        "name": "Great Horned Owl",
        "size": 75,
        "weight": 1290,
        "lifespan": 30,
        "habitat": "Woodlands, forests, and deserts",
        "diet": "Carnivore, small mammals, birds, reptiles",
        "diurnal": false
    }
]

export async function fetchBirds() {

    // try {
    //     const response = await fetch(`${BASEURL}/api/birds`, {
    //         method: 'GET',
    //         headers: {
    //         'Authorization': `Bearer ${XAPIKEY}`,
    //         'Content-Type': 'application/json'
    //         }
    //     });

    //     if (!response.ok) {
    //         throw new Error(`HTTP error! Status: ${response.status}`);
    //     }

    //     const data = await response.json();
    //     return data;

    // } catch (error) {
    //     console.error('Failed to fetch birds:', error);
    //     throw error;
    // }

    return data
}

export async function fetchBird(birdId) {
    return data.find(bird => bird.birdId === birdId)
}

export async function addBird(value) {
    alert(`POST: ${JSON.stringify(value, null, 2)}`);
    data.push(value)
}

export async function updateBird(value) {
    alert(`PUT: ${JSON.stringify(value, null, 2)}`);
    const index = data.findIndex(obj => obj.birdId === value.birdId);
    if (index !== -1) {
        data[index] = value
    }
}

export async function deleteBird(birdId) {
    alert(`DELETE: /api/birds/${birdId}`)
    const index = data.findIndex(obj => obj.birdId === birdId);
    if (index !== -1) {
        data.splice(index, 1);
    }
}