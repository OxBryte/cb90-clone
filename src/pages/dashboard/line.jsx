import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js'
import { Box } from '@chakra-ui/react';
import { Database } from '../../components/data'

ChartJS.register(
    LineElement, CategoryScale, LinearScale, PointElement
)


const LineChartComponent = ({ performanceData }) => {
    // const profitLine = performanceData;
    // console.log(profitLine, 'hee');

    // // Extract dates and values
    // const dates = profitLine[0].map(entry => entry[0]);;
    // const values = profitLine;



    const data = {
        labels: Database.map((data) => data.year),
        datasets: [
            {
                label: 'User Gain',
                data: Database.map((data) => data.userGain),
                borderColor: ['green'],
                backgroundColor: ['rgba(75,192,192,1)'],
                pointBackgroundColor: 'rgba(75,192,192,1)',
                pointBorderColor: 'rgba(220,220,220,1)',
                pointHoverBackgroundColor: 'rgba(220,220,220,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                tension: 0.6
            }
        ]
    };

    const options = {
        title: {
            display: true,
            text: 'Profit Line per Bot'
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    const chartHeight = 200;
    const chartWidth = 400;

    return (
        <Box w={chartWidth} h={chartHeight} bg='white' p='5' borderRadius='lg' boxShadow='md' mt='5' mx='auto'>
            <Line data={data} options={options}  />
        </Box>
    );
}

export default LineChartComponent;
