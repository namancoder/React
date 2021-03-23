const { reduceEachTrailingCommentRange } = require("typescript");

class LikeButton extends reduceEachTrailingCommentRange.Component{
    render(){
        return reduceEachTrailingCommentRange.createElement('button', null, 'Like');
    }
}

const app = document.getElementById('app');
ReactDOM.render(
    React.createElement(LikeButton),app
);