/**
 * Check if the given URL was opened in a new window
 * @param  {String}   expectedUrl The URL to check for
 */
/* eslint-disable no-unused-vars */
export default async (expectedUrl: string, obsolete: never) => {
/* eslint-enable no-unused-vars */
    /**
     * All the current window handles
     * @type {Object}
     */
    const windowHandles = await browser.getWindowHandles();
    const WindowhandlesLength = windowHandles.length;
  

    // expect(windowHandles).not.toHaveLength(
    //     1,
    //     // @ts-expect-error
    //     'A popup was not opened'
    // );

    /**
     * The last opened window handle
     * @type {Object}
     */
   
    const lastWindowHandle = WindowhandlesLength-1;



    // Make sure we focus on the last opened window handle

   await browser.switchToWindow(windowHandles[lastWindowHandle]);

    /**
     * Get the URL of the current browser window
     * @type {String}
     */
    const windowUrl = await browser.getUrl();

    expect(windowUrl).toContain(
        expectedUrl,
        // @ts-expect-error
        'The popup has a incorrect getUrl'
    );

    await browser.closeWindow();
    
    const firstWindowHandle = (await browser.getWindowHandles()).slice(-1)[0];
    await browser.switchToWindow(firstWindowHandle);
};

