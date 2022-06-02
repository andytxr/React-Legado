import React from "react";

export default props => {

    return(
    
        <div>
            <h1>Família</h1>
            {React.Children.map(props.children, child=>{
                return React.cloneElement(child, {...props})
            })}
        </div>

    )

}