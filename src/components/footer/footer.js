import React from 'react'
import styles from './footer.module.css';

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.vector}></div>
      <div className={styles.footerTextContainer}>
        <span className={styles.footerHeading}>Leverage technology to streamline credit-linked insurance</span>
        <span className={styles.footerSubHeading}>Share a few quick details to understand how we can best help.</span>
        <button className={styles.footerCTAButton}>Let's Talk</button>
      </div>
      <div className={styles.footerContactComponent}>
        <div className={styles.footerEndHeader}>
          <div className={styles.footerBrandLogo}></div>
          <div className={styles.footerSocials}></div>
        </div>
        <hr className={styles.thinLine} />
        <div className={styles.footerContactsOuterContainer}>
          <div className={styles.footerContactLinksContainer}>
            <ul className={styles.linkItemContainer}>
              <li className={styles.linkItemsHeading}>Products</li>
              <li className={styles.linkItems}>Retail Insurance</li>
              <li className={styles.linkItems}>LendPro</li>
              <li className={styles.linkItems}>EmbedPro</li>
              <li className={styles.linkItems}>Console</li>
            </ul>
            <ul className={styles.linkItemContainer}>
              <li className={styles.linkItemsHeading}>Industries</li>
              <li className={styles.linkItems}>InsuranceBrokers</li>
              <li className={styles.linkItems}>Banks</li>
              <li className={styles.linkItems}>NBFCS</li>
              <li className={styles.linkItems}>Fintech</li>
              <li className={styles.linkItems}>Embedded Insurance</li>
            </ul>
            <ul className={styles.linkItemContainer}>
              <li className={styles.linkItemsHeading}>Other</li>
              <li className={styles.linkItems}>About Us</li>
              <li className={styles.linkItems}>Careers</li>
              <li className={styles.linkItems}>News & Media</li>
              <li className={styles.linkItems}>APIs</li>
              <li className={styles.linkItems}>Case Studies</li>
              <li className={styles.linkItems}>Blogs</li>
              <li className={styles.linkItems}>Faqs</li>
            </ul>
            <ul className={styles.linkItemContainer}>
              <li className={styles.linkItemsHeading}>Get in touch</li>
              <li className={styles.linkItems}><input type="text" placeholder='info@youremailid' /></li>
              <li className={styles.linkItems}><input type="text" placeholder='Phone no' /></li>
              <li><button className={styles.submitButton}>Contact us</button></li>
            </ul>
          </div>
        </div>
        <hr className={styles.thinLine1} />
        <div className={styles.footerEndTrademark}> ⓒ2024 Webomindapps. Privacy Policy</div>
      </div>
    </div>
  )
}

export default Footer
