function Greeting(props){
    return <h1>Hello {props.for}!</h1>
}

Greeting.propTypes = {
    for: window.PropTypes.string.isRequired
};

Greeting.defaultProps = {
    for: "friends"
};

ReactDOM.render(<Greeting for="Lucy"/>, document.getElementById('root'));