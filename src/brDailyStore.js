import React, { Component } from 'react';
import { Button, Grid, Row, Col } from 'react-bootstrap';

const API = 'http://localhost:8080/brDailyStore';
const DEFAULT_QUERY = '';

const withFetching = (url) => (Comp) =>
  class WithFetching extends Component {
    constructor(props) {
      super(props);

      this.state = {
        data: {},
        isLoading: false,
        error: null,
      };
    }

    componentDidMount() {
      this.setState({ isLoading: true });

      fetch(url)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Something went wrong ...');
          }
        })
        .then(data => this.setState({ data, isLoading: false }))
        .catch(error => this.setState({ error, isLoading: false }));
    }

    render() {
      return <Comp { ...this.props } { ...this.state } />
    }
  }

const BrDailyStore = ({ data, isLoading, error }) => {
  const hits = data.items || [];

  if (error) {
    return <p>{error.message}</p>;
  }

  if (isLoading) {
    return <p>Loading ...</p>;
  }
  var i = 0;
  return (
    <div>
      <p>Your URL is, {API + DEFAULT_QUERY}</p>
      <Grid>
        <Row className="show-grid">
        {hits.map(hit =>
              <Col key={i++} className="quarter">
                <div key={i++}>
                  <p>{hit.name}</p>
                  <p className="wrap border">{hit.item.image}</p>
                  <img src={hit.item.image} className="fill-fit black-bg"/>
                  <p>VBUCK: {hit.cost}</p>
                </div>
              </Col>
        )}
        </Row>
      </Grid>
    </div>
  );
}

export default withFetching(API + DEFAULT_QUERY)(BrDailyStore);