import React from 'react';
import Chart from 'react-google-charts';

export default function BarChart(props){

    return(
        <>
        <div className="container mt-5">
            <h1 className="text-center mb-5">Reliane Stock Price Graph</h1>
            <div className="card">
                <Chart
                    width={900}
                    height={'300px'}
                    chartType="Bar"
                    loader={
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border text-secondary" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    }
                    data={[
                        ['Reliance', 'Stock Price'],
                        ['04/08/2021', 1000],
                        ['03/08/2021', 900 ],
                        ['02/08/2021', 1500 ],
                        ['01/08/2021', 2100],
                        ['31/07/2021', 999],
                        ['30/07/2021', 1870],
                        ['29/07/2021', 1250],
                        ['28/07/2021', 1500],
                    ]}
                    options={{
                        colors: ['grey'],
                                    
                    }}
                />
                </div>
         </div>
        </>
    );
}