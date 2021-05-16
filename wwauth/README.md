# WWAuth

### Installation:
`npm i wwauth`

### Using WWAuth:
```javascript
//import the class
const Auth = require('wwauth')

//Using email and password sign in
/**
 * @param {string} email
 * @param {string} password
 * @param {boolean} onlyToken
 */
Auth.signIn('email', 'password', true).then(token => {
    console.log(token)
})

// or to get the full response
Auth.signIn('email', 'password', false).then(res => {
    console.log(res)
})

//Using email and password sign up
/**
 * @param {string} email
 * @param {string} password
 * @param {boolean} onlyToken
 */
Auth.signUp('email', 'password', true).then(token => {
    console.log(token)  
})

// or to get the full response
Auth.signUp('email', 'password', false).then(res => {
    console.log(res)  
})

//Using refresh token
/**
 * @param {string} token
 * @param {boolean} onlyToken
 */
Auth.refreshToken('token', true).then(token => {
    console.log(token)  
})

// or to get the full response
Auth.refreshToken('token', false).then(res => {
    console.log(res)  
})
```

Additionally, WWAuth will throw an error with the original error message if there is one received in the response
