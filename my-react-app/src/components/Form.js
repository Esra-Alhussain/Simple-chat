function Form({ textInputValue,triggerAskButton, triggerInputCange}){
    //pass the propert and link it to 

    return(
        <>
            <input value={textInputValue} onChange={triggerInputCange}/>
            <button onClick={triggerAskButton}>Ask</button>
        </>
    );
}

export default Form;

