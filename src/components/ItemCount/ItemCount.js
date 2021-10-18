export const ItemCount = ({value, onAdd, onRemove}) => {
    return (
        <div className="ItemCount">
            <button onClick={onRemove}>-</button>
            <p>{value}</p>
            <button onClick={onAdd}>+</button>
        </div>
    )
}