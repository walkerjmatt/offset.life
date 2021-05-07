// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/pie
import { ResponsivePie } from "@nivo/pie";
import { makeStyles } from "@material-ui/core/styles";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

import styled from "@emotion/styled";

const ChartContainer = styled("div")`
  height: 600px;
  width: 600px;
  text-align: center;
  position: relative;
`;

const margin = { top: 0, right: 80, bottom: 80, left: 80 };

const PieChart = ({ data /* see data tab */, totalValue, centerLabel }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      fontFamily: "consolas, sans-serif",
      textAlign: "center",
      position: "relative",

      [theme.breakpoints.up("md")]: {
        width: 800,
        height: 800,
      },
      [theme.breakpoints.down("md")]: {
        width: 400,
        height: 400,
      },
    },
    overlay: {
      position: "absolute",
      top: 0,
      right: margin.right,
      bottom: margin.bottom,
      left: margin.left,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 96,
      [theme.breakpoints.down("md")]: {
        fontSize: 48,
      },
      color: "#000000 !important",
      textAlign: "center",
      // This is important to preserve the chart interactivity
      pointerEvents: "none",
    },
    totalLabel: {
      fontSize: 24,
      marginTop: -24,
      [theme.breakpoints.down("md")]: {
        fontSize: 16,
        marginTop: -8,
      },
    },
  }));

  const styles = useStyles();
  return (
    <div className={styles.root}>
      <ResponsivePie
        data={data}
        margin={margin}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        sliceLabel={(label) => `${label.value}%`}
        enableRadialLabels={false}
        colors={["#79A888", "#43A047", "#BDBDBD", "#9FE2BF", "#AFE1AF", "#71C671"]}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
        radialLabelsSkipAngle={10}
        radialLabelsTextColor="#333333"
        radialLabelsLinkColor={{ from: "color" }}
        sliceLabelsSkipAngle={10}
        theme={{
          labels: {
            text: {
              fontSize: 16,
            },
          },
        }}
        sliceLabelsTextColor="#333333"
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "ruby",
            },
            id: "dots",
          },
          {
            match: {
              id: "c",
            },
            id: "dots",
          },
          {
            match: {
              id: "go",
            },
            id: "dots",
          },
          {
            match: {
              id: "python",
            },
            id: "dots",
          },
          {
            match: {
              id: "scala",
            },
            id: "lines",
          },
          {
            match: {
              id: "lisp",
            },
            id: "lines",
          },
          {
            match: {
              id: "elixir",
            },
            id: "lines",
          },
          {
            match: {
              id: "javascript",
            },
            id: "lines",
          },
        ]}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 75,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />
      <div className={styles.overlay}>
        <span>{totalValue}</span>
        <span className={styles.totalLabel}>{centerLabel}</span>
      </div>
    </div>
  );
};

export default PieChart;

/*



stories.add('adding a metric in the center using a custom layer', () => (
    <Pie
        {...commonProperties}
        innerRadius={0.8}
        enableSliceLabels={false}
        radialLabel={d => `${d.id} (${d.formattedValue})`}
        activeInnerRadiusOffset={commonProperties.activeOuterRadiusOffset}
        layers={['arcs', 'arcLabels', 'arcLinkLabels', 'legends', CenteredMetric]}
    /


*/
