type InputProps = {
    handleClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}
export default function Input({ handleClick, value }: InputProps) {
    return (
        <input type='text' onChange={(e) => handleClick(e)} />
    )
}
