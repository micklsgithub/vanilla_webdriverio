import type { Selector } from 'webdriverio';

import checkIfElementExists from '../lib/checkIfElementExists';
const dateTime = require('../../util/dateTime');

/**
 * Set the value of the given input field to a new value or add a value to the
 * current selector value
 * @param  {String}   method  The method to use (add or set)
 * @param  {String}   value   The value to set the selector to
 * @param  {String}   selector Element selector
 */
export default async (method: string, value: string, selector: Selector) => {
    /**
     * The command to perform on the browser object (addValue or setValue)
     * @type {String}
     */
    const command = (method === 'add') ? 'addValue' : 'setValue';

    let checkValue = await dateTime.getdateTime(value);

    await checkIfElementExists(selector, false, 1);

    await $(selector)[command](checkValue);
};
