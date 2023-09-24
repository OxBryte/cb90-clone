import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js'
import { Database } from '../../components/data';
import { Box } from '@chakra-ui/react';

ChartJS.register(
    LineElement, CategoryScale, LinearScale, PointElement
)

const LineChartComponent = () => {
    const data = {
        labels: Database.map((data) => data.year),
        datasets: [
            {
                label: 'User Gain',
                data: Database.map((data) => data.userGain),
                borderColor: ['red'],
                backgroundColor: ['rgba(75,192,192,1)'],
                pointBackgroundColor: 'rgba(75,192,192,1)',
                pointBorderColor: 'rgba(220,220,220,1)',
                pointHoverBackgroundColor: 'rgba(220,220,220,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                tension: 0.6
            }, {
                label: 'User Lost',
                data: Database.map((data) => data.userLost),
                borderColor: ['green'],
                backgroundColor: ['rgba(75,192,192,0.2)'],
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
            text: 'Line Chart'
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    };

    return (
        //the box should be at the center of the div and occupy the space
        <Box w='full' bg='white' p='5' borderRadius='lg' boxShadow='md' mt='5' mb='4' mx='auto' maxH='500px'>
            <Line data={data} options={options} />
        </Box>
    );
}

export default LineChartComponent;
