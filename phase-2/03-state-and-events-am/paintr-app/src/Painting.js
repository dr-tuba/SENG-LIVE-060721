import { useState } from 'react';
import Button from './Button'

const Painting = props => {
  
  // set state for "Add to Cart"
  // 'isAdded' is a STATE that we've now created (true / false)
  // 'setAdded' is a FUNCTION that is going to handle updates to the 'isAdded' state. 
  // 'useState(false)' is SETTING the INITAL VALUE for our state. 
  const [isAdded, setAdded] = useState(false)

  // set state for "♡"
  const [isLiked, setLiked] = useState(false)
  
    return (
      <div>
        { isAdded ? ( 
          <>
            <h2>{props.painting.title} Added to Cart</h2>
          </> 
        ) : (
          <>
            <img src={props.painting.image} />
            <h4>
              "{props.painting.title}" by {props.painting.artist.name}
            </h4>
            <p>Year: {props.painting.date}</p>
            <p>
              Dimensions: {props.painting.dimensions.width} in. x {props.painting.dimensions.height} in.
            </p>
          </>
          )
        };
        <Button 
          currentState = {isAdded}
          setFunction = {setAdded}
          falseText = 'Add to Cart'
          trueText = 'Remove from Cart'
         /> 
        <Button 
          currentState = {isLiked}
          setFunction = {setLiked}
          falseText = '♡'
          trueText = '❤️'
         />
      </div>
    );
};

export default Painting;

{/* <button onClick={() => setAdded(!isAdded)}>
{ isAdded ? 'Remove from Cart' : 'Add to Cart'}</button>
<button onClick={() => setLiked(!isLiked)}>
{ isLiked ? '❤️' : '♡'}</button> */}
