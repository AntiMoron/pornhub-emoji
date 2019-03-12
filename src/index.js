/**
 * 生成图片
 * @param {string} firstWord 第一个单词
 * @param {string} secondWord 第二个单词
 */
import { saveAs } from 'file-saver';
import domtoimage from 'dom-to-image';

export function generate(firstWord, secondWord) {
    const containerDOM = document.querySelector('#container');
    const firstDOM = document.querySelector('#first');
    const secondDOM = document.querySelector('#second');
    firstDOM.innerHTML = firstWord;
    secondDOM.innerHTML = secondWord;
    domtoimage.toBlob(containerDOM).then(blob => {
        saveAs(blob, "NSFW.png");
    });
}

window.generate = generate;