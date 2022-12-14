
export default function Greet({ message, name }: { message: string; name: string }) {
    return (
        <div>{message} {" "}{name}</div>
    )
}
