import React from "react";
import { connect } from "react-redux";
import { Modal } from "antd";
import { registerModal, hideModal } from "../reducer";

class ModalRedux extends React.Component {
  constructor(props) {
    super(props);
    this.props.registerModal(this.props.modalId);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleOk = this.handleOk.bind(this);
  }

  handleCancel() {
    this.props.hideModal(this.props.modalId);
  }

  handleOk() {
    this.props.hideModal(this.props.modalId);
  }

  render() {
    const { modalId, modals, children } = this.props;
    const modal = modals[modalId];

    if (!modal) {
      return "";
    }

    return (
      <Modal
        title="Basic Modal"
        onCancel={this.handleCancel}
        onOk={this.handleOk}
        visible={modal.visible}
      >
        {children}
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  modals: state.modals.modals
});

const mapDispatchToProps = dispatch => ({
  registerModal: id => dispatch(registerModal(id)),
  hideModal: id => dispatch(hideModal(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalRedux);
