// import * as PropTypes from 'prop-types';

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

class Post extends React.Component{
    render(){
        return React.createElement(
            'div',
            {
                className: 'post'
            },
            React.createElement(
                'h2',
                {
                    className: 'postAuthor',
                    id: this.props.id
                },
                this.props.user,
                React.createElement(
                    'span',
                    {
                        className: 'postBody'
                    },
                    this.props.content
                ),
                this.props.children
            )
        )
    }
}

class Comment extends React.Component {
    render(){
        return React.createElement(
            'div',
            {
                className: 'comment',
            },
            React.createElement(
                'h3',
                {
                    className: 'commentAuthor'
                },
                this.props.user,
                React.createElement(
                    'span',
                    {
                        className: 'commentAuthor'
                    },
                    this.props.content
                )
            )
        )
    }
}


class CreateComment extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            content: '',
            user: ''
        };
    }
    handleUserChange(event) {
        const val = event.target.value;
        this.setState(() => ({
            user: val
        }))
    }
    handleTextChange(event){
        const val = event.target.value;
        this.setState(() => ({
            content: val
        }))
    }
    handleSubmit(event){
        event.preventDefault();
        this.setState(() => ({
            user: '',
            content: ''
        }))
    }
    render(){
        return React.createElement(
            'form',
            {
                className: 'createComment',
                onSubmit: this.handleSubmit
            },
            React.createElement(
                'input',
                {
                    className: 'userName',
                    type: 'text',
                    placeholder: 'Your name',
                    value: this.state.user,
                    onChange: this.handleUserChange
                }
            ),
            React.createElement(
                'input',
                {
                    className: 'comment',
                    type: 'text',
                    placeholder: 'Thoughts?',
                    value: this.state.content,
                    onChange: this.handleTextChange
                }
            ),
            React.createElement(
                'input',
                {
                    type:'submit',
                    value: 'Post'
                }
            )
        )
    }
}
// Post.propTypes = {
//     user: PropTypes.string.isRequired,
//     content: PropTypes.string.isRequired,
//     id: PropTypes
// }

const App = React.createElement(Post, 
    {
        id: 1,
        content: ' said: This is a post!',
        user: 'mark'
    },
    React.createElement(Comment,{
        id: 2,
        content: ' commented: wow!',
        user: 'bob'
    }),
    React.createElement(CreateComment)
);

ReactDOM.render(App, domElement);