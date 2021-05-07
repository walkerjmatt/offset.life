export const roundToTwo = (num) => {
  return +(Math.round(num + "e+2") + "e-2");
};

export const getFootprint = (values) => {
  const {
    diet,
    homeEnergy,
    homePeople,
    homeSize,
    longFlights,
    milesDriven,
    ownCar,
    shopHabit,
    shortFlights,
  } = values;
  const baseLine = {
    dietTotal: 3.44 + parseFloat(diet),
    goodsTotal: 3.24 + parseFloat(shopHabit),
    grandTotal: 19.51,
    homeTotal: 5.58 + parseFloat(homePeople) + parseFloat(homeSize),
    servicesTotal: 2.94 + parseFloat(homeEnergy),
    transportTotal: 4.31 + +parseFloat(milesDriven) + parseFloat(ownCar),
  };
  const final = {
    housing: baseLine.dietTotal,
    spending: baseLine.goodsTotal,
    mobility: baseLine.transportTotal,
    flights: parseFloat(shortFlights + longFlights),
    diet: baseLine.dietTotal,
    services: baseLine.servicesTotal,
  };

  return final;
};
