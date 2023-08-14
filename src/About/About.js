import React from 'react'

export default function About() {
  return (
    <div id='about'>
        <div className='relic-protocol'>About</div>
        <div className='empowering'>Empowering dApps <br /> with Historical Data</div> <br />
        <p className='about-para'>Relic Protocol provides easy and trustless access to all historiacal Etheruem <br /> states for on-chain applications. By overcoming the limitations of EVM, it <br /> makes building novel applications that use this wealth of data simple.</p><br />
        
        <div className='about-box-boxes'>
        <div className='about-box1'>
            <div className='about-box1-heading'>Trustless</div> <br />
            <p className='about-box1-para'>Through the use of xk-SNARKS and Merkle-Patricia <br /> Trie proofs, Relic Protocol enable cryptographic <br /> verification of any data on-chain. As a result, dApps <br />utilizing the Relic Protocol can access historial data <br /> without trusting any third-party intermediary</p>
        </div> <br />
        <div className='about-box-flex'>
          <div className='about-box2'>
          <div className='about-box1-heading'>Decentralized</div> <br />
            <p className='about-box1-para'>Relic Protocol's smart contaracts are immutable <br/> and permissionless. Anyone can generate a <br/> proof and submit it to the Relic Protocol for <br/> verification </p>
          </div>
          <div className='about-box2'>
          <div className='about-box1-heading'>Scalable</div> <br />
            <p className='about-box1-para'>Through the use of xk-SNARKS and Merkle-Patricia <br /> Trie proofs, Relic Protocol enable cryptographic <br /> verification of any data on-chain. As a result, dApps <br />utilizing the Relic Protocol can access historial data <br /> without trusting any third-party intermediary</p>
          </div>
        </div>
        </div>
     <div>

        </div>
    </div>
  )
}
