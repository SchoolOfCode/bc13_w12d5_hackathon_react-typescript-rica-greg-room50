import "./styles.css"

type propsObj = {
    handleUserInput: (event : React.ChangeEvent<HTMLInputElement>) => void,
    handleClick: () => void,
    userInput: string
}

export default function Search(props : propsObj){
    const {handleUserInput, handleClick, userInput} = props;
    return <div>
        <input className="input" onChange={handleUserInput} value={userInput}></input>
    <button className="search-button" onClick={handleClick}> Search</button>
    </div>
}