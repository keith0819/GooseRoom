import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import TopPage from '../components/TopPage'
import DetailPage from '../components/DetailPage'
import NotFound from '../components/NotFound'
import AboutPage from '../components/AboutPage'
import PostPage from '../components/PostPage'
import PrivacyPolicy from '../components/PrivacyPolicy'

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={TopPage} exact={true} />
      <Route path="/about" component={AboutPage} />
      <Route path="/detail" component={DetailPage} />
      <Route path="/post" component={PostPage} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter