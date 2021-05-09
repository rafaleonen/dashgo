import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react'
import { ApexOptions } from 'apexcharts'
import dynamic from 'next/dynamic'
import { Header, Sidebar } from '../components'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[500]
    },
    axisTicks: {
      color: theme.colors.gray[500]
    },
    categories: [
        '2021-05-08T00:00:00.000Z',
        '2021-05-09T00:00:00.000Z',
        '2021-05-10T00:00:00.000Z',
        '2021-05-11T00:00:00.000Z',
        '2021-05-12T00:00:00.000Z',
        '2021-05-13T00:00:00.000Z',
        '2021-05-14T00:00:00.000Z',
        '2021-05-15T00:00:00.000Z',
    ]
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  }
}

const series = [
  { name: 'series1', data: [31, 120, 10, 28, 40, 60, 18, 109]}
]

export default function Dashboard() {
  return (
    <Flex
      direction="column"
      height="100vh"
    >
      <Header />

      <Flex
        width="100%"
        my="6"
        maxWidth="1480px"
        marginX="auto"
        paddingX="6"
      >
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start">
          <Box
            padding={["6", "8"]}
            bg="gray.800"
            borderRadius="8px"

          >
            <Text fontSize="lg" mb="4">Inscritos da Semana</Text>
            <Chart 
              type="area"
              options={options}
              series={series}
              height={160}
            />
          </Box>
          <Box
            padding="8"
            bg="gray.800"
            borderRadius="8px"

          >
            <Text fontSize="lg" mb="4">Taxa de Abertura</Text>
            <Chart 
              type="area"
              options={options}
              series={series}
              height={160}
            /> 
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}