const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}
wrapGifts(gifts);

const people = ["Guadalupe", "Ollie", "Aki"]

function writeCards(people, event) {
    const thanksMessages = [];
    for (let thx = 0; thx < people.length; thx++) {
        thanksMessages.push(`Thank you, ${people[thx]}, for the wonderful surprise gift!`)
    };
    return thanksMessages;
}

function countDown(posInt) {
    while (posInt > -1) {
        console.log(posInt--);
    }
    return posInt;
}