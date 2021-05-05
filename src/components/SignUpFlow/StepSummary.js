import React from "react";
//import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import SectionHeader from "components/SectionHeader";
import PieChart from "components/Charts/PieChart";
import BarChart from "components/Charts/BarChart";
import styled from "@emotion/styled";
import { mockPieChartData, mockBarChartData } from "util/mockdata";

function StepSummary(props) {
  const { formik, onNext } = props;
  const ChartTitle = styled("div")`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 8px;
  `;

  const ChartParentContainer = styled("div")`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `;

  const useStyles = makeStyles({
    root: {
      marginBottom: "0px",
    },
    cardClasses: {
      marginTop: "16px",
    },
  });
  const buttonClasses = useStyles();

  const mockTest = {
    diet: "0.0",
    homeEnergy: "0.0",
    homePeople: "4.4",
    homeSize: "1.8",
    longFlights: "2.0",
    milesDriven: "1.9",
    ownCar: "1.0",
    shopHabit: "6.5",
    shortFlights: "1.4",
  };
  //formik.values = mockTest;

  /*

select which you use the most often: car, bus, train, carpool, bike, wal
  */

  const test = {
    homeEnergy: "0.0",
    homePeople: "-3.3",
    homeSize: "-1.6",
    shopHabit: "3.0",
  };

  const final = {
    housing:
      parseFloat(formik.values.homePeople) +
      parseFloat(formik.values.homeEnergy) +
      parseFloat(formik.values.homeSize),
    spending: parseFloat("1.5"),
    mobility:
      parseFloat(formik.values.ownCar) + parseFloat(formik.values.milesDriven),
    flights:
      parseFloat(formik.values.shortFlights) +
      parseFloat(formik.values.longFlights),
    diet: parseFloat(formik.values.diet),
  };

  const total =
    final.housing +
    final.spending +
    final.mobility +
    final.flights +
    final.diet;
  const percentages = {
    housing: (final.housing / total) * 100,
    spending: (final.spending / total) * 100,
    mobility: (final.mobility / total) * 100,
    flights: (final.flights / total) * 100,
    diet: (final.diet / total) * 100,
  };

  console.log("percentages: ", percentages);
  console.log("final: ", final);

  const testBarData = [
    {
      country: "You",
      housing: final.housing,
      housingColor: "hsl(323, 70%, 50%)",
      spending: final.spending,
      spendingColor: "hsl(129, 70%, 50%)",
      mobility: final.mobility,
      mobilityColor: "hsl(252, 70%, 50%)",
      flights: final.flights,
      flightsColor: "hsl(147, 70%, 50%)",
      diet: final.diet,
      dietColor: "hsl(304, 70%, 50%)",
    },
    {
      country: "USA",
      housing: 0.4,
      housingColor: "hsl(170, 70%, 50%)",
      spending: 0.5,
      spendingColor: "hsl(33, 70%, 50%)",
      mobility: 1.4,
      mobilityColor: "hsl(315, 70%, 50%)",
      flights: 3.5,
      flightsColor: "hsl(265, 70%, 50%)",
      diet: 4.2,
      dietColor: "hsl(85, 70%, 50%)",
    },
    {
      country: "Global",
      housing: 0.3,
      housingColor: "hsl(200, 70%, 50%)",
      spending: 1.3,
      spendingColor: "hsl(289, 70%, 50%)",
      mobility: 2.4,
      mobilityColor: "hsl(61, 70%, 50%)",
      flights: 5.1,
      flightsColor: "hsl(62, 70%, 50%)",
      diet: 2.0,
      dietColor: "hsl(206, 70%, 50%)",
    },
  ];

  const globalAverage = 4.9;
  const indiaAverage = 2.2;
  const UKAverage = 8.9;
  const USAverage = 19.5;

  const timesGlobalAverage = Math.round(total / 12 / (globalAverage / 12));

  const testTotalBarData = [
    {
      country: "USA",
      tons: USAverage,
      tonsColor: "#BDBDBD",
    },
    {
      country: "Global",
      tons: globalAverage,
      tonsColor: "#BDBDBD",
    },
    {
      country: "You",
      tons: Math.round(total),
      tonsColor: "#43A047",
    },
    {
      country: "UK",
      tons: UKAverage,
      tonsColor: "#BDBDBD",
    },
    {
      country: "India",
      tons: indiaAverage,
      tonsColor: "#BDBDBD",
    },
  ];

  const testPieData = [
    {
      id: "diet",
      label: "diet",
      value: Math.round(percentages.diet),
      color: "#00701A",
    },
    {
      id: "flights",
      label: "flights",
      value: Math.round(percentages.flights),
      color: "hsl(70, 70%, 50%)",
    },
    {
      id: "mobility",
      label: "mobility",
      value: Math.round(percentages.mobility),
      color: "hsl(171, 70%, 50%)",
    },
    {
      id: "housing",
      label: "housing",
      value: Math.round(percentages.housing),
      color: "hsl(171, 70%, 50%)",
    },
    {
      id: "spending",
      label: "spending",
      value: Math.round(percentages.spending),
      color: "hsl(171, 70%, 50%)",
    },
  ];

  console.log("values: ", formik.values);
  return (
    <>
      <Container>
        <SectionHeader
          title={`Your carbon footprint is ${Math.round(
            total / 12
          )} tons of CO₂ per month.`}
          subtitle={`(${timesGlobalAverage} times the world average)`}
          size={4}
          textAlign="center"
        />
        <ChartParentContainer>
          <Card>
            <ChartTitle>
              <Typography
                variant="h6"
                paragraph={true}
                className={buttonClasses.root}
              >
                <strong>Your Emissions Breakdown</strong>
              </Typography>
            </ChartTitle>
            <PieChart
              data={testPieData}
              totalValue={Math.round(total)}
              centerLabel="kg/CO2"
            />
          </Card>
          <Card className={buttonClasses.cardClasses}>
            <ChartTitle>
              <Typography
                variant="h6"
                paragraph={true}
                className={buttonClasses.root}
              >
                <strong>How your annual emissions compare</strong>
              </Typography>
            </ChartTitle>
            <BarChart data={testTotalBarData} />
          </Card>
        </ChartParentContainer>
      </Container>
    </>
  );
}

export default StepSummary;
