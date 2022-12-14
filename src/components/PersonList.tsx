type Person = {
    first: string;
    last: string;
}[]
export default function PersonList({ personList }: { personList: Person }) {

    return (
        <div>{

            personList.map(({ first, last }, i) => (
                <div key={i}>
                    {first} {last}
                </div>
            ))


        }</div>
    )
}
