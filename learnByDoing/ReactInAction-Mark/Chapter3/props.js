class Counter extends React.Component{
    static propTypes = {
        incerementBy: window.PropTypes.number,
        onIncrement: window.PropTypes.func.inRequired
    };
    static defaultProps = {
        incrementBy: 1
    };

    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
        this.onButtonClick = this.onButtonClick.bind(this);
    }
    onButtonClick(){
        this.setState(function(prevState, props){
            return { count: prevState.count + props.incrementBy}
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.onButtonClick}>++</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter incrementBy={1} />, document.getElementById('root'));