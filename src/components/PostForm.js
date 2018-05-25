import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions'

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  onSubmit(evt) {
    evt.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    }

    // call action
    this.props.createPost(post);

  }

  render() {
    return (
      <div>
        <h1>Add Posts:</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label><br />
            <input type="text" name="title" onChange={this.onChange}
            value={this.state.title} />
          </div>
          <div>
            <label>Body: </label><br />
            <input type="text" name="body" onChange={this.onChange}
            value={this.state.body}  />
          </div>
          <br />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: propTypes.func.isRequired,
};

export default connect(null, { createPost })(PostForm);
