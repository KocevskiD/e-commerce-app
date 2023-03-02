console.log("hi there")

const express = require('express');

const bodyParser = require('body-parser');



const app = express();

app.use(bodyParser.urlencoded({extended: true}))// Every route handler to have middleware function be applied

//route handler
app.get('/', (req, res) => {
    res.send(`
        <div>
            <form method="POST">
                <input name="email" placeholder="email">
                <input name="password" placeholder="password">
                <input name="passwordconfirmation" placeholder="email confirmation">
                <button>Sign Up</button>
            </form>
        </div>
    `)
});

// const bodyParser = (req, res, next) => {
//     //get access to email, pass, and pass comfirmation
//     if(req.method === 'POST'){
//         req.on('data', data => {
//             const parsed = data.toString('utf8').split('&');
//             const formData ={};
    
//             for(let pair of parsed){
//                 const [key, value] = pair.split('=')//destructuring
//                 formData[key] = value;
//             }
//             req.body = formData;
//             next();
//         });
//     }else{
//         next();
//     }
// }

app.post('/', (req, res) => {
    console.log(req.body)
    res.send("Account Created")
})

//setting port where to listen to
app.listen(3000, () => {
    console.log('listening')
})