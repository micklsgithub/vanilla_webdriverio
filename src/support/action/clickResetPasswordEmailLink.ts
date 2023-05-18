const outlookRestHelper = require('../../util/outlookRestHelper');
const util = require('util')

export default async (subject: string) => {               
                const delay = ms => new Promise(res => setTimeout(res, ms));
                let emailResponse;

                //send request for access token from microsoft rest api
                const secretResponse = await outlookRestHelper.getOutlookSecret();
                //retrieve access token from json response 
                const accessToken = secretResponse.data.access_token;

                
                //retry 25 times to receive successful response for verification email
                for (let i =0; i<25; i++) {    
                    await delay(5000);
                    emailResponse = await outlookRestHelper.getOutlookEmailWithLink(accessToken, subject);
                    if(! emailResponse.data.value[0]){
                        console.log("Password reset Email request attempt " + i);
                        continue;                        
                    }
                    else {
                    console.log("Password reset Email found");    
                    break;
                    }
                }
                
                //When a successful email response received, parse json for email body
                const outlookEmail = util.inspect(emailResponse.data.value[0].body.content);
                
                //store id of email to delete later
                const emailId = util.inspect(emailResponse.data.value[0].id);
                
                //use regex to parse email body for email verify url 
                const verifyUrlRegex = /(https?:\/\/)?([\da-z\.-=%-]+)\.([a-z]{2,6}(?=.*reset))([\/\w\.-=%-]*)*\/?/g
                const emailUrl = outlookEmail.match(verifyUrlRegex); 
                
                //access the verification url in the email
                await browser.url(emailUrl.toString());

                //delete the email from user inbox
                await outlookRestHelper.deleteOutlookEmail(accessToken, emailId);

                }



