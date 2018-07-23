import React, { Component } from 'react'
import ReactDom from 'react-dom'
import AppRouter from './routers/AppRouter';
import './styles/common.scss'

document.write('<div id="root"></div>')

ReactDom.render(<AppRouter />, document.getElementById('root'))
