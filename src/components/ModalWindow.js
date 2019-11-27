import React from 'react';
import Modal from 'react-modal';

// ModalWindowStyle
const customStyles = {
  // 下の要素
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,0.5)'
  },
  // モーダル
  content: {
    top: '30%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    padding: '30px',
    margin: '0 auto',
    background: '#fff',
    transform: 'translate(-50%, -50%)'
  }
};
Modal.setAppElement('#root')
export default class ModalWindow extends React.Component {

  afterOpenModal() {
    this.subtitle.style.color = '#000';
  }
  render() {
    return (
      <div>
        <button onClick={this.props.openModal}>Open Modal!!</button>
        <Modal
          isOpen={this.props.modalIsOpen}
          onAfterOpen={this.afterOpenModal.bind(this)}
          onRequestClose={this.props.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => this.subtitle = subtitle}>送信しますか？</h2>
          <button onClick={() => {
            this.props.modalFlagOn();
          }}>はい</button>
          <button onClick={() => this.props.closeModal}>いいえ</button>
        </Modal>
      </div>
    )
  }
}
