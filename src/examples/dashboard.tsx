"use client";
import CircleBullet from "@/components/bullet/CircleBullet";
import CustomCard from "@/components/card/CustomCard";
import ChartJs from "@/components/charts/ChartJs";
import LineChart from "@/components/charts/LineChart";
import LineChartPlainGradient from "@/components/charts/LineChartPlainGradient";
import { ArrowUpIcon, BarChartIcon, CodeSandboxLogoIcon } from "@radix-ui/react-icons";
import { Badge, Box, Button, Card, Flex, Grid, Heading, IconButton, Text } from "@radix-ui/themes";
import Image from "next/image";
import { ReactNode } from "react";

const thirtyDaysLabel = [
  "1 March",
  "2 March",
  "3 March",
  "4 March",
  "5 March",
  "6 March",
  "7 March",
  "8 March",
  "9 March",
  "10 March",
  "11 March",
  "12 March",
  "13 March",
  "14 March",
  "15 March",
  "16 March",
  "17 March",
  "18 March",
  "19 March",
  "20 March",
  "21 March",
  "22 March",
  "23 March",
  "24 March",
  "25 March",
  "26 March",
  "27 March",
  "28 March",
  "29 March",
  "30 March"
];

const SalesChart = () => {
  return (
    <div style={{ height: "300px" }}>
      <LineChart
        data={{
          labels: ["January", "February", "March", "April", "May"],
          datasets: [
            {
              label: "Series 1",
              data: [30, 90, 30, 90, 30],
              tension: 0.3,
              backgroundColor: (context) => {
                const chartArea = context.chart.chartArea;

                if (!chartArea) {
                  return "rgba(241, 104, 20, 0.1)";
                }

                const gradient = context.chart.ctx.createLinearGradient(
                  chartArea.left,
                  chartArea.top,
                  chartArea.left,
                  chartArea.bottom
                );

                gradient.addColorStop(0, "rgba(241, 104, 20, 0.5)");
                gradient.addColorStop(0.3, "rgba(241, 104, 20, 0.0)");
                gradient.addColorStop(1, "rgba(241, 104, 20, 0.0)");

                return gradient;
              },
              borderColor: "rgba(241, 104, 20, 0.5)",
              borderWidth: 3,
              pointHitRadius: 1000,
              pointRadius: 4,
              fill: true
            },
            {
              label: "Series 2",
              data: [90, 30, 90, 30, 90],
              tension: 0.3,
              backgroundColor: (context) => {
                const chartArea = context.chart.chartArea;

                if (!chartArea) {
                  return "rgba(48,164,108, 0.1)";
                }

                const gradient = context.chart.ctx.createLinearGradient(
                  chartArea.left,
                  chartArea.top,
                  chartArea.left,
                  chartArea.bottom
                );

                gradient.addColorStop(0, "rgba(48,164,108, 0.5)");
                gradient.addColorStop(0.3, "rgba(48,164,108, 0.0)");
                gradient.addColorStop(1, "rgba(48,164,108, 0.0)");

                return gradient;
              },
              borderColor: "rgba(48,164,108, 0.5)",
              borderWidth: 3,
              pointHitRadius: 1000,
              pointRadius: 4,
              fill: true
            }
          ]
        }}
        options={{
          responsive: true,
          plugins: {
            legend: {
              display: false
            },
            title: {
              display: false
            }
          },
          scales: {
            y: {
              grid: {
                color: "rgba(0, 0, 0, 0.0)"
              },
              beginAtZero: true,
              max: 120
            },
            x: {
              grid: {
                color: "rgba(0, 0, 0, 0.0)"
              }
            }
          },
          maintainAspectRatio: false
        }}
      />
    </div>
  );
};

const ThirtyDaysCard = ({
  labels,
  data,
  value,
  heading,
  valueDescription,
  borderColor,
  backgroundStartColor,
  backgroundEndColor
}: {
  labels: string[];
  data: number[];
  heading: string;
  value: string;
  valueDescription: ReactNode;
  borderColor?: string;
  backgroundStartColor?: string;
  backgroundEndColor?: string;
}) => {
  return (
    <Card>
      <Flex direction={"column"} gap={"0"}>
        <Flex direction={"column"} gap={"3"} px={"2"} pt={"2"}>
          <Flex align={"center"} justify={"between"}>
            <Heading as='h1' size={"4"} weight={"medium"}>
              {heading}
            </Heading>
            <Badge color='gray'>30 Days</Badge>
          </Flex>
          <Flex gap={"2"} align={"start"} justify={"start"}>
            <Text as='div' size={{ initial: "7", sm: "7", md: "8", lg: "8", xl: "9" }} weight={"bold"}>
              {value}
            </Text>
            {valueDescription}
          </Flex>
        </Flex>
        <div style={{ height: "100px" }}>
          <LineChartPlainGradient
            labels={labels}
            data={data}
            borderColor={borderColor}
            backgroundStartColor={backgroundStartColor}
            backgroundEndColor={backgroundEndColor}
          />
        </div>
      </Flex>
    </Card>
  );
};

const CustomBox = ({
  value,
  totalUp,
  description,
  imageSrc,
  imageWidth,
  imageHeight,
  icon,
  imageMarginBottom
}: {
  value: ReactNode;
  totalUp: ReactNode;
  description: ReactNode;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  icon: ReactNode;
  imageMarginBottom?: string;
}) => {
  return (
    <Box>
      <CustomCard>
        <Flex gap={"3"}>
          <Flex direction={"column"} gap={"4"} flexGrow={"1"} justify={"center"}>
            <Flex align={"center"}>
              <IconButton variant='outline' style={{ marginRight: "1rem" }}>
                {icon}
              </IconButton>
              <ArrowUpIcon color='green' />
              <Text size={{ initial: "2", md: "2" }} weight={"medium"} color='green'>
                {totalUp}
              </Text>
            </Flex>
            <Box>
              <Text size={{ initial: "7", md: "8" }} weight={"bold"} ml={"4"}>
                {value}
              </Text>
            </Box>
            <Text size={"2"} weight={"medium"} color='gray'>
              {description}
            </Text>
          </Flex>
          <Image
            src={imageSrc}
            width={imageWidth}
            height={imageHeight}
            alt='revenue'
            priority={false}
            style={{ marginBottom: imageMarginBottom ?? "-30px", zIndex: 20 }}
          ></Image>
        </Flex>
      </CustomCard>
    </Box>
  );
};

const DashboardExample = () => {
  return (
    <Flex direction={"column"} gap={"5"}>
      <Grid columns={{ initial: "1", lg: "2" }} gap={"5"}>
        <Box>
          <Card>
            <Flex direction={"column"} gap={"5"} px={"4"} py={"4"}>
              <Flex justify={"between"}>
                <Heading as='h1' size={"5"} weight={"medium"}>
                  Sales Summary
                </Heading>
                <Button variant='classic'>Download</Button>
              </Flex>
              <Flex align={"center"} gap={"2"}>
                <Text as='span' size={"3"} weight={"medium"}>
                  Total Sales
                </Text>
                <Text as='span' size={"3"} weight={"medium"}>
                  $1,200
                </Text>
                <Flex align={"center"}>
                  <Text as='span' size={"3"} weight={"medium"} color='green'>
                    75%
                  </Text>
                  <ArrowUpIcon color='green' />
                </Flex>
              </Flex>
              <SalesChart />
            </Flex>
          </Card>
        </Box>
        <Flex direction={"column"} gap={"5"}>
          <Grid columns={{ initial: "1", md: "2" }} gap={"5"}>
            <Box>
              <ThirtyDaysCard
                heading='Impression'
                data={[
                  200, 180, 150, 120, 100, 120, 150, 180, 200, 220, 250, 280, 300, 320, 350, 380, 400, 420, 450, 480,
                  500, 520, 550, 580, 600, 620, 650, 680, 700, 720
                ]}
                labels={thirtyDaysLabel}
                value={"12,150"}
                valueDescription={
                  <>
                    <Text size={"2"} color='red'>
                      4%
                    </Text>
                    <Text size={"2"}>Below Target</Text>
                  </>
                }
              />
            </Box>
            <Box>
              <ThirtyDaysCard
                heading='Leads'
                data={[
                  114, 112, 123, 105, 104, 107, 106, 122, 122, 124, 108, 106, 100, 108, 100, 100, 111, 118, 107, 117,
                  127, 139, 150, 153, 140, 141, 155, 169, 182, 166
                ]}
                labels={thirtyDaysLabel}
                value={"3,800"}
                valueDescription={
                  <>
                    <Text size={"2"} color='red'>
                      6%
                    </Text>
                    <Text size={"2"}>Below Target</Text>
                  </>
                }
                borderColor='rgb(62,214,140)'
                backgroundStartColor='rgba(62,214,140, 0.6)'
                backgroundEndColor='rgba(62,214,140, 0.0)'
              />
            </Box>
          </Grid>
          <Box>
            <ThirtyDaysCard
              heading='Visits'
              data={[
                2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000, 3100, 3200, 3300, 3400, 3500, 3600, 3700,
                3800, 3900, 4000, 4100, 4200, 4300, 4400, 4500, 4600, 4700, 4800, 4900, 5000
              ]}
              labels={thirtyDaysLabel}
              value={"78,291"}
              valueDescription={
                <>
                  <Text size={"1"} color='red'>
                    6%
                  </Text>
                  <Text size={"1"}>Below Target</Text>
                </>
              }
              borderColor='rgb(229,72,77)'
              backgroundStartColor='rgba(229,72,77, 0.6)'
              backgroundEndColor='rgba(229,72,77, 0.0)'
            />
          </Box>
        </Flex>
      </Grid>
      <Grid columns={{ initial: "1", md: "2", lg: "3" }} gap={"5"}>
        <CustomBox
          description='Revenue From Last 30 Days'
          imageHeight={200}
          imageWidth={200}
          imageSrc='/images/illustrations/monkey.png'
          totalUp='12%'
          value='209,920'
          icon={<BarChartIcon />}
        />
        <CustomBox
          description='Shipments From Last 30 Days'
          imageHeight={210}
          imageWidth={200}
          imageSrc='/images/illustrations/ship-1.png'
          totalUp='5%'
          value='4,020'
          icon={<CodeSandboxLogoIcon />}
          imageMarginBottom='-40px'
        />
        <CustomBox
          description='Services From Last 30 Days'
          imageHeight={210}
          imageWidth={200}
          imageSrc='/images/illustrations/builder.png'
          totalUp='2%'
          value='1,000'
          icon={<CodeSandboxLogoIcon />}
          imageMarginBottom='-40px'
        />
      </Grid>
      <Heading as='h1' weight={"bold"} className='text-center'>
        Your Target
      </Heading>
      <Grid columns={{ initial: "1", sm: "2", md: "3", lg: "4" }} gap={"5"} justify={"between"}>
        <ThirtyDaysCardDoughnut
          data={[
            {
              label: "Man",
              value: 100,
              background: "rgba(0,144,255, 0.5)"
            },
            {
              label: "Woman",
              value: 120,
              background: "rgb(54, 162, 235)"
            }
          ]}
          label='Gender'
        />
        <ThirtyDaysCardDoughnut
          data={[
            {
              label: "Under 30",
              value: 110,
              background: "rgb(237,103,22)"
            },
            {
              label: "Over 30",
              value: 110,
              background: "rgba(237,103,22,0.7)"
            }
          ]}
          label='Age'
        />
        <ThirtyDaysCardDoughnut
          data={[
            {
              label: "English",
              value: 140,
              background: "rgb(62,214,140)"
            },
            {
              label: "Indonesia",
              value: 80,
              background: "rgb(62,214,140,0.6)"
            }
          ]}
          label='Language'
        />
        <ThirtyDaysCardDoughnut
          data={[
            {
              label: "Old Customer",
              value: 180,
              background: "rgb(229,72,77)"
            },
            {
              label: "New Customer",
              value: 40,
              background: "rgba(229,72,77,0.5)"
            }
          ]}
          label='Customer Type'
        />
      </Grid>
    </Flex>
  );
};

export default DashboardExample;
const ThirtyDaysCardDoughnut = (props: {
  label: string;
  data: { label: string; value: number; background: string }[];
}) => {
  return (
    <Flex align={"center"} direction={"column"}>
      <Card style={{ maxWidth: "300px", minWidth: "240px" }}>
        <Flex direction={"column"} gap={"3"} align={"center"}>
          <Flex justify={"between"} align={"center"} className='w-100'>
            <Heading as='h2' size={"4"} weight={"medium"}>
              {props.label}
            </Heading>
            <Badge color='gray'>30 Days</Badge>
          </Flex>
          <div style={{ width: "150px", height: "150px" }}>
            <ChartJs
              config={{
                type: "doughnut",
                data: {
                  labels: props.data.map((item) => item.label),
                  datasets: [
                    {
                      label: props.label,
                      data: props.data.map((item) => item.value),
                      backgroundColor: props.data.map((item) => item.background),
                      hoverOffset: 4,
                      borderColor: "rgba(255, 205, 86,0)",
                      spacing: 0
                    }
                  ]
                },
                options: {
                  plugins: {
                    legend: {
                      display: false
                    }
                  },
                  responsive: true,
                  maintainAspectRatio: true,
                  cutout: "70%"
                } as object
              }}
              canvasProps={{ style: { width: "100%" } }}
            />
          </div>
          <Flex direction={"column"} gap={"0"} justify={"start"} className='w-100'>
            {props.data.map((item, index) => {
              return (
                <Flex
                  key={`${index}-${item.label}`}
                  className='hover'
                  py={"1"}
                  px={"2"}
                  justify={"between"}
                  align={"center"}
                  style={{ borderRadius: ".25rem" }}
                >
                  <Flex align={"center"} gap={"2"}>
                    <CircleBullet color={item.background} />
                    <Text size={"2"} weight={"medium"}>
                      {item.label}
                    </Text>
                  </Flex>
                  <Text size={"2"} weight={"medium"}>
                    {item.value}
                  </Text>
                </Flex>
              );
            })}
          </Flex>
        </Flex>
      </Card>
    </Flex>
  );
};
