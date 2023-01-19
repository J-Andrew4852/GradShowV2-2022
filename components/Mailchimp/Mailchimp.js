// IMPORTS ============================================================================== // 

// COMPONENT IMPORTS ==================================================================== // 
import { OutlineBtn } from '../Buttons/Button';

// STYLES =============================================================================== // 
import styles from './mailchimp.module.css'

// OVERVIEW ============================================================================= // 
/* 
Name: Mailchimp
Author: James Andrew

Description: 
- 
*/
import MailchimpSubscribe from "react-mailchimp-subscribe"

const url = "https://gmail.us17.list-manage.com/subscribe/post?u=08de5a22282e1342b3c571f92&amp;id=46c600ac0c&amp;f_id=00ca59e0f0";

const CustomForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () =>
    email &&
    // name &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
      // NAME: name.value
    });

  return (
    <div className={styles.banner_wrapper}>
      <div className={styles.bannerSubContainer}>
      <div  className={styles.formContainer}>
        {/* <input
          style={{ fontSize: "2em", padding: 5 }}
          ref={node => (name = node)}
          type="text"
          placeholder="Your name"
        /> */}
        <div>
          <p className={styles.subMessage}>Subscribe to our Newsletter!</p>
          <input
            style={{ paddingRight: "1" + "em"}}
            ref={node => (email = node)}
            type="email"
            placeholder="Your email"
          />
        </div>
        <div onClick={submit} className={styles.submitBtn} >
          <OutlineBtn text='Submit' height="thin" />
        </div>
        {/* <button style={{ fontSize: "2em", padding: 5 }} onClick={submit}>
          Submit
        </button> */}
      </div>
        {status === "sending" && <div className={styles.statusMessage} >sending...</div>}
        {status === "error" && (
          <div className={styles.statusMessage}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div className={styles.statusMessage}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
      </div>
    </div>
  );
};

// use the render prop and your custom form
export const Mailchimp = () => (
  <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <div className={styles.banner_wrapper}>
        <CustomForm 
          onValidated={formData => subscribe(formData)}
          status={status} 
          message={message}
        />
      </div>
    )}
  />
)
