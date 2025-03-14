const Painting = props => {
  return (
    <div>
      <img src={props.painting.image} />
      <h4>
        "{props.painting.title}" by {props.painting.artist.name}
      </h4>
      <p>Year: {props.painting.date}</p>
      <p>
        Dimensions: {props.painting.dimensions.width} in. x {props.painting.dimensions.height} in.
      </p>

      <button>Add to Cart</button>
      <button>♡</button>
    </div>
  );
};

export default Painting;
