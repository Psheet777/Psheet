import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ResultInputGrid from '@material-ui/core/Grid';
import ResultInputTypography from '@material-ui/core/Typography';
import ResultInputList from '@material-ui/core/List';
import ResultInputListItem from '@material-ui/core/ListItem';

const ResultInput = (props) => (
  <React.Fragment>
    <ResultInputGrid container spacing={2}>
      <ResultInputGrid item xs={12} md={6}>
        <ResultInputTypography variant="h5">Input only</ResultInputTypography>
        <ResultInputList>
          <ResultInputListItem>
            <TextField
              type="number" name="probability" value={props.probability} onChange={e => props.handleChangeStorage(e)} placeholder="1R確率分母"
              id="standard-basic" label="トータル確率" margin="normal"
            />
            <label className="input__text">{localStorage.getItem('probability')}</label>
          </ResultInputListItem>
          <ResultInputListItem>
            <TextField
              type="number" name="rate" value={props.rate} onChange={e => props.handleChangeStorage(e)}
              id="standard-basic" label="換金率" margin="normal"
            />
            <label className="input__text">{localStorage.getItem('rate')}</label>
          </ResultInputListItem>
          <ResultInputListItem>
            <TextField
              type="number" name="money" value={props.money} onChange={e => props.handleChangeStorage(e)} onBlur={props.convertMoney} min="0" placeholder="k単位で入力"
              id="standard-basic" label="現金投資" margin="normal"
            />
          </ResultInputListItem>
          <ResultInputListItem>
            <TextField
              type="number" name="investmentBall" value={props.investmentBall} onChange={e => props.handleChangeStorage(e)} min="0" placeholder="玉数を入力"
              id="standard-basic" label="貯玉投資" margin="normal"
            />
          </ResultInputListItem>
          <ResultInputListItem>
            <TextField
              type="number" name="haveBall" value={props.haveBall} onChange={e => props.handleChangeStorage(e)} min="0" placeholder="玉数を入力"
              id="standard-basic" label="持玉" margin="normal"
            />
          </ResultInputListItem>
          <ResultInputListItem>
            <TextField
              type="number" name="passBall" value={props.passBall} onChange={e => props.handleChangeStorage(e)} min="0" placeholder="玉数を入力"
              id="standard-basic" label="渡玉" margin="normal"
            />
          </ResultInputListItem>
          <ResultInputListItem>
            <TextField
              type="number" name="receiveBall" value={props.receiveBall} onChange={e => props.handleChangeStorage(e)} min="0" placeholder="玉数を入力"
              id="standard-basic" label="受玉" margin="normal"
            />
          </ResultInputListItem>
          <ResultInputListItem>
            <Button variant="contained" color="primary" onClick={props.sendLocalStorage}>送信</Button>
          </ResultInputListItem>
        </ResultInputList>
      </ResultInputGrid>
    </ResultInputGrid>
  </React.Fragment >
)
export default ResultInput;


