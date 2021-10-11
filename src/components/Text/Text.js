export const Text = (props) => {
    return (
        <div>
            <p>{props.description}</p>
            {props.children}
        </div>
    )
}