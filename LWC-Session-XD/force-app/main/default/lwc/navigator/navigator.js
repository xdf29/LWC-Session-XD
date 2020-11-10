import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
//Documentation on Create Record With Default Values
//https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.use_navigate_default
import { encodeDefaultFieldValues } from 'lightning/pageReferenceUtils';

export default class NavigationDemo extends NavigationMixin(LightningElement) {

    defaultValues = {
        FirstName: 'John',
        LastName:'Doe'
    }

    createContact(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'new'
            },
            state: {
                defaultFieldValues: encodeDefaultFieldValues(this.defaultValues)
            }
        })
    }

    editContact(e){
        const contactId = e.target.dataset.contactId
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                objectApiName: 'Contact',
                recordId: contactId,
                actionName: 'edit'
            }
        })
    }

    viewContact(e){
        const contactId = e.target.dataset.contactId
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                objectApiName: 'Contact',
                recordId: contactId,
                actionName: 'view'
            }
        })
    }

    navigateWebURL(e){
        const webUrl = e.target.dataset.webUrl
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                    url: webUrl
            }
        })
    }
}