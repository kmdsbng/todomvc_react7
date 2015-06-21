import React from "react";
import { getData } from "../../common/request";


export default class TodoMvcPage extends React.Component {
  componentWillMount() {
    //console.log("[LandingPage] will mount with server response: ", this.props.data.landing);
  }

  render() {
    var title = 'TodoMVC';

    console.log(this.props);

    return (
      <div id="landing-page">
        <h1>{title}</h1>
      </div>
    );
  }

  static fetchData = function(params) {
    return getData("/landing");
  }
}


