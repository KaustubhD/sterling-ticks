export class GlobalConstants{
    public static title : string = 'sterling-ticks';
    public static apiUrl : string = 'http://localhost:8085/sterling-ticks';
<<<<<<< HEAD

	public static URLS = {
		OTP_GENERATE: GlobalConstants.apiUrl + "/otp/generate",
		OTP_VALIDATE: GlobalConstants.apiUrl + "/otp/validate",
		REGISTER: GlobalConstants.apiUrl + "/register",
		GET_PRODUCT: (modelNo: string) => GlobalConstants.apiUrl + "/products/" + modelNo,
		GET_SIMILAR_PRODUCTS: (modelNo: string) => GlobalConstants.apiUrl + "/products/similarProducts?modelNo=" + modelNo,
		LOGIN: GlobalConstants.apiUrl + "/login",
		ADD_PRODUCT:GlobalConstants.apiUrl + "/products/add",
		EDIT_PRODUCT:GlobalConstants.apiUrl + "/products/edit",
		DELETE_PRODUCT:(modelNo:string)=>GlobalConstants.apiUrl + "/products/"+ modelNo,
        BRAND:GlobalConstants.apiUrl +"/brands"
	}
=======
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
	CART : GlobalConstants.apiUrl + "/cart",
>>>>>>> d7ed6862e98164b7902ec229172c2aec0112ae9b
}