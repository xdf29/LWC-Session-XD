import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {

    contacts = [
        {id: 1, firstname: 'John', lastname: 'Doe'},
        {id: 2, firstname: 'Alex', lastname: 'Morgan'},
        {id: 3, firstname: 'Eden', lastname: 'Hazard'}
    ]

}