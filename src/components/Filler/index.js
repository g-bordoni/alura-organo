import './Filler.css';

const Filler = (props) => {
  const {label, placeholder} = props;

  const onInput = (event) => {
    props.setValue(event.target.value);
  };

  return (
    <div className='filler'>
      <label>{label}</label>
      <input required={props.required} onChange={onInput} value={props.value} placeholder={placeholder}/>
    </div>
  )
}

export default Filler;