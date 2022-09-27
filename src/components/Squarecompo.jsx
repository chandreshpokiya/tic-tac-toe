function Squarecompo({className, state, onClick}) {
  const classes = className ? `square ${className}` : `square`
  return (<span className={classes} onClick={onClick}>
    {state}
  </span>);
}

export default Squarecompo;
