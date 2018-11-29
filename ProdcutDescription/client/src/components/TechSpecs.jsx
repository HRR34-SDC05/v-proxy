import React from 'react';
import TechSpec from './TechSpec.jsx';

const TechSpecs = ({techSpecs}) => {
  return (
    <div>
      <div className="features">
        {techSpecs && techSpecs.map(techSpec => <TechSpec techSpec={techSpec} />)}
      </div>
    </div>
  )
}

export default TechSpecs;

