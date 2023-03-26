import React from 'react'
import './Footer.css'
import insta from '../../images/insta.svg'
import linkedin from '../../images/linkedin.svg'

function Footer({name}) {
  return (
    <>
        <div class="footer">
            <div class="left-footer">
                <ul>
                    <li>Prompt Generator</li>
                    <li>{name} Daily</li>
                    <li>All Contributors</li>
                    <li>Your Data on {name}.io</li>
                    <li>Contribute to {name}</li>
                </ul>
            </div>
            <div class="right-footer">
                <ul>
                    <li>{name}.io</li>
                    <li>Made with love in India</li>
                    <li>
                        <img src={insta} alt=""/>
                        <img src={linkedin} alt=""/>
                    </li>
                    <li className='takespace'></li>
                    <li>hello@{name}.io</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Footer