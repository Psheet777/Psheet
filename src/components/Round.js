import React, { Component } from 'react';
import '../css/Round.scss';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Undo';

export default class Round extends Component {
  constructor(props) {
    super(props);
    this.state = {
      round: [
        { id: 1, title: '1R', count: 0 },
        { id: 2, title: '2R', count: 0 },
        { id: 3, title: '3R', count: 0 },
        { id: 4, title: '4R', count: 0 },
        { id: 5, title: '5R', count: 0 },
        { id: 6, title: '6R', count: 0 },
        { id: 7, title: '7R', count: 0 },
        { id: 8, title: '8R', count: 0 },
        { id: 9, title: '9R', count: 0 },
        { id: 10, title: '10R', count: 0 },
        { id: 11, title: '11R', count: 0 },
        { id: 12, title: '12R', count: 0 },
        { id: 13, title: '13R', count: 0 },
        { id: 14, title: '14R', count: 0 },
        { id: 15, title: '15R', count: 0 },
        { id: 16, title: '16R', count: 0 },
      ]
    }
    this.deleteRound = this.deleteRound.bind(this);
    this.countUp = this.countUp.bind(this);
    this.countDown = this.countDown.bind(this);
    this.setLocal = this.setLocal.bind(this);
    this.changeText = this.changeText.bind(this);
    // this.plusRound = this.plusRound.bind(this);
  }

  // 配列削除
  deleteRound(i) {
    this.state.round.splice(i, 1);
    this.setState({
      round: this.state.round
    });
  }
  countUp(i) {
    // 配列をコピー
    const copy = this.state.round.slice();
    // コピーの中身を変更して、それをsetする
    copy[i].count = copy[i].count + 1;
    this.setState({
      round: copy
    })
  }
  countDown(i) {
    if (this.state.round[i].count > 0) {
      // 配列をコピー
      const downcopy = this.state.round.slice();
      // コピーの中身を変更して、それをsetする
      downcopy[i].count = downcopy[i].count - 1;
      this.setState({
        round: downcopy
      })
    }
  }
  setLocal() {
    localStorage.setItem('round', JSON.stringify(this.state.round))
    this.changeText();
  }
  changeText() {
    const btnId = document.getElementById('set_btn');
    btnId.value = '保存しました!!';
  }
  // ステートRとローカルRを足す
  // plusRound() {
  //   const rounds = JSON.parse(localStorage.getItem('round'));
  //   for (let i = 0; i >= this.state.round.length; i++) {
  //     if (this.state.round[i].title === rounds[i].title) {
  //       total_round.push(Number(this.state.round[i].count) + Number(rounds[i].count))
  //     }
  //     console.log(total_round)
  //   }
  // }

  render() {
    return (
      <Grid container spacing={2} style={{ marginTop: '70px', textAlign: 'center' }}>
        <div className="round__list">
          {this.state.round.map((R, i) => (
            <Grid item xs={3}>
              <div key={i} className="round__list-content">
                <div className="round__main">
                  <Typography variant="h6" onClick={() => this.countDown(i)}>
                    {R.title}
                  </Typography>
                  <input type="button" value={R.count} onClick={() => this.countUp(i)} className="round__btn" />
                </div>
                <DeleteIcon onClick={() => this.deleteRound(i)} className="round__btn--del" />
              </div>
            </Grid>
          ))}
        </div>
        <div className="round--save">
          <input type="button" id="set_btn" value="R保存" onClick={this.setLocal} />
        </div>
        {/* <Link to="/result">
          <Button color="inherit" style={{ color: '#000', textDecoration: 'none', fontWeight: 'bold', fontSize: '12px' }}>
            結果をみる
            </Button>
        </Link> */}
      </Grid>
    )
  }
}