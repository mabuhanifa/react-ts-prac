type PersonLists = {
    first: string;
    last: string;
}[]
interface Person {
    name: string;
    age: number;
}
export default function PersonList({ personList, person }: {
    personList: PersonLists; person: Person
}) {

    return (
        <div>{

            personList.map(({ first, last }, i) => (
                <div key={i}>
                    {first} {last}
                </div>
            ))


        }
            {
                person.name
            }

        </div>
    )
}
