import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';

const WorkoutIndex = (props) => {
    const [workouts, setWorkouts] = useState([]);

    const fetchWorkouts = () => {
        fetch('http://localhost:3001/workout/log', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => res.json())
        .then((logData) => {
            setWorkouts(logData);
            console.log(logData) 
        })
    }
    
    useEffect(() => {
        fetchWorkouts();
    }, [])
    
    return(
        <Container>
            <Row>
               <Col md="3">
                   [/* The create component will go here. */]
               </Col> 
            </Row>
            <Col md="9">
                <h2>Log a workout to see a table. This will be added in later pages.</h2>
            </Col>
        </Container>
    )
}

export default WorkoutIndex;