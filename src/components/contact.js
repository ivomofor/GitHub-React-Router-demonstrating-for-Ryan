import React from 'react';

function Contact(){
  return(
    <>
      <div className="App">
        <h1>Contact page</h1>
      hello ivo we will like to inform that you your interview has been scheduled for tomorrow thuesday at 
          one pm propmt and you will be intervied by doctor blabalblaaa
          hello ivo we will like to inform that you your interview has been scheduled for tomorrow thuesday at 
          one pm propmt and you will be intervied by doctor blabalblaaa
          hello ivo we will like to inform that you your interview has been scheduled for tomorrow thuesday at 
          one pm propmt and you will be intervied by doctor blabalblaaa<br/>
          <br/>
          <form>
            <legend>contact form<br/>
              <lable htmlFor="name">Name: <input type="text" name="name"/></lable><br/>
              <lable htmlFor="email">Email: <input type="email" name="email"/></lable><br/>
              <lable htmlFor="password">Password: <input type="password" name="password"/></lable><br/>
            </legend>
            <legend>Text<br/>
              <label htmlFor="text">Text Area</label><textarea name="text"></textarea><br/>
              <label htmlFor="select">Select Area</label>
                <select name="select">
                <option value="zero" selected>zero</option>
                  <option value="one">one</option>
                  <option value="two">two</option>
                </select><br/>
                <input type="checkbox"/> check it <br/>
                <input type="checkbox"/> check one more <br/>
                <input type="checkbox"/> check some more <br/>
                <input type="radio"/> yes 
                <input type="radio"/> no 

            </legend>
            <input type="reset"/>
          </form>
      </div>
    </>
  )
}

export default Contact;