class product{
    constructor(id,name,price,code,Man_date,exp_date,shopId,Quantity){
        this.id = id;
        this.name = name;
        this.price = price;
        this.code = code;
        this.Man_date = Date.now();
        this.exp_date = Date.now();
        this.shopId = shopId;
        this.Quantity = Quantity;
    }
}