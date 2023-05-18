import type { Selector } from 'webdriverio';

export default async(filename: string, selector: Selector) => {

        const filePath = './src/support/sampleFiles/'+filename;
        const remoteFilePath = await browser.uploadFile(filePath);

        await $(selector).setValue(remoteFilePath);

}