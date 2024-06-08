import './Person.css';

const Person = (props) => {
  return (
    <div className='person'>
      <div className='header' style={{backgroundColor: props.color}}>
        <img src={props.image} alt={props.name} />
      </div>
      <div className='content'>
        <h4>{props.name}</h4>
        <h5>{props.position}</h5>
      </div>
    </div>
  )
};

export default Person;