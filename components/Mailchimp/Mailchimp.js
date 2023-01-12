// IMPORTS ============================================================================== // 

// COMPONENT IMPORTS ==================================================================== // 

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
  let email, name;
  const submit = () =>
    email &&
    name &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
      NAME: name.value
    });

  return (
    <div className={styles.banner_wrapper}>
      <div  className={styles.formContainer}>
        <input
          style={{ fontSize: "2em", padding: 5 }}
          ref={node => (name = node)}
          type="text"
          placeholder="Your name"
        />
        <br />
        <input
          style={{ fontSize: "2em", padding: 5 }}
          ref={node => (email = node)}
          type="email"
          placeholder="Your email"
        />
        <br />
        <button style={{ fontSize: "2em", padding: 5 }} onClick={submit}>
          Submit
        </button>
        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {status === "error" && (
          <div
            style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            style={{ color: "green" }}
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
