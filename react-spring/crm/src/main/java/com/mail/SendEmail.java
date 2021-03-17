package com.mail;




import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress; 
import javax.mail.internet.MimeMessage; 

/*
 * Reference: https://www.codejava.net/java-ee/javamail/send-e-mail-in-html-format-using-javamail-api
 */

public class SendEmail {
	
	public static void main(String [] args){
		
      String to = "masud.ikbal@domain.com";//change accordingly  
      String from = "noreply@domain.com";//change accordingly  
      String host = "smtp_server";//or IP address  
  
   // message contains HTML markups
      String msg = "<i>Greetings!</i><br>";
      msg += "<b>Wish you a nice day!</b><br>";
      msg += "<font color=red>Duke</font>";
      
      msg = "<p>Welcome and thank you for registering at Sonali Bank Internet Banking. Your account has now been created and you can log in to Sonali Bank Internet Banking by using following User ID and password (N.B.: Please change your Password after the first Login)<p><br>User ID: 9970686@Sonali<br>Password: (auto generated as per Password Policy) has sent to your registered mobile number.<br><br>Please Log in to your account by visiting the following URL: <a\r\n" + 
      		"";
      
      
     //Get the session object  
      Properties properties = System.getProperties();  
      properties.setProperty("mail.smtp.host", host);  
      Session session = Session.getDefaultInstance(properties);   
  
     //compose the message  
      try{  
    	// creates a new e-mail message
         Message message = new MimeMessage(session);  
         message.setFrom(new InternetAddress(from));  
         message.addRecipient(Message.RecipientType.TO,new InternetAddress(to));  
         message.setSubject("Ping");  
         //message.setText("Hello, this is example of sending email  ");  
         message.setContent(msg, "text/html");
         
         // Send message  
         Transport.send(message);  
         System.out.println("message sent successfully....");  
  
      }catch (MessagingException mex) {
    	  mex.printStackTrace();
      }  
    }
	
}