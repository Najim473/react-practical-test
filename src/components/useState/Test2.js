
const Test2 = () => {
    const handleClick = () => {
        console.log('Button Clicked');
    }
    return (
        <div>
            {/* using function trigger  */}
            <button onClick={() => handleClick()}>Click me</button>
        </div>
    )
}

export default Test2