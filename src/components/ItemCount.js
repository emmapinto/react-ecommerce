export const ItemCount = ({value, onAddCounter, onRemoveCounter}) => {

    return (
        <div className="ItemCount">
            <button onClick={onRemoveCounter}>-</button>
            <p>{value}</p>
            <button onClick={onAddCounter}>+</button>
        </div>
    )
}

export default ItemCount;