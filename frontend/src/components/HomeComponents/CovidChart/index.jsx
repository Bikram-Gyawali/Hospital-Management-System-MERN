import { colors } from "colors"
import Layout from "components/GlobalComponents/Layout"
import Section from "components/GlobalComponents/Section"
import Button from "components/GlobalComponents/Button"
import { fonts } from "fonts"
import styled from "styled-components"
import { Line } from "react-chartjs-2";
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { axiosRequest } from "utils/axiosRequest"
import returnChartAxis from "utils/returnChartAxis"
const CovidChartContainer = styled.div`
    text-align: center;
`
const Title = styled.div`
    font-weight: ${fonts.bold};
    color: ${colors.darkBrown};
    font-size: 48px;
    max-width: 768px;
    margin: auto;
    margin-bottom: 25px;
`
const Description = styled.div`
    color: ${colors.lightBrown};
    font-size: 22px;
     max-width: 768px;
    margin: auto;
    margin-bottom: 60px;
`

const MainContent = styled.div`
    margin-bottom: 30px;
`
const StyledLink = styled(Link)`
    color: ${colors.white};
    width: 100%;
    height: 100%;
`

const URL = `https://disease.sh/v3/covid-19/historical/all?lastdays=90`

const options = {
    scales: {
        xAxes: [
            {
                type: "time",
                time: {
                    format: "MM/DD/YY",
                    tooltipFormat: "ll",
                },
            },
        ],
        yAxes: [
            {
                gridLines: {
                    display: false,
                },
            },
        ],

    }
}

const Index = () => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({ cases: {}, deaths: {}, recovered: {} });
    const [error, setError] = useState("");
    const [labels, setLabels] = useState([]);

    console.log(loading, error)

    useEffect(() => {
        const getCovidData = async (url, options) => {
            const [datas, error] = await axiosRequest(url, options);
            setLoading(false);
            
            if (datas) {

                let labelsArray = []
                for (let date in datas.data.cases) {
                    labelsArray.push(date)
                }

                setLabels(labelsArray);

                console.log(datas.data)
                setData({ ...datas.data })
                return;
            }
            alert(error.message)
            setError(error.message)
        }
        getCovidData(URL, {});
    }, [])

    return (
        <CovidChartContainer>
            <Layout>
                <Section>
                    <Title>Covid details Of all countries within past 3 months</Title>
                    <Description>Covid cases are increasing rapidly. So is our service. So do checkout hospitals providing great covid care.</Description>
                    <MainContent>
                        <Line
                            data={{
                                type: 'line',
                                labels,
                                options,
                                datasets: [
                                    {
                                        borderWidth: 5,
                                        label: "Total Cases",
                                        backgroundColor: colors.darkBrown,
                                        borderColor: colors.darkBrown,
                                        data: [...returnChartAxis(data.cases)],
                                        pointRadius: 1
                                    },
                                    {
                                        borderWidth: 5,
                                        label: "Total Recovered",
                                        backgroundColor: colors.primary,
                                        borderColor: colors.primary,
                                        data: [...returnChartAxis(data.recovered)],
                                        pointRadius: 1
                                    },
                                    {
                                        borderWidth: 5,
                                        label: "Total Deaths",
                                        backgroundColor: "#82322f",
                                        borderColor: "#82322f",
                                        data: [...returnChartAxis(data.deaths)],
                                        pointRadius: 1
                                    }
                                ],


                            }}
                        />
                    </MainContent>
                    <Button>
                        <StyledLink to="/covid19">
                            Click Here To See Covid Details
                        </StyledLink>
                    </Button>
                </Section>
            </Layout>
        </CovidChartContainer>
    )
}

export default Index
