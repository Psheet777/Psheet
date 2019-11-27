import React from 'react';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const ResultText = () => {
  return (
    <React.Fragment>
      <ListItem style={backColor}>
        <Grid item xs={6}>
          <ListItemText primary="通常回転数" />
        </Grid>
        <Grid item xs={6}>
          <ListItemText secondary={localStorage.getItem('tujyo_total')} />
        </Grid>
      </ListItem>
      <ListItem>
        <Grid item xs={6}>
          <ListItemText primary="総出玉" />
        </Grid>
        <Grid item xs={6}>
          <ListItemText secondary={localStorage.getItem('dedama_total')} />
        </Grid>
      </ListItem>
      <ListItem style={backColor}>
        <Grid item xs={6}>
          <ListItemText primary="時短" />
        </Grid>
        <Grid item xs={6}>
          <ListItemText secondary={localStorage.getItem('jitan_total')} />
        </Grid>
      </ListItem>
      <ListItem>
        <Grid item xs={6}>
          <ListItemText primary="合計R" />
        </Grid>
        <Grid item xs={6}>
          <ListItemText secondary={localStorage.getItem('total_rounds')} />
        </Grid>
      </ListItem>
      <ListItem style={backColor}>
        <Grid item xs={6}>
          <ListItemText primary="現金投資" />
        </Grid>
        <Grid item xs={6}>
          <ListItemText secondary={localStorage.getItem('haveBall')} />
        </Grid>
      </ListItem>
      <ListItem>
        <Grid item xs={6}>
          <ListItemText primary="貯玉投資" />
        </Grid>
        <Grid item xs={6}>
          <ListItemText secondary={localStorage.getItem('total_investBall')} />
        </Grid>
      </ListItem>
      <ListItem style={backColor}>
        <Grid item xs={6}>
          <ListItemText primary="渡玉" />
        </Grid>
        <Grid item xs={6}>
          <ListItemText secondary={localStorage.getItem('total_passBall')} />
        </Grid>
      </ListItem>
      <ListItem>
        <Grid item xs={6}>
          <ListItemText primary="受玉" />
        </Grid>
        <Grid item xs={6}>
          <ListItemText secondary={localStorage.getItem('total_receiveBall')} />
        </Grid>
      </ListItem>
      <ListItem style={backColor}>
        <Grid item xs={6}>
          <ListItemText primary="通常時消費玉" />
        </Grid>
        <Grid item xs={6}>
          <ListItemText secondary={localStorage.getItem('use_ball')} />
        </Grid>
      </ListItem>
      <ListItem>
        <Grid item xs={6}>
          <ListItemText primary="1R平均出玉" />
        </Grid>
        <Grid item xs={6}>
          <ListItemText secondary={localStorage.getItem('avarage_1R')} />
        </Grid>
      </ListItem>
      <ListItem style={backColor}>
        <Grid item xs={6}>
          <ListItemText primary="単価" />
        </Grid>
        <Grid item xs={6}>
          <ListItemText secondary={localStorage.getItem('unit_price')} />
        </Grid>
      </ListItem>
      <ListItem>
        <Grid item xs={6}>
          <ListItemText primary="等価ボーダー" />
        </Grid>
        <Grid item xs={6}>
          <ListItemText secondary={localStorage.getItem('border_line')} />
        </Grid>
      </ListItem>
    </React.Fragment >
  )
}

const backColor = {
  background: '#eeeeee'
}

export default ResultText;