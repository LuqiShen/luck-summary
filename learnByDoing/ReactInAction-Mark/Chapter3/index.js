class Secret extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "secret!"
        }
        //对于bind尚有疑问
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(event){
        this.setState(() => ({
            name : "Lucy"
        }))
        // this.state = {
        //     name : "lucy"
        // }
    }
    render(){
        return(
            <div>
                <h1>My name is {this.state.name}</h1>
                <button onClick = {this.handleClick}>Reveal it!</button>
            </div>
        )
    }
}

ReactDOM.render(
    <Secret />,
    document.getElementById('root')
)

/* 
    当点击按钮时，点击事件被触发，提供给React用于响应事件的函数会被执行。
    当函数执行时，它会用一个对象作为参数来调用setState方法。
    这个对象有一个指向字符串的name属性。React会安排更新状态。
    当更新发生后，ReactDOM会在需要时更新DOM。render函数再次被调用以用于更新this.state.name。
*/