interface Human {
    firstName: string;
    lastName: string;
}

/*
class Weapon {
    public attack() {
        return 'Attacking with' + this.name;
    }

    constructor(public name: string, public strength: number) {}
}*/

function greeter(human: Human) {
    return `Hello ${human.firstName} ${human.lastName}`;
}

// const weapon = new Weapon('Blade', 42);
// document.body.innerText = weapon.name;

const human: Human = {
    firstName: 'Yukio',
    lastName: 'Tanaka',
};

document.body.innerText = greeter(human);
