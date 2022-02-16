import './App.css';
import { DeviceList } from './components/device-list/DeviceList';
import { MainContainer } from './components/main-container/MainContainer';

function App() {
  const items = [
    {
      "name": "Device List",
      "on": true,
      "contents": (
        <DeviceList></DeviceList>
      )
    },
    {
      "name": "Device Info",
      "on": false,
      "contents": "Hello Info"
    }
  ];

  return (
      <MainContainer items={items}>
      </MainContainer>
  );
}

export default App;
