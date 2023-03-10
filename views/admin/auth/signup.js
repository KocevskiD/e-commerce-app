const layout = require('../layout')
module.exports = ({req}) => {//we provide obj becouse we dont know how many arguments we will need in the future
    return layout({content: `
    <div>
      Your id is: ${req.session.userId}
      <form method="POST">
        <input name="email" placeholder="email" />
        <input name="password" placeholder="password" />
        <input name="passwordConfirmation" placeholder="password confirmation" />
        <button>Sign Up</button>
      </form>
    </div>
  `})
}