import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import BecomeACCAIn18Months from './components/BecomeACCAIn18Months/BecomeACCAIn18Months';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import ACCAEligibility from './components/ACCAEligibility/ACCAEligibility';
import WhatWillYouLearnInACCA from './components/WhatWillYouLearnInACCA/WhatWillYouLearnInACCA';
import PlacementAssistance from './components/PlacementAssistance/PlacementAssistance';
import IndigoLearn from './components/IndigoLearn/IndigoLearn';

function App() {
  return (
    <div className="App">
      <Header />
      <BecomeACCAIn18Months />
      <WhyChooseUs />
      <ACCAEligibility />
      <WhatWillYouLearnInACCA />
      <PlacementAssistance />
      <IndigoLearn />
    </div>
  );
}

export default App;