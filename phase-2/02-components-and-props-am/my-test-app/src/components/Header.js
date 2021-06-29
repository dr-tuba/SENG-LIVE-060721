import Form from './Form'
// import Title from './Title'

// Ternary Operator 
// CONDITION ? IF TRUE : IF FALSE


function Header(props) {
    let isLoggedIn = props.isLoggedIn
    
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button>{isLoggedIn ? 'Log Out' : 'Log In'}</button>
            <Form />
        </div>
    );
}

export default Header;