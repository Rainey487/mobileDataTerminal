const showSignUp = () => {
    document.getElementById('loginForm').style.display = "none"
    document.getElementById('signUpForm').style.display = "flex"
    /* document.getElementById('loginImg').style.maxHeight = "15rem" */
    document.getElementById('signUpPrompt').innerHTML = "Already have an account? <a onclick='hideSignUp()' href='#'>Sign in</a>"
    document.title = "Community Portal Sign Up"
    console.log('the function has ran')
}

const hideSignUp = () => {
    document.getElementById('loginForm').style.display = "flex"
    document.getElementById('signUpForm').style.display = "none"
    /* document.getElementById('loginImg').style.maxHeight = "18rem" */
    document.getElementById('signUpPrompt').innerHTML = "Need an account? <a onclick='showSignUp()' href='#'>Sign up</a>"
    document.title = "Community Portal Sign In"
    console.log('the function has ran')
}