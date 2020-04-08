import React from 'react';

function Card (props) {
    console.log(props);
    return (
        <div>
<div> {props.name} </div>
<div> {props.heroku} </div>
<div> {props.github} </div>
<img src={props.image} />

</div>
    )
  
}
export default Card;
