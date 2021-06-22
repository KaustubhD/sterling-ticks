export class PlaceOrderModel{
    public userName: string;
    public addressId: number;
    public transaction: TransactionModel = new TransactionModel();
}

export class TransactionModel{
    public paymentMethodId: number;
    public amount: number;
}