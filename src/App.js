import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigationbar } from './components/Layout/Navigationbar';
import { Home } from './containers/Home/Home';
import Properties from './containers/Properties/Properties';
import { DataContext } from './contexts/DataContext';
import PropertyDetails from './components/Properties/PropertyDetails';
import Dashboard from './containers/Dashboard/Dashboard';
import { LookingToSell } from './containers/Sell/LookingToSell';

function App() {
  return (
    <>
      <DataContext>
        <BrowserRouter>
          <Navigationbar />
          <main className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/properties" element={<Properties />} />
              <Route
                path="/properties/:propertyId"
                element={<PropertyDetails />}
              />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/sell" element={<LookingToSell />} />
            </Routes>
          </main>
        </BrowserRouter>
      </DataContext>
    </>
  );
}

export default App;
