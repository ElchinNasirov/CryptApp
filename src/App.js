import React from 'react'
import { Switch, Route } from 'react-router-dom';
import "./App.css";
import { Layout, Space, Typography } from 'antd';

import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Exchanges from './components/Exchanges';
import Cryptocurrencies from './components/Cryptocurrencies';
import CryptoDetailes from './components/CryptoDetailes';
import News from './components/News';
import { Link } from 'react-router-dom';

const App = () => {
    return (
        <div className='app'>

            <div className='navbar'>
                <Navbar />
            </div>

            <div className='main'>
                <Layout>
                    <div className='routes'>
                        <Switch>
                            <Route exact path='/'>
                                <HomePage />
                            </Route>

                            <Route exact path='/exchanges'>
                                <Exchanges />
                            </Route>

                            <Route exact path='/cryptocurrencies'>
                                <Cryptocurrencies />
                            </Route>

                            <Route exact path='/crypto/:cryptoId'>
                                <CryptoDetailes />
                            </Route>

                            <Route exact path='/news'>
                                <News />
                            </Route>
                        </Switch>
                    </div>
                </Layout>

                <div className='footer'>
                    <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }} >
                        CryptApp <br />
                        All Rights Reserved
                    </Typography.Title>
                    <Space>
                        <Link to='/'> Home Page </Link>
                        <Link to='/exchanges'> Exchanges </Link>
                        <Link to='/news'> News </Link>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default App;