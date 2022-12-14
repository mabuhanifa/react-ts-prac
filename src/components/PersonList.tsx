type Person = {
    first: string;
    last: string;
}[]
export default function PersonList({ personList }: { personList: Person }) {

    return (
        <div>PersonList</div>
    )
}
