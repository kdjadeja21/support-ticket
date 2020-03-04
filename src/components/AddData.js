import React from 'react';
import { TextField, Typography, FormControl, MenuItem, InputLabel, Select } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

export default class AddData extends React.Component {
    handleChange(e) {
        this.props.HandleChange(e);
    }

    submitHandler(e) {
        this.props.SubmitHandler(e);
    }
    render() {
        return (
            <div>
                <form onSubmit={(e) => this.submitHandler(e)}>
                    <center>
                        <br /><br />
                        <Typography>Priority</Typography>
                        <Rating
                            name="priority"
                            value={this.props.Data.priority}
                            max={3}
                            onChange={(e) => this.handleChange(e)}
                        /><br /><br />
                        <TextField multiline label='Subject' value={this.props.Data.subject} name='subject' onChange={(e) => this.handleChange(e)} /> <br /><br />
                        <FormControl style={{ 'min-width': '200px' }} disabled={this.props.Data.addData}>
                            <InputLabel>Status</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name="status"
                                onChange={(e) => this.handleChange(e)}
                                value={this.props.Data.status}
                            >
                                <MenuItem value={1}>Open</MenuItem>
                                <MenuItem value={2}>In Progress</MenuItem>
                                <MenuItem value={3}>Close</MenuItem>
                            </Select>
                        </FormControl><br /><br />
                        <TextField label='User' value={this.props.Data.user} name='user' onChange={(e) => this.handleChange(e)} /><br /><br />
                        <TextField label='Assigned User' value={this.props.Data.assigned_user} name='assigned_user' onChange={(e) => this.handleChange(e)} /><br /><br />
                        <button className='btn'>{this.props.Data.addData ? 'Add' : 'Update'}</button><br /><br />
                    </center>
                </form>
            </div>
        )
    }
}