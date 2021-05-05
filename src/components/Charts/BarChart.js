// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/bar
import { ResponsiveBar } from "@nivo/bar";
import { makeStyles } from "@material-ui/core/styles";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

import styled from "@emotion/styled";

const ChartContainer = styled("div")`
  height: 400px;
  width: 800px;
`;

const BarChart = ({ data /* see data tab */ }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      [theme.breakpoints.up("md")]: {
        width: 800,
        height: 400,
      },
      [theme.breakpoints.down("md")]: {
        width: 400,
        height: 400,
      },
    },
  }));

  const styles = useStyles();

  return (
    <div className={styles.root}>
      <ResponsiveBar
        data={data}
        keys={["tons"]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={({ id, data }) => data[`${id}Color`]}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "#00701A",
            color: "inherit",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "sandwich",
            },
            id: "lines",
          },
        ]}
        borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "tons of C02",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </div>
  );
};

export default BarChart;
