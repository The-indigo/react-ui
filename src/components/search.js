import React from 'react';

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state={
            query:'',
            results:{},
            loading:false,
            message: ''
        }
    }

    handleOnInput=(event)=>{
        const query=event.target.value;
        this.setState({query:query,loading:true,message:''})
    }
    render(){  
        //Using object destructuring from this.state
        //this is same as const query=this.state.query
    const{ query }=this.state;
      return (
        <div className="container">
            <h2 className="heading">
                Search
            </h2>
            <label className="search-label" htmlFor="search-input">
                <input type="text" 
                value={query} 
                id="search-input" 
                placeholder="Search for patients"
                onChange={this.handleOnInput}
                /> 
                
                
            </label>
        </div>
    )
}
}

export default Search