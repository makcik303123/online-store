import AnimatedNumber from "animated-number-react";

import React from "react";

export const Lib = (
  state = {
    value: 150,
  },
  handleChange = ({ target: { value } }) => {
    setState({ value });
  },
  formatValue = (value) => value.toFixed(2)
) => {
  return (
    <div>
      <input type="number" onChange={handleChange} value={state.value} />
      <AnimatedNumber value={state.value} formatValue={formatValue} />
    </div>
  );
};
