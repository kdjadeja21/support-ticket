import React from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import { AppBar, TextField, Typography, FormControl, MenuItem, InputLabel, Select, Toolbar, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { Delete as DeleteIcon, Edit as EditIcon } from '@material-ui/icons';
import Rating from '@material-ui/lab/Rating';

class App extends React.Component {

  state = {
    addData: true,
    editData: true,
    id: 0,
    subject: '',
    priority: '3',
    status: '1',
    user: '',
    assigned_user: '',
    data: []
  }

  toggleData = () => {
    this.setState({
      addData: !this.state.addData,
      editData: !this.state.editData
    })
  }
  editData = async (id) => {
    const filteredItems = this.state.data.filter(item =>
      item.id === id);
    console.log(filteredItems);
    await this.setState({
      addData: false,
      editData: true,
      id: id,
      subject: filteredItems.subject,
      priority: filteredItems.priority,
      status: filteredItems.status,
      user: filteredItems.user,
      assigned_user: filteredItems.assigned_user
    })
  }
  deleteData = id => {
    const filteredItems = this.state.data.filter(item =>
      item.id !== id);
    this.setState({
      data: filteredItems
    })
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  submitHandler = (e) => {
    e.preventDefault();
    if (!this.state.subject && !this.state.priority && !this.state.status && !this.state.user && !this.state.assigned_user) {
      alert('Please Fill all the fields.');
    }
    else {
      const newItem = {
        id: this.state.id + 1,
        subject: this.state.subject,
        priority: this.state.priority,
        status: this.state.status,
        user: this.state.user,
        assigned_user: this.state.assigned_user
      }
      const itemData = this.state.data ? this.state.data : [];
      itemData.push(newItem);
      this.setState({
        data: itemData,
        subject: '',
        priority: '3',
        status: '1',
        user: '',
        assigned_user: '',
        id: this.state.id + 1
      });
    }
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <div>
          <AppBar position='static' style={{ backgroundColor: '#006A69' }}>
            <Toolbar>
              <span style={{ 'font-size': '21px' }}><i className="fa fa-ticket"></i> Support Tickets</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div onClick={this.toggleData}>
                <IconButton edge="start" color="inherit" aria-label="menu">
                  {this.state.addData ? 'Show Tickets' : 'Create Tickets'}
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
        </div>
        <center>
          <div className={this.state.addData ? 'addDataForm' : 'showData'} style={{ 'box-shadow': '2px 5px 13px 0px #ccc', 'border': '1px solid #fff', 'border-radius': '10px' }}>
            {
              this.state.addData || this.state.editData ?
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
                      <TextField multiline label='Subject' name='subject' onChange={(e) => this.handleChange(e)} /> <br /><br />


                      <FormControl style={{ 'min-width': '200px' }} disabled={this.state.addData}>
                        <InputLabel>Status</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          name="status"
                          onChange={(e) => this.handleChange(e)}
                          value={1}
                        >
                          <MenuItem value={1}>Open</MenuItem>
                          <MenuItem value={2}>In Progress</MenuItem>
                          <MenuItem value={3}>Close</MenuItem>
                        </Select>
                      </FormControl><br /><br />
                      <TextField label='User' name='user' onChange={(e) => this.handleChange(e)} /><br /><br />
                      <TextField label='Assigned User' name='assigned_user' onChange={(e) => this.handleChange(e)} /><br /><br />
                      <button className='btn'>{this.state.addData ? 'Add' : 'Update'}</button><br /><br />
                    </center>
                  </form>
                </div>
                :
                <TableContainer style={{ 'border-radius': '10px' }}>
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
                            <TableCell align="center">{row.status}</TableCell>
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
