import React from 'react'

export default function HowitWorks() {
  return (
    <div id='howitworks'>
        <div className='relic-protocol'>HOW IT WORKS</div>
        <div className='ready-set-action'> Ready, Set, Action!</div>

        <div className='howitworks-content'>
            <div>
                <div className='howitworks-head'>Commitment</div> <br />
                <p className='howitworks-para'>The ZK Prover rolls up historical data on-chain. This process is trustless and enables cheap and <br /> secure access to historical data during verification</p>
                <hr className='line' />
            </div>

            <div>
                <div className='howitworks-head'>Verification</div><br />
                <p className='howitworks-para'>The user verifies the historical data that has been stored on-chain and creates a Fact. The Fact <br /> is a cryptographic proof that can be used to prove the authentication and validity of the data</p>
                <hr className='line' />
            </div>

            <div>
                <div className='howitworks-head'>Access</div><br />
                <p className='howitworks-para'>The dApp contract uses the Fact to access the stored historical data. This ensures that the data <br />is correct and cannot be manipulated or tampered by anyone.</p>
                <hr className='line'/>
            </div>

        </div>
    </div>
  )
}
