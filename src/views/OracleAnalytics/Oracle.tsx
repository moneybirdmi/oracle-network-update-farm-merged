import React from 'react'
import './index.css'
import Balances from '../Farms/components/Balances'
import Main from '../../components/main'
import { CircularProgress } from '@material-ui/core'

const OracleAnalytics = (props: { account: String, testNetwork: Number, web3Obj: any }) => {
      console.log({ props })
      return <div className="oracle-analytics">
            {/* <Alert severity="warning">
                  Beta testing on Kovan: Contract
                  <Link
                    target="_blank"
                    href={
                      "https://kovan.etherscan.io/address/" + addresses.kovan
                    }
                  >
                    ({addresses.kovan})
                  </Link>{" "}
                </Alert> */}
            <h3>Oracle Analytics</h3>
            <h5>Off-Chain Oracle Analytics and ID</h5>
            <Balances />

            {/* <WalletButton
                  provider={provider}
                  loadWeb3Modal={loadWeb3Modal}
            /> */}

            {props.account && props.testNetwork === 42 ? <Main account={props.account} web3Obj={props.web3Obj} /> : <div className="loading">
                  <CircularProgress />
                      Please connect to metamask and KOVAN network</div>}

      </div>
}


export default OracleAnalytics