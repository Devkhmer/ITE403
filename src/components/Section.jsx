import React, { Component } from 'react'
import Products from './section/Products.jsx'
import Details from './section/Details.jsx'
import {Route} from "react-router-dom"
import Cart from './section/Cart.jsx'
import Payment from './section/Payment.jsx'
import About from './section/About.jsx'
import Contact from './section/Contact.jsx'
import Login from './section/Login.jsx'


export class Section extends Component {
    render() {
        return (
            <div>
                <section>
                <Route path="/" component={Products} exact />
                <Route path="/product" component={Products} exact />
                <Route path="/product/:id" component={Details} />
                <Route path="/cart" component={Cart} />
                <Route path="/payment" component={Payment} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/login" component={Login} />
                </section>
            </div>
        )
    }
}

export default Section
