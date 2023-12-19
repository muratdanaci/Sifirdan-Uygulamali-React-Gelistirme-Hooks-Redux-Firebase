import React, { Component } from "react";

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
    };
  }

  onChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (this.state.keyword === "") {
      this.props.displayAlert("Anahtar Kelime Giriniz!", "danger");
    } else {
      this.props.searchUsers(this.state.keyword);
      this.setState({ keyword: "" });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <form onSubmit={this.onSubmit}>
          <div className="input-group">
            <input
              type="text"
              value={this.state.keyword}
              onChange={this.onChange}
              className="form-control"
              placeholder="Anahtar Kelime"
            />
            <button className="btn btn-primary" type="submit">
              Ara
            </button>
          </div>
        </form>
        {this.props.showClearButton && (
          <button
            className="btn btn-outline-danger my-2 btn-block"
            type="submit"
            onClick={this.props.clearUsers}
          >
            Sonuçları Temizle
          </button>
        )}
      </div>
    );
  }
}

export default Search;