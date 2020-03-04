import React from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import AppHeader from './components/AppHeader';
import ShowData from './components/ShowData';
import AddData from './components/AddData';

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
      clearStorage: (localStorage.getItem('data') && JSON.parse(localStorage.getItem('data')).length === 0) || !localStorage.getItem('data') ? true : false
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
      clearStorage: filteredItems.length === 0
    })
    localStorage.setItem('data', JSON.stringify(filteredItems));
  }
  handleBlur = (e) => {
    this.setState({ [e.target.name]: e.target.value.trim() });
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
      id: 0,
      data: [],
      clearStorage: true
    })
  }

  render() {
    return (
      <div>
        <AppHeader
          toggleFunction={this.toggleData}
          showData={this.state.showData}
        />
        <center>
          <div className={!this.state.showData ? 'addDataForm' : 'showData'} style={{ 'box-shadow': '2px 5px 13px 0px #ccc', 'border': '1px solid #fff', 'border-radius': '10px' }}>
            {
              !this.state.showData ?
                <AddData
                  Data={this.state}
                  Handleblur={this.handleBlur.bind(this)}
                  HandleChange={this.handleChange.bind(this)}
                  SubmitHandler={this.submitHandler.bind(this)}
                />
                :
                <ShowData
                  ClearStorage={this.clearLocalStorage.bind(this)}
                  Data={this.state.data}
                  ClearStorageBool={this.state.clearStorage}
                  EditData={this.editData.bind(this)}
                  DeleteData={this.deleteData.bind(this)}
                />

            }

          </div>
        </center>
      </div>
    );
  }

}

export default App;
