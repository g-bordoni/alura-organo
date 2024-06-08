import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {

  const teams = [
    {
      name: 'Programação',
      color: '#57C278',
      secondColor: '#D9F7E9',
    },  
    {
      name: 'Front-End',
      color: '#82CFFA',
      secondColor: '#E8F8FF',
    },
    {
      name: 'Data Sciense',
      color: '#A6D157',
      secondColor: '#F0F8E2',
    },
    {
      name: 'Devops',
      color: '#E06B69',
      secondColor: '#FDE7E8',
    },
    {
      name: 'UX e Design',
      color: '#D86EBF',
      secondColor: '#FAE5F5',
    },
    {
      name: 'Mobile',
      color: '#FEBA05',
      secondColor: '#FFF5D9',
    },
    {
      name: 'Inovação e Gestão',
      color: '#FF8A29',
      secondColor: '#FFEEDF',
    }
  ];

  const [people, setPeople] = useState([]);

  const newPerson = (person) => {
    debugger;
    setPeople([...people, person])
  };

  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(team => team.name)} formSubmit={p => newPerson(p)}/>
      {teams.map(team => <Team key={team.name} name={team.name} color={team.color} secondColor={team.secondColor} people={people.filter(person => person.team === team.name)}/>)}
      <Footer />
    </div>
  );
}

export default App;
