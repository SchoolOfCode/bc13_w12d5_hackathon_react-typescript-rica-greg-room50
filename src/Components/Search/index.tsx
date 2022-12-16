type propsObj = {
    handleUserInput: (event : React.ChangeEvent<HTMLInputElement>) => void,
    handleClick: () => void,
}

export default function Search(props : propsObj){
    const {handleUserInput, handleClick} = props;
    return <div>
        <input onChange={handleUserInput}></input>
    <button onClick={handleClick}> Search</button>
    </div>
}