type Literals = { status: "loading" | "success" | "failed" };
export default function StringLiterals({ status }: Literals) {

    return (
        <div>{
            status
        }</div>
    )
}
