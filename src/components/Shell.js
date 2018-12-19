import React, { Component } from 'react';
import { Header } from './Header'
export default class Shell extends Component {


  render(props) {
    return (
        <section>
            <Header title="NBA React App"/>
            <main className="main"> 
                <div className="card cardTemplate card-content" >
                    <h2>{this.props.title}</h2>               
                         {this.props.children}
                </div>
            </main>
        </section>
     )
   }
}
