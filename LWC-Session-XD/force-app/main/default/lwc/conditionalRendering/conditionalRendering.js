import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {

    showText = false

    showTextClicked(){
        this.showText = true
    }

}