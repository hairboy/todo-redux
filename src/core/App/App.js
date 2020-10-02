import React, { Component } from 'react';
import { ConnectedControl as Control } from '../../components/Control/Control';
import { ConnectedList as List } from '../../components/List/List';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {

    render() {

      return(
        <div>
          <Control/>
          <List/>
        </div>
      )
    }

}
