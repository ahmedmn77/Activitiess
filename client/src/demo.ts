interface duck {
    name: string,
    numLegs: number | string,
    makeSound: (sound:string) => void
}



const duck1 : duck = {
    name: 'huey',
    numLegs: 2,
    makeSound: (sound: any) => console.log(sound)
}

const duck2 : duck = {
    name: 'duey',
    numLegs: 2,
    makeSound: () => console.log('quack')
}

const duck3: duck = {
    name: "",
    numLegs: 0,
    makeSound: function(sound: string): void {
        throw new Error("Function not implemented.");
    }
}

duck1.name = '42';



export const ducks =[duck1,duck2]


