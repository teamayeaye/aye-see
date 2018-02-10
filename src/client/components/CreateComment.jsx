import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class CreateComment extends Component{
  constructor(props){
    super(props)
    this.state = {caption:'',photo:null}
    this.handleFileChange = this.handleFileChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCaption = this.handleCaption.bind(this);
  }

  handleFileChange(file){
    this.setState({photo:file[0]})
  }

  handleCaption(caption){
    this.setState({caption:caption})
  }

  handleSubmit(){
    let formData = new FormData()
    let post_body = Object.assign({}, this.props.dataInject, this.state)
    for(let i in post_body){
      formData.append(i,post_body[i])
    }
    
    fetch('/newComment',{
      method: 'POST',
      body: formData
    }).then(res => res.json())
      .then(data => {console.log(data)})
  }
  

  //fields post_id,user_id
  render(){
    return(
      <Paper>
        <input
          type='file'
          onChange={(e)=>{this.handleFileChange(e.target.files)}}
          name='photo'/>
          <TextField
            onChange={(e)=>{this.handleCaption(e.target.value)}}
            floatingLabelText="Caption"/>
            <RaisedButton
              label='Submit'
              primary={true}
              onClick={this.handleSubmit}/>
      </Paper>
    )
  }
}


