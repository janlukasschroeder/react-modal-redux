import React from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import { showModal } from "./reducer";
import ModalRedux from "./containers/Modal";

class Demo extends React.Component {
  render() {
    return (
      <div>
        <ModalRedux modalId={"1"}>
          <h2>That Works...</h2>
          <Button onClick={() => this.props.showModal("2")}>
            Open Modal 2
          </Button>
        </ModalRedux>
        <ModalRedux modalId={"2"}>
          <Button onClick={() => this.props.showModal("3")}>
            Open Modal 3
          </Button>
        </ModalRedux>
        <ModalRedux modalId={"3"}>3</ModalRedux>
        <ModalRedux modalId={"4"}>4</ModalRedux>

        <Button onClick={() => this.props.showModal("1")}>Open Modal 1</Button>
        <Button onClick={() => this.props.showModal("2")}>Open Modal 2</Button>
        <Button onClick={() => this.props.showModal("3")}>Open Modal 3</Button>
        <Button onClick={() => this.props.showModal("2")}>Open Modal 2</Button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  showModal: id => dispatch(showModal(id))
});

export default connect(
  null,
  mapDispatchToProps
)(Demo);
