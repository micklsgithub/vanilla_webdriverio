const outlookRestHelper = require('../../util/outlookRestHelper');
const util = require('util')

/**
 * Set the subject of the email to be verified
 * @param  {String}   value   The value to set the selector to
 */

export default async (value: string) => {
                const delay = ms => new Promise(res => setTimeout(res, ms));
                let emailResponse

                //send request for access token from microsoft rest api
                const secretResponse = await outlookRestHelper.getOutlookSecret();
                //retrieve access token from json response 
                const accessToken = secretResponse.data.access_token;
                
                //retry 25 times to receive successful response for verification email
                for (let i =0; i<25; i++) {   
                    await delay(5000);
                    emailResponse = await outlookRestHelper.getOutlookEmail(accessToken, value)
                    if(! emailResponse.data.value[0]){
                        console.log(value + " - Email request attempt " + i);
                        continue;                        
                    }
                    else {
                    console.log(value + " - Email found");    
                    break;
                    }
                }
                
                //store id of email to delete later
                const emailId = util.inspect(emailResponse.data.value[0].id)
                
                //delete the email from user inbox
                await outlookRestHelper.deleteOutlookEmail(accessToken, emailId)
                }



