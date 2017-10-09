export class Person {
    id: number;
    accountId: number;
    additionalInfo: string;
    additionalPhone: string;
    address: string;
    birthDay: any;
    birthMonth: any;
    birthYear: any;
    cardAvailability: boolean;
    cardNumber: any;
    contactPerson: string;
    description: string;
    divisionNumber: any;
    email: any;
    gender: string;
    howDidYouKnowAnother: string;
    howDidYouKnowId: any;
    name: string;
    phone: string;
    tabNumber: number;

    constructor(values: Object = {}){
        Object.assign(this, values);
    }

}
