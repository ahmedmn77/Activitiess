interface Duck {
    name: string,
    numLegs: number | string,
    makeSound: (sound:string) => void
}



const duck1: Duck = {
    name: 'huey',
    numLegs: 2,
    makeSound: (sound: string) => console.log(sound)
}

const duck2: Duck = {
    name: 'duey',
    numLegs: 2,
    makeSound: (sound: string) => console.log(sound)
}

const duck3: Duck = {
    name: "",
    numLegs: 0,
    makeSound: function(sound: string): void {
        throw new Error("Function not implemented.");
    }
}

const duck4: Duck = {
    name: "Mickey",
    numLegs: 4,
    makeSound: function(sound: string): void {
        throw new Error("Function not implemented.");
    }
}


export const ducks = [duck1, duck2, duck3, duck4];
export default Duck;


