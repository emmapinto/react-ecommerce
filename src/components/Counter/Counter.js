export const Counter = ({value, onAdd, onRemove}) => {
    return (
        <div>
            <button onClick={onAdd}>+</button>
            <p>{value}</p>
            <button onClick={onRemove}>-</button>
        </div>
    )
}