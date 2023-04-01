import React from 'react';
import { FarmUnit } from './components/FarmUnit'

const farms = [
  {title:'arb/usd',tvl:1000},
  {title:'eth/usd',tvl:2000},
  {title:'wbtc/usd',tvl:2500}
]

function App() {
  let units = [];

  farms.forEach(farm => {
    units.push(<FarmUnit title={farm.title} tvl={farm.tvl}/>)
  });

  return (
    <div>
      {units}
    </div>
  )

}

export default App;
