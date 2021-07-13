import React from 'react';


class Footer extends React.Component {
  constructor(){
    super();
    this.state = {
      name: "dogs",
      selected: "0",
      showfooter: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.ShowFooter = this.ShowFooter.bind(this)
  }

  handleChange(event){
    const {name, value} = event.target;
    this.setState({[name]: value})
    this.setState({selected: value}) 
  }

  ShowFooter(){
    this.setState({showfooter: !this.state.showfooter})
  }

  render(){
    return (
     <div> 
       
     </div>
    );
  }

}

export default Footer;