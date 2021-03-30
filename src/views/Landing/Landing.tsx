import React from 'react'
import { Switch } from 'react-router-dom'
import Page from '../../components/ui/Page'
import { makeStyles } from '@material-ui/core/styles'
import PageHeader from '../../components/ui/PageHeader'
import './index.css'
import Bird from '../../assets/svgs/bird.svg'
import metamaskLogo from '../../assets/svgs/metamask-icon.svg'
import walletConnectLogo from '../../assets/img/wallet-connect.svg'
import { ArrowForward } from '@material-ui/icons'
import { useWallet } from 'use-wallet'

const Landing: React.FC = () => {
      const { account, connect } = useWallet()

      return (
            <div className="landing">
                  <div className="heading-text">
                        <div className="text">
                              <h2>Home</h2>
                              <span>Get Started</span>
                        </div>
                        <button className="connect-wallet">Connect to a wallet</button>
                  </div>

                  <div className="connector-card">
                        <h4>Get started by connecting your wallet</h4>
                        <div className="wallet-list-card">
                              <p className="avatar">
                                    <img src={Bird} className="img-fluid" />
                              </p>
                              <h6>Connect Wallet</h6>
                              <span className="sub-text">Select a wallet provider</span>
                              <button className="network-option" onClick={() => { connect('injected') }}>
                                    <p className="networkname">
                                          <img src={metamaskLogo} />
                                          <span>MetaMask</span>
                                    </p>
                                    <ArrowForward />
                              </button>

                              <button className="network-option second" onClick={() => { connect('walletconnect') }}>
                                    <p className="networkname">
                                          <img src={walletConnectLogo} />
                                          <span>Wallet Connect</span>
                                    </p>
                                    <ArrowForward />
                              </button>

                              <div className="cardfooter">
                                    <p>
                                          By connecting i accept Bird Money{' '}
                                          <span className="terms">Terms of service</span>
                                    </p>
                              </div>
                        </div>
                  </div>
            </div>
      )
}
export default Landing
