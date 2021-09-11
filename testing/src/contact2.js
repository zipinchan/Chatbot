import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Contact extends Component{
    render(){
        return(
    
    <body>
    <div class="contact">
    <form action="insert_feedback.php"  method= "POST">

      <p> The Date and Time now is <span id='Time_stamp'> </span> . </p>
        <div>
      <label for="uname">Name: </label>
      <input type="text" placeholder="Enter your name" name="Name" id="uname"  />
            </div>

      <label for="phone">Phone Number: </label>
      <input type="number" placeholder="Phone number" name="Phone" id="phone"  />

      <label for="email">Email: </label>
      <input type="email" placeholder="Email" name="Email" id="email"/>
      

      <label for="feedback">Feedback: </label>
      <input type="text" placeholder="Insert your feedback" name="Feedback" id="feedback" ref={register({ maxLength:255})} />
      

      <button type="submit">Submit</button>

    </form>
    </div>
    </body>
  )
}

/*<script>
  var dt = new Date();
  document.getElementById('Time_stamp').innerHTML=dt;
</script>*/
      
}
export default contact2;