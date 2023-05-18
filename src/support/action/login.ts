export default async (username: string, pass: string) => {

    //Load the login page
    await browser.url(browser.options.baseUrl + 'user/login')
    //check the current url
    const currentUrl = await browser.getUrl();
    
    //check if the currenturl is the login page, which it won't be if the user is already logged in.
    if(currentUrl == browser.options.baseUrl + 'user/login') {
            //If the current session is not logged in
            //locate email field and enter the users email address
            const email = await $('#edit-name');
            await email.setValue(username);

            //locate password field and enter the users password
            const password = await $('#edit-pass');
            await password.setValue(pass);

            //click the sign in button
            const signIn = await $('#edit-submit');
            await signIn.click();
    }
    else
        console.log('User is already logged in')

}