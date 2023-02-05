export function Backpack() {

    return (
        <div className="inner-backpack">
            {Array(24).fill('').map((elem, ind) => (
            
            <div className="slots" key={ind}></div>
            
            ))}
                </div>
    )
}