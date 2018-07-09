import React, { Component } from 'react';

const API = process.env.REACT_APP_API_HOST + 'userId?name=';
const DEFAULT_QUERY = 'MyChoo';

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

const UserIdApi = ({ data, isLoading, error }) => {
  const hits = data || [];

  if (error) {
    return <p>{error.message}</p>;
  }

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <div>
      <p>Your URL is, {API + DEFAULT_QUERY}</p>
      <div>
        <p>{hits.uid}</p>
        <p>{hits.username}</p>
        <p>{hits.platforms}</p>
      </div>
    </div>
  );
}

export default withFetching(API + DEFAULT_QUERY)(UserIdApi);