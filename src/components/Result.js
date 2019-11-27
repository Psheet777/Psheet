import React from 'react';
import { withRouter } from 'react-router';
import ResultInput from './ResultInput';
import Content from './ResultContent';
import ResultBar from './ResultBar';
import RemoveRound from '../func/RemoveRound';
import NavBottom from './NavBottom';

class Result extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      money: '',
      investmentBall: '',
      haveBall: '',
      passBall: '',
      receiveBall: '',
      moneyTotal: localStorage.getItem('moneyTotal'),
      investTotal: localStorage.getItem('investTotal'),
      passBallTotal: localStorage.getItem('passBallTotal'),
      receiveBallTotal: localStorage.getItem('receiveBallTotal'),
      sumRounds: 0,
      probability: '',
      rate: '',
      TotalRounds: localStorage.getItem('total_rounds'),
      UseBall: localStorage.getItem('use_ball'),
      Average: localStorage.getItem('average_rotation'),
      editTujyo: '',
      editDedama: '',
      editJitan: '',
      editRound: '',
    }
    this.handleChangeStorage = this.handleChangeStorage.bind(this)
    this.convertMoney = this.convertMoney.bind(this);
    this.sendLocalStorage = this.sendLocalStorage.bind(this);
    this.getRounds = this.getRounds.bind(this);
    this.avarage1R = this.avarage1R.bind(this);
    this.unitPrice = this.unitPrice.bind(this);
    this.border = this.border.bind(this);
    this.editRounds = this.editRounds.bind(this);
    this.editTujyoG = this.editTujyoG.bind(this);
    this.editDedamaG = this.editDedamaG.bind(this);
    this.editJitanG = this.editJitanG.bind(this);
    this.plusState = this.plusState.bind(this);
    this.handleToHome = this.handleToHome.bind(this);
  }
  // ResultInput値をストレージ保存
  handleChangeStorage(e) {
    if (e.target.value === null || e.target.value === undefined) {
      e.target.value = Number(null)
    }
    this.setState({ [e.target.name]: e.target.value })
  }
  // 現金を玉数に変換
  convertMoney() {
    this.setState({ money: this.state.money * 250 })
  }
  // 投資関連のステートをストレージ保存
  plusState() {
    const sumMoney = Number(this.state.money) + Number(localStorage.getItem('total_money'))
    const sumInvestBall = Number(this.state.investmentBall) + Number(localStorage.getItem('total_investBall'))
    localStorage.setItem('total_money', sumMoney);
    localStorage.setItem('total_investBall', sumInvestBall);
    // localStorage.setItem('total_passBall', this.state.passBall);
    // localStorage.setItem('total_receiveBall', this.state.receiveBall);
  }

  // 各種計算してストレージ保存する関数
  sendLocalStorage() {

    this.plusState();

    if (localStorage.getItem('total_passBall') !== null) {
      const TotalPassBall = Number(localStorage.getItem('total_passBall')) + Number(this.state.passBall);
      localStorage.setItem('total_passBall', TotalPassBall);
    } else {
      localStorage.setItem('total_passBall', this.state.passBall);
    }
    if (localStorage.getItem('total_receiveBall') !== null) {
      const TotalReceiveBall = Number(localStorage.getItem('total_receiveBall')) + Number(this.state.receiveBall);
      localStorage.setItem('total_receiveBall', TotalReceiveBall);
    } else {
      localStorage.setItem('total_receiveBall', this.state.receiveBall);
    }

    const all_ball_kari = Number(localStorage.getItem('dedama_total')) + Number(localStorage.getItem('total_receiveBall'))
    // 全ての玉
    const all_ball = Number(localStorage.getItem('total_money')) + Number(localStorage.getItem('total_investBall')) + Number(all_ball_kari)
    // 持ち玉 + 渡玉
    const remain_ball_kari = Number(this.state.haveBall) + Number(localStorage.getItem('total_passBall'));
    // 通常時消費玉
    const remain_ball = Number(all_ball) - Number(remain_ball_kari)
    // 消費玉をk単位に変換
    const remain_cost = Number(remain_ball) / 250
    // 回転率
    const average_rotation = Math.round(Number(localStorage.getItem('tujyo_total')) / Number(remain_cost) * 100) / 100
    // 送られてきたRoundの合計を計算してローカルにset
    const rounds = JSON.parse(localStorage.getItem('round'));

    if (rounds !== null) {
      var sum = 0;
      rounds.forEach(round => {
        const Rcount = round.id * round.count
        sum += Number(Rcount)
      })
      // SUMrounds 送られてきたラウンドの合計
      localStorage.setItem('SUMrounds', sum);
    } else {
      // 編集画面からのRound入力時
      localStorage.setItem('SUMrounds', 0);
    }
    this.getRounds();

    this.setState({
      AllInvestment: all_ball,
      UseBall: remain_ball,
      Average: average_rotation,
    })
    // 使用球、回転率、トータル確率、換金率ストレージセット
    localStorage.setItem('use_ball', remain_ball)
    localStorage.setItem('average_rotation', average_rotation)
    if (this.state.rate !== '') {
      localStorage.setItem('rate', this.state.rate)
    }
    if (this.state.probability !== '') {
      localStorage.setItem('probability', this.state.probability)
    }

    this.avarage1R();
    this.unitPrice();
    this.border();

    // 投資stateを空に
    this.setState({
      money: '',
      investmentBall: '',
      passBall: '',
      receiveBall: '',
    })

    localStorage.removeItem('round');

  }

  // 送られてきたラウンドとトータルのラウンドの合計
  getRounds() {
    const getTotalR = localStorage.getItem('total_rounds');
    const sumRounds = Number(localStorage.getItem('SUMrounds')) + Number(getTotalR)
    localStorage.setItem('total_rounds', sumRounds);
  }

  // 1R出玉計算
  avarage1R() {
    const division1R = Math.round(Number(localStorage.getItem('dedama_total')) / Number(localStorage.getItem('total_rounds')) * 100) / 100
    localStorage.setItem('avarage_1R', division1R)
  }

  // 単価 = 1R出玉/トータル確率-(250/回転率))*換金率
  // 単価計算
  unitPrice() {
    const R1 = localStorage.getItem('avarage_1R');
    const totalkakuritu = localStorage.getItem('probability');
    const kaiten = localStorage.getItem('average_rotation');
    const kankin = localStorage.getItem('rate');
    const avarage_1Rdedama = Number(R1) / Number(totalkakuritu);
    const avarage_shisyutu = 250 / Number(kaiten);
    const avarage_kari = Number(avarage_1Rdedama) - Number(avarage_shisyutu);
    const unit = Math.round(Number(avarage_kari) * Number(kankin) * 100) / 100;
    localStorage.setItem('unit_price', unit);
  }
  // トータル確率/(1R出玉*4/1000)
  // ボーダー計算
  border() {
    const dedama_kari = Number(localStorage.getItem('avarage_1R')) * 4 / 1000;
    const border = Math.round(Number(localStorage.getItem('probability')) / Number(dedama_kari) * 100) / 100;
    localStorage.setItem('border_line', border);
  }
  // ラウンド一旦全消し、入力されたラウンドをトータルRに
  editRounds() {
    // トータルラウンドを削除
    RemoveRound();
    localStorage.removeItem('SUMrounds');

    localStorage.setItem('total_rounds', this.state.editRound);
    this.sendLocalStorage();
    // 入力後input空に
    this.setState({ editRound: '' });
  }
  editTujyoG() {
    localStorage.setItem('tujyo_total', this.state.editTujyo);

    this.sendLocalStorage();
    // 入力後input空に
    this.setState({ editTujyo: '' });
  }
  editDedamaG() {
    localStorage.setItem('dedama_total', this.state.editDedama);

    this.sendLocalStorage();
    // 入力後input空に
    this.setState({ editDedama: '' });
  }
  editJitanG() {
    localStorage.setItem('jitan_total', this.state.editJitan);
    const MinusJitan = Number(localStorage.getItem('tujyo_total')) - Number(this.state.editJitan)
    localStorage.setItem('tujyo_total', MinusJitan);

    this.sendLocalStorage();
    // 入力後input空に
    this.setState({ editJitan: '' });
  }
  // ページ遷移
  handleToHome() {
    this.props.history.push('/');
  }


  render() {
    return (
      <div style={{ marginTop: '80px', marginBottom: '80px' }}>
        <ResultBar />
        <ResultInput
          {...this.state}
          handleChangeStorage={e => this.handleChangeStorage(e)}
          convertMoney={this.convertMoney}
          sendLocalStorage={this.sendLocalStorage}
          getRounds={this.getRounds}
        />
        <Content
          {...this.state}
          handleChangeStorage={e => this.handleChangeStorage(e)}
          editRounds={this.editRounds}
          editTujyoG={this.editTujyoG}
          editDedamaG={this.editDedamaG}
          editJitanG={this.editJitanG}
        />
        <NavBottom handleToHome={this.handleToHome} />
      </div>
    )
  }
}
export default withRouter(Result);