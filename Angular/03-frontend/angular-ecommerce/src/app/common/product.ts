export class Product {
    

    

    id: number = Number.NEGATIVE_INFINITY;
    sku: string = "";
    name: string = "";
    description: string = "";
    unitPrice: number = Number.NEGATIVE_INFINITY;
    imageUrl: string = "";
    active: boolean = false;
    unitsInStock: number = Number.NEGATIVE_INFINITY;
    dateCreated: Date = new Date( Date.now() );
    lastUpdated: Date = new Date( Date.now() );

    /*
    
    constructor();

    constructor(sku: string, name: string, description: string, unitPrice: number,
        imageUrl: string, active: boolean, unitsInStock: number, dateCreated: Date, lastUpdated: Date){

            this.sku = sku;
            this.name = name;
            this.description = description;
            this.unitPrice = unitPrice;
            this.imageUrl = imageUrl;
            this.active = active;
            this.unitsInStock = unitsInStock;
            this.dateCreated = dateCreated;
            this.lastUpdated = lastUpdated;
    }

    
    
    
    
    */


    
    
}
