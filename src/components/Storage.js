import React from 'react';
import Input from './Input';
import ResultBar from './ResultBar';
import Round from './Round';
import { withRouter } from 'react-router';
import NavBottom from './NavBottom';
import '../css/Storage.scss';

class Storage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: '',
    }
    this.handleToResult = this.handleToResult.bind(this);
  }
  // ページ遷移
  handleToResult() {
    this.props.history.push('/result');
  }
  render() {
    return (
      <div id="main">
        <ResultBar />
        <Round />
        <Input />
        <NavBottom handleToResult={this.handleToResult} />
      </div>
    )
  }
}
export default withRouter(Storage);