import React, { useState, useMemo } from 'react';


const BMICalculator = () => {
  const [weight, setWeight] = useState(72);
  const [height, setHeight] = useState(186);

  
  const bmi = useMemo(() => {
    const heightInMeters = height / 100;
    return (weight / (heightInMeters * heightInMeters)).toFixed(1);
  }, [weight, height]);

  return (
    <div className="container">
      <div className="calculator">
        <h1 className="title">Project 7: BMI CALCULATOR</h1>

        <div className="input-group">
          <label htmlFor="weight">Kilo: {weight} kg</label>
          <input
            id="weight"
            type="range"
            min="40"
            max="150"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
          />
        </div>

 
        <div className="input-group">
          <label htmlFor="height">Boy: {height} cm</label>
          <input
            id="height"
            type="range"
            min="100"
            max="220"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
          />
        </div>

        <div className="result">
          <span>BMI:</span>
          <div className="bmi-value">{bmi}</div>
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;
