export const Title = (props) => {
    console.log(props.text)
    // return <h1>{props.text || "Falta completar texto"}</h1> //puede escribirse asi tambien
    return <h1 onClick={props.onTitle}>{props.text ? props.text : "Falta completar texto"}</h1>
}