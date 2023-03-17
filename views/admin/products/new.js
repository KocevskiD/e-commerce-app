const layout = require('../layout');
const {getError} = require('../../helpers');
module.exports = ({errors}) => {
    return layout({
        content: `
            <form method="POST">
                <input placeholder="Title" name="title"/>
                <input placeholder="Price" name="price"/>
                <input name="image" type="file"/>
                <button>Submit</button>
            <form>
        `
    })
}