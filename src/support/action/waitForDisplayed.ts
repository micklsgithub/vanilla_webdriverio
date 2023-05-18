import type { Selector } from 'webdriverio';

/**
 * Wait for the given element to become visible
 * @param  {String}   selector      Element selector
 * @param  {String}   falseCase     Whether or not to expect a visible or hidden state
 *
 * @todo  merge with waitfor
 */
export default async (selector: Selector, falseCase: any) => {
    /**
     * Maximum number of milliseconds to wait, configured in conf.ts
     * @type {Int}
     */
    const ms = browser.options.waitforTimeout;

    await $(selector).waitForDisplayed({
    timeout: ms,
    reverse: Boolean(falseCase),
    });

    
};
