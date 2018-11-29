import React from 'react';
import Feature from './Feature.jsx';

const Features = ({features}) => {
  return (
    <div>
      <div className="features">
        {features && features.map((feature) => <Feature feature={feature}/>)}
      </div>
    </div>
  )
}


export default Features;

