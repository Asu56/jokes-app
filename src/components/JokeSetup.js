import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Article from "./Article";

const JokeSetup = () => {
    const [joke, setJoke] = useState('');
    const [previousJokes, setPreviousJokes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {

        setIsLoading(true);

        const url = 'https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'caa3b28d5amshde8e60e0b7d0cecp1eaa0ajsn6a43490d6cb6',
                'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            const joke = result[0].joke; // Extract the joke from the response

            setPreviousJokes(prevJokes => [...prevJokes, joke]); // Add the current joke to the previous jokes list
            setJoke(joke);
        } catch (error) {
            console.error(error);
        }
        setIsLoading(false);
    }

    function handleGetAnotherJoke() {
        fetchData();
    }

    function handleGoBack() {
        const lastJokeIndex = previousJokes.length - 1;
        const previousJoke = previousJokes[lastJokeIndex];
        const updatedPreviousJokes = previousJokes.slice(0, lastJokeIndex);

        setJoke(previousJoke);
        setPreviousJokes(updatedPreviousJokes);
    }

    return (
        <Container className="pt-5">
            <Row className="content py-5 px-2 px-md-5">
                <Col className="align-middle">
                    <div className="text-center pb-3 ">
                        <h1 className="h1 text-white">Joke of the Day</h1>
                    </div>
                    {isLoading ? (<Article />) : (<Card body className="px-4 py-4 mb-4"><p>{joke}</p></Card>)}

                    <div className="d-flexwrap ">
                        <Button onClick={handleGoBack} className="me-3" disabled={previousJokes.length === 0}>Go Back</Button>
                        <Button variant="primary" onClick={handleGetAnotherJoke}>Get Another Joke</Button>
                    </div>
                </Col>
            </Row>
        </Container>

    );
}

export default JokeSetup;