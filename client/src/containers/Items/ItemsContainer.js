import React, { Component } from 'react';
import Items from './Items';

class ItemsContainer extends Component {
  constructor(){
    super();
    this.state = {
      isLoading: false,
      itemsData: []
    }
  }

  componentDidMount(){
    const urls = ["localhost:3000/items","localhost:3000/users"]
  }
  
  render() {
    return (
      <div>
        <Items />
      </div>
    );
  }
}

export default ItemsContainer;