import Duck from "./demo"

interface Props {
    duck: Duck
}

export default function DuckItem({duck} : Props) {
    return (
        <div key={duck.name}>
            <span>{duck.name}</span>
            <button onClick={() => duck.makeSound(duck.name + " Quack")}>Make a sound</button>
        </div>
    )
}