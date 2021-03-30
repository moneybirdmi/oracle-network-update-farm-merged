import React from 'react'
import PageHeader from '../../components/ui/PageHeader'
import chef from '../../assets/img/chef.png'
import SearchComponent from '../../components/search'
import Bird from '../../assets/svgs/bird.svg'
import './index.css'
import Sausages from '../../assets/svgs/sausages.svg'
import Chef from '../../assets/svgs/chef.svg'

const BirdFarmCards: React.FC = () => {
      return (
            <div className="bird-farm-component">
                  <div className="header">
                        <PageHeader
                              icon={<img src={chef} height="120" />}
                              subtitle=""
                              title=""
                        />
                        <SearchComponent />
                  </div>

                  <p className="avatar">
                        <img src={Bird} className="img-fluid" />
                  </p>
                  <h3>Bird Farm</h3>
                  <h5>Deposit BIRD-ETH LP Tokens and earn EGGS</h5>

                  <div className="cards">
                        <div className="farm-card">
                              <img src={Sausages} alt="card-avi" />
                              <p className="price">0.00</p>
                              <p className="note"> Eggs Earned </p>
                              <button>Harvest</button>
                        </div>

                        <div className="farm-card">
                              <img src={Chef} alt="card-avi" />
                              <p className="price">0.00</p>
                              <p className="note">
                                    {' '}
                                    <span>BIRD-ETH UNI-V2 LP</span> Tokens Staked{' '}
                              </p>
                              <button>Approve BIRD-ETH UNI-V2 LP</button>
                        </div>
                  </div>
            </div>
      )
}

export default BirdFarmCards
