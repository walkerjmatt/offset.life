export const initialValues = {
  longFlights: "",
  shortFlights: "",
  diet: "",
  ownCar: "",
  milesDriven: "",
  shopHabit: "",
  homeSize: "",
  homePeople: "",
  homeEnergy: "",
};

export const footprintTonValues = {
  longFlights: ["0.0", "2.33", "4.66", "6.99", "9.32", "11.65"],
  shortFlights: ["0.0", "0.46", "0.912", "1.36", "1.84", "2.28"],
  diet: ["1.3", "-0", "-0.43", "-1.0", "-1.75", "-2.0"],
  ownCar: ["4.3", "-1.4", "0", "-2.0"],
  milesDriven: ["-2.02", "0.0", "1.13", "5.32"],
  shopHabit: ["-2.0", "0.0", "2.1", "3.7"],
  homeSize: ["-1.3", "-0.98", "0.0", "0.94", "1.44"],
  homePeople: ["-1.0", "-0.5", "0.5", "1", "1.5"],
  homeEnergy: ["0.0", "-0.78", "-1.57"],
};

/*

Short distances (50 miles) -> -2.02088071621
(150 miles) -> no change
Work commute (200 miles) -> +1.12535564743
Every day (400 miles) -> +5.32033746561


dietTotal: 3.437745532923881
goodsTotal: 3.238605909169805
grandTotal: 19.510677162046903
homeTotal: 5.58406785113
servicesTotal: 2.938512537063661
transportTotal: 4.311745331759629


*/
