import { useEffect, useState } from 'react';
import './App.css';
import { DeviceList } from './components/device-list/DeviceList';
import { MainContainer } from './components/main-container/MainContainer';

function App() {

  const [items, setItems] = useState([])

  useState(()=>{
    setItems([
    {
      "name": "Device List",
      "on": true,
      "contents": (<DeviceList></DeviceList>)
    },
    {
      "name": "Device Info",
      "on": false,
      "contents": "infoContent"
    }
  ])
  }, null)

  return (
      <MainContainer items={items}>
      </MainContainer>
  );
}

export default App;
