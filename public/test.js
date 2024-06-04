const socket = io();

const JSchart = new CanvasJS.Chart('JS-Chart', {
    theme: 'light1',
    title: {
        text: 'Real-Time Data Visualization with Websockets',
    },
    data: [
        {
            type: 'spline',
            dataPoints: [],
        },
    ],
});

const PYchart = new CanvasJS.Chart('PY-Chart', {
    theme: 'light1',
    title: {
        text: 'real time data from python web server',
    },
    data: [
        {
            type: 'spline',
            dataPoints: [],
        },
    ],
});


socket.on('data', (data) => {
    data = JSON.parse(data);
    JSchart.options.data[0].dataPoints.push({ y: data.value });
    JSchart.render();
});

socket.on('pythondata', (data) => {
    console.log("data reciverd");
    data = JSON.parse(data);
    PYchart.options.data[0].dataPoints.push({ y: data.value });
    PYchart.render();
})