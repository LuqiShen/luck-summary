// 如果将本脚本放在页面头部，则ReactDOM.render函数将会报错，因为此时DOM还没有生成id为root的div元素
const domElement = document.getElementById("root");
console.log(domElement);
const reactElement = React.createElement('div', {}, 
    React.createElement('h1', {}, "Hello World!",
        React.createElement('a', { href: 'LuqiShen.github.io'},
            React.createElement('h1', {}, "React In Action"),
            React.createElement('em', {}, "... and now it really is!")
        )
    )
)

ReactDOM.render(reactElement, domElement);