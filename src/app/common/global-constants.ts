import { environment } from "src/environments/environment";
export class GlobalConstants{
    public static title : string = 'sterling-ticks';
	public static apiUrl : string = environment.apiUrl;
}

export const URLS = {
	OTP_GENERATE: GlobalConstants.apiUrl + "/otp/generate",
	OTP_VALIDATE: GlobalConstants.apiUrl + "/otp/validate",
	REGISTER: GlobalConstants.apiUrl + "/register",
	BRANDS: GlobalConstants.apiUrl + "/brands",
	COLLECTIONS: GlobalConstants.apiUrl + "/collections",
	PRODUCT_LIST: (brand?: string, collection?: string) => {
		let url = new URL(GlobalConstants.apiUrl + "/products")
		brand && url.searchParams.append("brandName", brand)
		collection && url.searchParams.append("collectionName", collection)
		return url.toString()
	},
	GET_PRODUCT: (modelNo: string) => GlobalConstants.apiUrl + "/products/" + modelNo,
	GET_SIMILAR_PRODUCTS: (modelNo: string) => GlobalConstants.apiUrl + "/products/similarProducts?modelNo=" + modelNo,
	LOGIN: GlobalConstants.apiUrl + "/login",
	ADD_PRODUCT:GlobalConstants.apiUrl + "/products/add",
    EDIT_PRODUCT:GlobalConstants.apiUrl + "/products/edit",
	DELETE_PRODUCT:(modelNo:string) => GlobalConstants.apiUrl + "/products/"+ modelNo,
	CART : (userName: string) => GlobalConstants.apiUrl + `/orders/cart?userName=${userName}`,
	UPDATE_CART: GlobalConstants.apiUrl + "/orders/cart",
	QUANTITY_IN_CART: (userName: string, modelNo: string) => {
		let url = new URL(GlobalConstants.apiUrl + "/orders/cart/quantity")
		userName && url.searchParams.append("userName", userName)
		modelNo && url.searchParams.append("modelNo", modelNo)
		return url.toString()
	}
}