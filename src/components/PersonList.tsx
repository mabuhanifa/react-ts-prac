import { Person, PersonLists } from "../types/types";

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
