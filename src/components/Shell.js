import React, { Component } from 'react';
import { Header } from './Header'
export default class Shell extends Component {


  render(props) {
    return (
        <section>
            <Header title="PWA React App"/>
            <main className="main">                
                <div className="card cardTemplate card-content" >
                    {this.props.children}
                </div>
            </main>
        </section>
     )
   }
}
