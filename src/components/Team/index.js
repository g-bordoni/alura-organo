import './Team.css';
import Person from '../Person';

const Team = (props) => {
  return (
    (props.people.length === 0) ? null :
    <section className='team' style={{backgroundColor: props.secondColor}}>
      <h3 style={{borderColor: props.color}}>{props.name}</h3>
      <div className='people'>
        {props.people.map( person => <Person key={person.name} name={person.name} position={person.position} image={person.image} color={props.color} />)}
      </div>
    </section>
  )
};

export default Team;
