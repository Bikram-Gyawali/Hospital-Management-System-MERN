const returnChartAxis = (data) => {
    let resultArray = [];
    for (let date in data) {
        let axis = {
            x: date,
            y: data[date]
        }
        resultArray.push(axis);
    }

    return resultArray;
}

export default returnChartAxis;