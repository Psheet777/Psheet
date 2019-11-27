import React from 'react';
import Form from './Form';

export default class Input extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tousenG: '',
      dedama: '',
      jitanG: '',
      errorMessage: null,
      modalIsOpen: false,
      flag: false,
      TotalGame: localStorage.getItem('tujyo_total'),
      TotalDedama: localStorage.getItem('dedama_total'),
      TotalJitan: localStorage.getItem('jitan_total'),
    }
    this.handleChange = this.handleChange.bind(this)
    this.gameTotal = this.gameTotal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.modalFlagOn = this.modalFlagOn.bind(this);
    this.modalFlagOff = this.modalFlagOff.bind(this);
  }

  // inputの値を振り分けて状態セット
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  // トータル加算
  gameTotal(e) {
    if (0 < 1) {
      const sumTujyo = Number(this.state.TotalGame) + Number(this.state.tousenG) - Number(this.state.jitanG);
      const sumDedama = Number(this.state.TotalDedama) + Number(this.state.dedama);
      const sumJitan = Number(this.state.TotalJitan) + Number(this.state.jitanG);
      this.setState({
        TotalGame: sumTujyo,
        TotalDedama: sumDedama,
        TotalJitan: sumJitan,
      })
      // ローカルストレージに保存
      localStorage.setItem('tujyo_total', sumTujyo)
      localStorage.setItem('dedama_total', sumDedama)
      localStorage.setItem('jitan_total', sumJitan)
    } else {
      e.preventDefault();
      this.setState({
        errorMessage: '全ての項目を入力してください'
      })
      return;
    }
  }
  // Modal Function
  openModal() {
    this.setState({ modalIsOpen: true });
  }
  closeModal() {
    this.setState({ modalIsOpen: false });
  }
  modalFlagOn() {
    this.setState({ flag: true });
  }
  modalFlagOff() {
    this.setState({ flag: false });
  }

  render() {
    return (
      <div className="main__input">
        <Form
          handleChange={this.handleChange}
          openModal={this.openModal}
          gameTotal={e => this.gameTotal(e)}
          {...this.state}
        />
        {/* <ModalWindow
          modalIsOpen={this.state.modalIsOpen}
          openModal={this.openModal}
          closeModal={this.closeModal}
          modalFlagOn={this.modalFlagOn}
          modalFlagOff={this.modalFlagOff}
        /> */}
      </div>
    )
  }
}
