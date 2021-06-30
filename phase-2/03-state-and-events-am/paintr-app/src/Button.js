function Button(props) {
    return (
        <button onClick={() => props.setFunction(!(props.currentState))}>
          { props.type ? props.trueText : props.falseText}
        </button>
    )
}

export default Button;