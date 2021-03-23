class ShallowMerge extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user: {
                name: "Lucy",
                colors: {
                    favorite: ""
                }
            }
        };
        this.buttonOnClick = this.buttonOnClick.bind(this);
    }
    buttonOnClick(){
        this.setState(() => ({
            user:{
                colors: {
                    favorite: "blue"
                }
            }
        }))
    }
    render(){
        return(
            <div>
                <h1>Hello, my name is {this.state.user.name}</h1>
                <h2>My favorite color is {this.state.user.colors.favorite}</h2>
                <button onClick = {this.buttonOnClick}>reveal it!</button>
            </div>
        )
    }
}

ReactDOM.render(
    <ShallowMerge />,
    document.getElementById('root')
)