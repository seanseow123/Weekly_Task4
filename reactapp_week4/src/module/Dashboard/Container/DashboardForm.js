import React, { Component } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { onAddScore } from '../../../action';
import { connect } from 'react-redux';
import Score from '../../Score/Container/Score';
import './dashboard.css';

class DashboardForm extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            score: "",
            formIsValid: false,
            nameError: "",
            scoreError: ""
        };
    }

    handleChange = (e) => {
        if (e.target.id == 'name') {
            this.validateName(e.target.value);
        }
        if (e.target.id == 'score') {
            this.validateScore(e.target.value);
        }

    }

    validateName = (name) => {
        let nameError = this.state.nameError;
        let formIsValid = this.state.formIsValid;

        if (String(name).trim() === "") {
            nameError = "*Please enter your Name";
            formIsValid = false;
        } else {
            var pattern = new RegExp(
                /^[A-Za-z]+$/i
            );
            if (pattern.test(name)) {
                formIsValid = true;
                nameError = "";
            } else {
                nameError = "*Please only enter alphabets for name";
                formIsValid = false;
            }
        }

        this.setState({
            name,
            nameError,
            formIsValid
        });
        return formIsValid;
    };

    validateScore = (score) => {
        let scoreError = this.state.scoreError;
        let formIsValid = this.state.formIsValid;

        if (String(score).trim() === "") {
            scoreError = "*Please enter your Score";
            formIsValid = false;
        } else {
            var pattern = new RegExp(
                /^[0-9]*$/i
            );
            if (pattern.test(score)) {
                formIsValid = true;
                scoreError = "";
            } else {
                scoreError = "*Please only enter digits for score";
                formIsValid = false;
            }
        }

        this.setState({
            score,
            scoreError,
            formIsValid
        });
        return formIsValid;
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.validateName(this.state.name) && this.validateScore(this.state.score)) {

            console.log(uuid());
            alert('Score added successfully');
            const unique_id = uuid().slice(0, 8);//'fygdyegu-fiufififo'

            //send data
            this.props.onAddScore({ ...this.state, id: unique_id });


            let name = "";
            let score = "";
            let nameError = "";
            let scoreError = "";

            this.setState({
                name: name,
                score: score,
                nameError: nameError,
                scoreError: scoreError
            });
        } else {
            let scoreError = this.state.scoreError;
            let score = this.state.score;
            if (String(score).trim() === "") {
                scoreError = "*Please enter score";
            } else {
                scoreError = "Enter correct score";
            }
            this.setState({
                scoreError: scoreError,
                score: score
            });
        }
    }

    render() {
        const { scorecard } = this.props;
        return (
            <div>
                <Container component="main" maxWidth="xs" style={{ marginTop: "80px" }}>
                    <Typography>
                        <h1>Enter Player Score</h1>
                    </Typography>
                    <TextField
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        placeholder="Enter Name"
                    />
                    <p style={{ color: "red" }}>{this.state.nameError}</p>

                    <TextField
                        required
                        fullWidth
                        name="score"
                        label="Score"
                        value={this.state.score}
                        onChange={this.handleChange}
                        placeholder="Enter Score"
                        id="score"
                    />
                    <p style={{ color: "red" }}>{this.state.scoreError}</p>

                    <Button
                        fullWidth
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={this.handleSubmit}
                    >
                        Submit Score
                    </Button>

                    {scorecard.length ? (<Score scorecardData={this.props.scorecard} />) : ('')}
                </Container>
            </div>

        );
    }
}


const mapStateToProps = state => {
    return {
        scorecard: state.scorecard
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddScore: (item) => dispatch(onAddScore(item))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DashboardForm);