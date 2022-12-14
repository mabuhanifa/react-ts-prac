type Props = {
    message: string,
    name: string,
}
export default function TypedProps({ message, name }: Props) {
    return (
        <div>
            <div>
                {message} {name}
            </div>
        </div>
    )
}
