import { ResponsivePie } from "@nivo/pie";
import { pieData as data } from "../../../fakeDatas/mock";
import { useTheme } from "@mui/material";
import { colorShades } from "../../../mui/theme";
import PropTypes from "prop-types";

const Pie = ({ isDashboard = false }) => {
   const theme = useTheme();
   const colors = colorShades(theme.palette.mode);
   return (
      <ResponsivePie
         data={data}
         theme={{
            legends: {
               text: {
                  fontSize: 15,
                  fontWeight: 600,
               },
            },
         }}
         margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
         innerRadius={0.5}
         padAngle={0.7}
         cornerRadius={3}
         activeOuterRadiusOffset={8}
         borderWidth={1}
         borderColor={{
            from: "color",
            modifiers: [["darker", 0.2]],
         }}
         arcLinkLabelsSkipAngle={10}
         arcLinkLabelsTextColor={colors.black[200]}
         arcLinkLabelsThickness={2}
         arcLinkLabelsColor={{ from: "color" }}
         arcLabelsSkipAngle={10}
         arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", 2]],
         }}
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
         legends={
            isDashboard
               ? undefined
               : [
                    {
                       anchor: "bottom",
                       direction: "row",
                       justify: false,
                       translateX: 0,
                       translateY: 56,
                       itemsSpacing: 0,
                       itemWidth: 100,
                       itemHeight: 18,
                       itemTextColor: colors.black[200],
                       itemDirection: "left-to-right",
                       itemOpacity: 1,
                       symbolSize: 18,
                       symbolShape: "circle",
                       effects: [
                          {
                             on: "hover",
                             style: {
                                itemTextColor: colors.black[200],
                             },
                          },
                       ],
                    },
                 ]
         }
      />
   );
};

Pie.propTypes = {
   isDashboard: PropTypes.bool,
};

export default Pie;
