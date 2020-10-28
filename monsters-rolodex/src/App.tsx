import React, { useState, useEffect } from 'react'
import { CardList } from './components/CardList'
import { SearchField } from './components/SearchField';
import './App.css';

import { Monster } from '../typings/index'

function App() {
  const [monsters, setMonsters] = useState([])
  const [searchField, setSearchField] = useState('')

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      setMonsters(data)
    }

    fetchUser()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchField(e.target.value)
  }

  const filteredMonsters = monsters.filter((monster: Monster) => monster.name.toLowerCase().includes(searchField.toLowerCase()))

  return (
    <div className="App">
      <SearchField handleChange={handleChange}/>
      <CardList monsters={filteredMonsters}/>
    </div>
  );
}

export default App;
