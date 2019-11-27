import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import InputField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Paper from '@material-ui/core/Paper';

const Form = (props) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root} style={styleBottom}>
      <Grid container spacing={2} justify={"center"}>
        <Grid item xs={4}>
          <InputField id="filled-required" label="回転数" margin="normal" variant="filled"
            type="number" name="tousenG" value={props.tousenG} onChange={e => props.handleChange(e)} placeholder="当選G"
          />
        </Grid>
        <Grid item xs={4}>
          <InputField id="filled-required" label="出玉" margin="normal" variant="filled"
            type="number" name="dedama" value={props.dedama} onChange={e => props.handleChange(e)} placeholder="1set純増"
          />
        </Grid>
        <Grid item xs={4}>
          <InputField id="filled-required" label="時短" margin="normal" variant="filled" fullWidth
            type="number" name="jitanG" value={props.jitanG} onChange={e => props.handleChange(e)} placeholder="時短回数"
          />
        </Grid>
        <Grid item xs={12}>
          <div style={{ textAlign: 'left', marginTop: '30px' }} >
            <Link to="/result">
              <Button variant="contained" color="primary" startIcon={<SendIcon />} size="large"
                type="submit" onClick={(e) => { props.gameTotal(e); }} style={{ padding: '5 30px' }}>送信</Button>
              {/* <input type="submit" onClick={(e) => { props.gameTotal(e); }} value="送 信" /> */}
            </Link >
          </div>
        </Grid>
      </Grid>
    </Paper>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

const styleBottom = {
  marginBottom: '80px'
}

export default Form;