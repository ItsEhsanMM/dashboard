import { ResponsiveBar } from "@nivo/bar";
import { barData as data } from "../../../fakeDatas/mock";
import { useTheme } from "@mui/material";
import { colorShades } from "../../../mui/theme";
import PropTypes from "prop-types";

const Bar = ({ isDashboard }) => {
   const them = useTheme();
   const colors = colorShades(them.palette.mode);

   return (
      <ResponsiveBar
         theme={{
            axis: {
               legend: {
                  text: {
                     fill: colors.black[200],
                     fontSize: 15,
                     fontWeight: 700,
                  },
               },
               ticks: {
                  line: {
                     stroke: colors.black[200],
                  },
                  text: {
                     fill: colors.black[200],
                  },
               },
               domain: {
                  line: {
                     stroke: colors.black[200],
                  },
               },
            },
            legends: {
               text: {
                  fill: colors.black[100],
               },
            },
            markers: {
               textColor: colors.black[100],
            },
         }}
         data={data}
         keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
         indexBy="country"
         margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
         padding={0.3}
         valueScale={{ type: "linear" }}
         indexScale={{ type: "band", round: true }}
         colors={{ scheme: "nivo" }}
         defs={[
            {
               id: "dots",
               type: "patternDots",
               background: "inherit",
               color: "#38bcb2",
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
         borderColor={{
            from: "color",
            modifiers: [["darker", 1.6]],
         }}
         axisTop={null}
         axisRight={null}
         axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard ? undefined : "country",
            legendPosition: "middle",
            legendOffset: 32,
         }}
         axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard ? undefined : "food",
            legendPosition: "middle",
            legendOffset: -40,
         }}
         labelSkipWidth={12}
         labelSkipHeight={12}
         labelTextColor={{
            from: "color",
            modifiers: [["darker", 1.6]],
         }}
         legends={[
            {
               dataFrom: "keys",
               anchor: "bottom-right",
               direction: "column",
               justify: false,
               translateX: 120,
               translateY: 0,
               itemsSpacing: 2,
               itemWidth: 100,
               itemHeight: 20,
               itemDirection: "left-to-right",
               itemOpacity: 0.85,
               symbolSize: 20,
               effects: [
                  {
                     on: "hover",
                     style: {
                        itemOpacity: 1,
                     },
                  },
               ],
            },
         ]}
         role="application"
         ariaLabel="Nivo bar chart demo"
         barAriaLabel={(e) =>
            e.id + ": " + e.formattedValue + " in country: " + e.indexValue
         }
      />
   );
};

Bar.propTypes = {
   isDashboard: PropTypes.bool,
};

export default Bar;
