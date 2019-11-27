import React from 'react';
import ResultText from './ResultText';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const Content = (props) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Typography variant="h5">Text only</Typography>
        <List>
          <ListItem style={backColor}>
            <Grid item xs={6}>
              <ListItemText primary="回転率" />
            </Grid>
            <Grid item xs={6}>
              <ListItemText secondary={props.Average} />
            </Grid>
          </ListItem>
          <ListItem>
            <Grid item xs={6}>
              <ListItemText primary="持玉" />
            </Grid>
            <Grid item xs={6}>
              <ListItemText secondary={props.haveBall} />
            </Grid>
          </ListItem>

          <ResultText />

        </List>
      </Grid>

      <Grid item xs={12} md={6}>
        <Typography variant="h5">Edit only</Typography>
        <List>
          <ListItem>
            <TextField id="outlined-basic" label="通常回転数" variant="outlined" color="secondary"
              type="number" name='editTujyo' value={props.editTujyo} onChange={e => props.handleChangeStorage(e)}
            />
            <Link to="/result">
              <Button variant="outlined" color="primary" size="small" onClick={props.editTujyoG}>編集</Button>
            </Link>
          </ListItem>
          <ListItem>
            <TextField id="outlined-basic" label="総出玉" variant="outlined" color="secondary"
              type="number" name='editDedama' value={props.editDedama} onChange={e => props.handleChangeStorage(e)}
            />
            <Link to="/result">
              <Button variant="outlined" color="primary" size="small" onClick={props.editDedamaG}>編集</Button>
            </Link>
          </ListItem>
          <ListItem>
            <TextField id="outlined-basic" label="時短" variant="outlined" color="secondary"
              type="number" name='editJitan' value={props.editJitan} onChange={e => props.handleChangeStorage(e)}
            />
            <Link to="/result">
              <Button variant="outlined" color="primary" size="small" onClick={props.editJitanG}>編集</Button>
            </Link>
          </ListItem>
          <ListItem>
            <TextField id="outlined-basic" label="合計R" variant="outlined" color="secondary"
              type="number" name='editRound' value={props.editRound} onChange={e => props.handleChangeStorage(e)}
            />
            <Link to="/result">
              <Button variant="outlined" color="primary" size="small" onClick={props.editRounds}>編集</Button>
            </Link>
          </ListItem>
        </List>
      </Grid>
    </Grid >
  )
}

const backColor = {
  background: '#eeeeee'
}

export default Content;