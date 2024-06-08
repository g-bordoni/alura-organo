import { useState } from 'react';
import Filler from '../Filler';
import Dropdown from '../Dropdown';
import Button from '../Button';
import './Form.css'

const Form = (props) => {
  const teams = props.teams;
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [image, setImage] = useState('');
  const [team, setTeam] = useState('')

  const inSaving = (event) => {
    event.preventDefault();
    props.formSubmit({name, position, image, team})
    setName('');
    setPosition('');
    setImage('');
    setTeam('');

  };


  return (
    <section className='form'>
      <form onSubmit={inSaving}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <Filler required={true} label="Nome" placeholder="Digite seu nome" value={name} setValue={setName}/>
        <Filler required={true} label="Cargo" placeholder="Digite seu cargo" value={position} setValue={ v => setPosition(v)}/>
        <Filler required={false} label="Imagem" placeholder="Digite o endereço da imagem" value={image} setValue={setImage}/>
        <Dropdown required={true} label="Time" itens={teams} value={team} setValue={setTeam}/>
        <Button>
          Criar card
        </Button>
      </form>
    </section>
  )
};

export default Form;