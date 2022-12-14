type Props = {
    message: string,
    name: string,
    person: {
        name: string;
        age: number;
    }
}
export default function TypedProps({ message, name, person }: Props) {
    return (
        <div>
            <div>
                {message} {name}
            </div>
            <div>
                {person.name} age: {person.age}
            </div>
        </div>
    )
}
