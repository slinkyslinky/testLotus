import React, { useEffect, useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Table from './components/Table/Table';
import { SERVER_URL } from './variables/config';

import { Config, Member } from './variables/types';

function App() {

  const [config, setConfig] = useState<Config>({
    name: "",
    startDate: "00.00.00",
    startTime: "00:00",
    turnTime: 0,
    goalPrice: 0,
    members: []
  })
  const [members, setMembers] = useState<Member[]>([])
  const [problemMessage, setProblemMessage] = useState<string>('')

  // Запрос Настроек и Участников Торгов

  useEffect(() => {
    fetch(SERVER_URL + "getTrade", {
      method: "GET",
    })
      .then(response => response.json())
      .then(data => setConfig(data))
      .then(() => {


        fetch(SERVER_URL + "getMembers", {
          method: "GET",

        })
          .then(response => response.json())
          .then(data => setMembers(data))
          .catch(() => {
            setProblemMessage("Sorry, problems on Server. Please, retry later ")
          })
      })
      .catch(() => setProblemMessage("Sorry, problems on Server. Please, retry later "))


  }, [])


  if (members.length === 0) {
    return <div className='problem-message'>{problemMessage}</div>
  }


  return (
    <div className="App">
      <div className="container">
        <Header config={config} />
        <Table config={config} members={members} />
      </div>
    </div>
  );
}

export default App;
