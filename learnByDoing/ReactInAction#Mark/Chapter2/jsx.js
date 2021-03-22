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
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        this.props.onCommentSubmit({
            user: this.state.user.trim(),
            content: this.state.content.trim()
        });
        this.setState(() => ({
            user: '',
            content: ''
        }))
    }
    render(){
        return(
            <form className = "createComment" onSubmit = {this.handleSubmit}>
                    <input
                        className = "userName"
                        type = "text"
                        placeholder = "Your Name"
                        value = {this.state.user}
                        onChange = {this.handleUserChange}>
                    </input>
                    <input
                        className = "comment"
                        type = "text"
                        placeholder = "thoughts?"
                        value = {this.state.content}
                        onChange = {this.handleTextChange}>
                    </input>
                    <button type = "submit">Post</button>
            </form>
        )
        // return React.createElement(
        // 'form',
        //     {
        //         className: 'createComment',
        //         onSubmit: this.handleSubmit
        //     },              
        //     React.createElement(
        //         'input',
        //         {
        //             className: 'userName',
        //             type: 'text',
        //             placeholder: 'Your name',
        //             value: this.state.user,
        //             onChange: this.handleUserChange
        //         }
        //     ),
        //     React.createElement(
        //         'input',
        //         {
        //             className: 'comment',
        //             type: 'text',
        //             placeholder: 'Thoughts?',
        //             value: this.state.content,
        //             onChange: this.handleTextChange
        //         }
        //     ),
        //     React.createElement(
        //         'input',
        //         {
        //             type:'submit',
        //             value: 'Post'
        //         }
        //     )
        // )
    }
}

class CommentBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            comments: this.props.comments
        };
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    }

    handleCommentSubmit(comment){
        const comments = this.state.comments;
        comment.id = Date.now();
        const newComments = comments.concat([comment]);
        this.setState({
            comments: newComments
        })
    }

    render(){
        return(
            <div className = "commentBox">
                <Post
                    id = {this.props.post.id}
                    content = {this.props.post.content}
                    user = {this.props.post.user}/>
                    {
                        this.state.comments.map(function (comment) {
                            return (
                                <Comment
                                    key = {comment.id}
                                    id = {comment.id}
                                    content = {comment.content}
                                    user = {comment.user}
                                />
                            )
                        })
                    }
                    <CreateComment
                        onCommentSubmit = {this.handleCommentSubmit}
                    />
            </div>
        )
        // return React.createElement(
        //     'div',
        //     {
        //         className: 'commentBox'
        //     },
        //     React.createElement(Post,{
        //         id: this.props.post.id,
        //         content: this.props.post.content,
        //         usert: this.props.post.user
        //     }),
        //     this.state.comments.map(function (comment) {
        //         return React.createElement(Comment,{
        //             key: comment.id,
        //             id: comment.id,
        //             content: comment.content,
        //             user: comment.user
        //         });
        //     }),
        //     React.createElement(Comment, {
        //         id: this.state.comments[0].id,
        //         content: this.state.comments[0].content,
        //         user: this.state.comments[0].user
        //     }),
        //     React.createElement(CreateComment, {
        //         onCommentSubmit: this.handleCommentSubmit
        //     })
        // )
    }
}
// Post.propTypes = {
//     user: PropTypes.string.isRequired,
//     content: PropTypes.string.isRequired,
//     id: PropTypes
// }

const data = {
    post: {
        id: 123,
        content:
            'What we hope ever to do with ease, we must first learn to do with diligence. - Samuel Johnson',
        user: 'Mark Thomas'
    },
    comments:[
        {
            id: 0,
            user: 'David',
            content: 'such. win.'
        },
        {
            id: 1,
            user: 'Haley',
            content: 'Love it.'
        },
        {
            id: 2,
            user: 'Peter',
            content: 'Who was Samuel Johnson?'
        },
        {
            id: 3,
            user: 'Mitchell',
            content: '@Peter get off Letters and do your homework'
        },
        {
            id: 4,
            user: 'Peter',
            content: '@mitchell ok :P'
        }
    ]
}

const App = React.createElement(
    CommentBox,
    {
        comments: data.comments,
        post: data.post
    }
 )

ReactDOM.render(App,domElement);