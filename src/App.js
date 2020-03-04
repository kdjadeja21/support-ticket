import React from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import { AppBar, TextField, Button, FormControlLabel, Switch, Typography, FormControl, MenuItem, InputLabel, Select, Toolbar, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { Delete as DeleteIcon, Edit as EditIcon } from '@material-ui/icons';
import Rating from '@material-ui/lab/Rating';

class App extends React.Component {

  state = {
    addData: true,
    editData: false,
    showData: false,
    clearStorage: true,
    unique_id: 0,
    id: 0,
    subject: '',
    priority: '3',
    status: 1,
    user: '',
    assigned_user: '',
    data: []
  }

  componentDidMount() {
    this.setState({
      data: localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [],
      id: localStorage.getItem('id') ? parseInt(localStorage.getItem('id')) : 0,
      clearStorage: localStorage.getItem('data') ? false : true
    })
  }

  toggleData = () => {
    this.setState({
      showData: !this.state.showData,
      addData: !this.state.addData
    })
  }
  editData = async (id) => {
    const filteredItems = this.state.data.filter(item =>
      item.id === id);
    await this.setState({
      addData: false,
      editData: true,
      showData: false,
      id: id,
      unique_id: this.state.id,
      subject: filteredItems[0].subject,
      priority: filteredItems[0].priority,
      status: filteredItems[0].status,
      user: filteredItems[0].user,
      assigned_user: filteredItems[0].assigned_user
    })
  }
  deleteData = id => {
    const filteredItems = this.state.data.filter(item =>
      item.id !== id);

    this.setState({
      data: filteredItems,
      clearStorage: filteredItems.length == 0
    })
    localStorage.setItem('data', JSON.stringify(filteredItems));
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  submitHandler = async (e) => {
    // e.preventDefault();
    let itemData = [];
    if (!this.state.subject && !this.state.priority && !this.state.status && !this.state.user && !this.state.assigned_user) {
      alert('Please Fill all the fields.');
    }
    else {
      if (this.state.addData) {
        const newItem = {
          id: this.state.id + 1,
          subject: this.state.subject,
          priority: this.state.priority,
          status: this.state.status,
          user: this.state.user,
          assigned_user: this.state.assigned_user
        }

        itemData = this.state.data ? this.state.data : [];
        itemData.unshift(newItem);

      }
      else if (this.state.editData) {
        itemData = this.state.data;
        itemData.map(item => {
          if (item.id === this.state.id) {
            item.subject = this.state.subject;
            item.priority = this.state.priority;
            item.status = this.state.status;
            item.user = this.state.user;
            item.assigned_user = this.state.assigned_user;
          }
        })
      }
      await this.setState({
        data: itemData,
        subject: '',
        priority: '3',
        status: '1',
        user: '',
        assigned_user: '',
        id: this.state.editData ? this.state.unique_id : this.state.id + 1,
        addData: false,
        editData: false,
        showData: true,
        clearStorage: false
      });
      localStorage.setItem('data', JSON.stringify(itemData));
      localStorage.setItem('id', this.state.editData ? this.state.unique_id : this.state.id);
    }
  }
  clearLocalStorage() {
    localStorage.clear();
    this.setState({
      data: [],
      clearStorage: true
    })
  }

  render() {
    return (
      <div>
        <div>
          <AppBar position='static' style={{ backgroundColor: '#006A69' }}>
            <Toolbar>
              <span style={{ 'font-size': '21px' }}><i className="fa fa-ticket"></i> Support Tickets</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div onClick={this.toggleData}>
                <IconButton edge="start" color="inherit" aria-label="menu">
                  {!this.state.showData ? 'Show Tickets' : 'Create Tickets'}
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
        </div>
        <center>
          <div className={!this.state.showData ? 'addDataForm' : 'showData'} style={{ 'box-shadow': '2px 5px 13px 0px #ccc', 'border': '1px solid #fff', 'border-radius': '10px' }}>
            {
              !this.state.showData ?
                <div>
                  <form onSubmit={(e) => this.submitHandler(e)}>
                    <center>
                      <br /><br />
                      <Typography>Priority</Typography>
                      <Rating
                        name="priority"
                        value={this.state.priority}
                        max={3}
                        onChange={(e) => this.handleChange(e)}
                      /><br /><br />
                      <TextField multiline label='Subject' value={this.state.subject} name='subject' onChange={(e) => this.handleChange(e)} /> <br /><br />
                      <FormControl style={{ 'min-width': '200px' }} disabled={this.state.addData}>
                        <InputLabel>Status</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          name="status"
                          onChange={(e) => this.handleChange(e)}
                          value={this.state.status}
                        >
                          <MenuItem value={1}>Open</MenuItem>
                          <MenuItem value={2}>In Progress</MenuItem>
                          <MenuItem value={3}>Close</MenuItem>
                        </Select>
                      </FormControl><br /><br />
                      <TextField label='User' value={this.state.user} name='user' onChange={(e) => this.handleChange(e)} /><br /><br />
                      <TextField label='Assigned User' value={this.state.assigned_user} name='assigned_user' onChange={(e) => this.handleChange(e)} /><br /><br />
                      <button className='btn'>{this.state.addData ? 'Add' : 'Update'}</button><br /><br />
                    </center>
                  </form>
                </div>
                :

                <TableContainer style={{ 'border-radius': '10px' }}>
                  <FormControlLabel
                    control={
                      <Switch value="checkedA" color="primary" align="right" />
                    }
                    label="Priority"
                  />
                  <Button onClick={this.clearLocalStorage.bind(this)} variant="contained" color="secondary" disabled={this.state.clearStorage}>Clear</Button>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="center">Id</TableCell>
                        <TableCell align="center">Subject</TableCell>
                        <TableCell align="center">Priority</TableCell>
                        <TableCell align="center">Status</TableCell>
                        <TableCell align="center">User</TableCell>
                        <TableCell align="center">Assigned User</TableCell>
                        <TableCell align="center">Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {
                        this.state.data.map(row => (
                          <TableRow hover key={row.id}>
                            <TableCell align="center">{row.id}</TableCell>
                            <TableCell align="center">{row.subject}</TableCell>
                            <TableCell align="center">
                              <Rating
                                name="priority_value"
                                value={row.priority}
                                max={3}
                                readOnly />
                            </TableCell>
                            <TableCell align="center">
                              <FormControl style={{ 'min-width': '100px' }} disabled>
                                <Select
                                  name="statusShow"
                                  value={row.status}
                                >
                                  <MenuItem value={1}>Open</MenuItem>
                                  <MenuItem value={2}>In Progress</MenuItem>
                                  <MenuItem value={3}>Close</MenuItem>
                                </Select>
                              </FormControl>
                            </TableCell>
                            <TableCell align="center">{row.user}</TableCell>
                            <TableCell align="center">{row.assigned_user}</TableCell>
                            <TableCell align="center">
                              <span onClick={() => this.editData(row.id)}>
                                <IconButton>
                                  <EditIcon />
                                </IconButton>
                              </span>
                              <span onClick={() => this.deleteData(row.id)}>
                                <IconButton color='secondary'>
                                  <DeleteIcon />
                                </IconButton>
                              </span>
                            </TableCell>
                          </TableRow>
                        ))
                      }
                    </TableBody>
                  </Table>
                </TableContainer>
            }

          </div>
        </center>
      </div>
    );
  }

}

export default App;
