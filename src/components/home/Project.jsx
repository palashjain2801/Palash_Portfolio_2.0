import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Card from "react-bootstrap/Card";

import Button from "react-bootstrap/Button";

import ProjectCard from "./ProjectCard";
import axios from "axios";

const dummyProject = {
  name: null,
  description: null,
  svn_url: null,
  stargazers_count: null,
  languages_url: null,
  pushed_at: null
};
const API = "https://api.github.com";
const gitHubQuery = "/repos?sort=updated&direction=desc";
const specficQuerry = "https://api.github.com/repos/palashjain2801/";

const Project = ({ heading, username, length, specfic }) => {
  const allReposAPI = `${API}/users/${username}/repos?sort=updated&direction=desc`;
  const specficReposAPI = `${API}/repos/${username}`;
  const dummyProjectsArr = new Array(length + specfic.length).fill(
    dummyProject
  );
  console.log('👉👉👉👉',Project);


  const [projectsArray, setProjectsArray] = useState([]);

  // const fetchRepos = useCallback(async () => {
  //   let repoList = [];
  //   try {
  //     // getting all repos
  //     const response = await axios.get(allReposAPI);
  //     // slicing to the length
  //     repoList = [...response.data.slice(0, length)];
  //     // adding specified repos
  //     try {
  //       for (let repoName of specfic) {
  //         const response = await axios.get(`${specficReposAPI}/${repoName}`);
  //         repoList.push(response.data);
  //       }
  //     } catch (error) {
  //       console.error(error.message);
  //     }
  //     // setting projectArray
  //     // TODO: remove the duplication.
  //     setProjectsArray(repoList);
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // }, [allReposAPI, length, specfic, specficReposAPI]);

  // useEffect(() => {
  //   fetchRepos();
  // }, [fetchRepos]);

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">

        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
        <Col md={6}>

        <Card className="card shadow-lg p-3 mb-5 bg-white rounded">

        <Card.Body>
          <Card.Title as="h5">Amazon Clone </Card.Title>
          <Card.Text>This is Replica of Amazon Website. Which includes Functionalities like: Create Account, Login, Add Items to bucket, Cart, Payment.</Card.Text>
          <Button variant="primary" href = " https://github.com/palashjain2801/Amazon-Clone" target="_blank" size="lg" block>Github</Button>
          
          <Button variant="success" href = " https://palashjain2801.github.io/Amazon-Clone/" target="_blank" size="lg" block>Host</Button>

        </Card.Body>
        </Card>

        </Col>
        <Col md={6}>

        <Card className="card shadow-lg p-3 mb-5 bg-white rounded">

        <Card.Body>
          <Card.Title as="h5">Netflix Clone </Card.Title>
          <Card.Text>This is Replica of Netflix Website. Which includes Functionalities of Netflix. You can watch trailer inspite of movies </Card.Text>
          <Button variant="primary" href = "https://github.com/palashjain2801/Netflix_Clone" target="_blank" size="lg" block>Github</Button>
          
          <Button variant="success" href = "https://netflix-clone-87dff.firebaseapp.com/" target="_blank" size="lg" block>Host</Button>

        </Card.Body>
        </Card>
        </Col>

  </Row>
  <Row>
        <Col md={6}>

        <Card className="card shadow-lg p-3 mb-5 bg-white rounded">

        <Card.Body>
          <Card.Title as="h5">Corona Tracker  </Card.Title>
          <Card.Text>Develop an intuitive and user-friendly website for live tracking of COVID-19 cases in 108 countries. Develop using Redux and ReactJS components to call the Mathdroid API and display the data in a graphical format. Mobile Responsive design the user interface using MaterialUI.</Card.Text>
          <Button variant="primary" href = "https://github.com/palashjain2801/Corona_website_react" target="_blank" size="lg" block>Github</Button>
          
          <Button variant="success" href = "https://palashjain2801.github.io/Corona_website_react/#/" target="_blank" size="lg" block>Host</Button>

        </Card.Body>
        </Card>

        </Col>
        <Col md={6}>

        <Card className="card shadow-lg p-3 mb-5 bg-white rounded">

        <Card.Body>
          <Card.Title as="h5">Cloud Native Application </Card.Title>
          <Card.Text>Developed Imaging Processing Application and deployed using 3 tire cloud native application architecture using various Amazon Cloud Services such as Auto-Scaling, Cloud based database(Dynamo DB), SNS and Lambda function to process raw image and storing processed image in different S3 Bucket. </Card.Text>
          <Button variant="primary" href = "https://github.com/palashjain2801/Netflix_Clone" target="_blank" size="lg" block>Github</Button>
          
          <Button variant="success" href = "https://netflix-clone-87dff.firebaseapp.com/" target="_blank" size="lg" block>Host</Button>

        </Card.Body>
        </Card>
        </Col>

  </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
