import React from "react";
import Modal from "../components/UI/Modal/Modal";

const errorHandlerHOC = (WrappedComponent, axios) => {
  return class extends React.Component {
    state = {
      error: null
    };

    constructor(props) {
      super(props);
      axios.interceptors.request.use(reqConfig => {
        this.setState({
          error: null
        });
        return reqConfig;
      }, null);

      axios.interceptors.response.use(null, error => {
        this.setState({
          error: error
        });
        return Promise.reject(error);
      });
    }

    closingErrorModel = () => {
      this.setState({
        error: null
      });
    };

    render() {
      return (
        <React.Fragment>
          <Modal show={this.state.error} modalClosed={this.closingErrorModel}>
            {this.state.error ? this.state.error.message : ""}
          </Modal>
          <WrappedComponent {...this.props} />
        </React.Fragment>
      );
    }
  };
};

export default errorHandlerHOC;
