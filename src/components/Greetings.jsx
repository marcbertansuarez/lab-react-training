const Greetings = (props) => {
    
    const { lang, children } = props;

    let greeting 
    if(lang === 'de') {
        greeting = 'Hallo'
    } else if (lang === 'fr') {
        greeting = 'Bonjour'
    }
    
    return (
        <div>
            <h3>{greeting} {children}</h3>
        </div>
    )
}

export default Greetings;