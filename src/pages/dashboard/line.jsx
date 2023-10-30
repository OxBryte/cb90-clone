import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js'
import { Box } from '@chakra-ui/react';

ChartJS.register(
    LineElement, CategoryScale, LinearScale, PointElement
)


const LineChartComponent = ({ performanceData }) => {
    const profitLine = performanceData;
    console.log(profitLine, performanceData, 'hee');

    // Extract dates and values
    const dates = profitLine.map(dataEntry => dataEntry[0]);
    const values = profitLine.map(entry => entry[2]);
    console.log("date" + dates, "value" + values)
    const data = {
        labels: dates,
        datasets: [
            {
                label: 'Profit',
                data: values,
                borderColor: 'blue',
                backgroundColor: 'rgba(0, 123, 255, 0.5)',
                fill: false,
            }
        ]
    };

    // const data = {
    //     labels: '',
    //     datasets: [
    //         {
    //             label: 'User Gain',
    //             // data: performanceData.map((data) => data.price_line[3]),
    //             borderColor: ['green'],
    //             backgroundColor: ['rgba(75,192,192,1)'],
    //             pointBackgroundColor: 'rgba(75,192,192,1)',
    //             pointBorderColor: 'rgba(220,220,220,1)',
    //             pointHoverBackgroundColor: 'rgba(220,220,220,1)',
    //             pointHoverBorderColor: 'rgba(220,220,220,1)',
    //             tension: 0.6
    //         }
    //     ]
    // };

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
            <Line data={data} options={options} w={chartWidth} h={chartHeight} />
        </Box>
    );
}

export default LineChartComponent;
