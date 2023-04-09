const showSignUp = () => {
    document.getElementById('loginForm').style.display = "none"
    document.getElementById('signUpForm').style.display = "flex"
    /* document.getElementById('loginImg').style.maxHeight = "15rem" */
    document.getElementById('signUpPrompt').innerHTML = "Already have an account? <a onclick='hideSignUp()' href='#'>Sign in</a>"
    console.log('the function has ran')
}

const hideSignUp = () => {
    document.getElementById('loginForm').style.display = "flex"
    document.getElementById('signUpForm').style.display = "none"
    /* document.getElementById('loginImg').style.maxHeight = "18rem" */
    document.getElementById('signUpPrompt').innerHTML = "No account? <a onclick='showSignUp()' href='#'>Apply for MDT access</a>"
    console.log('the function has ran')
}