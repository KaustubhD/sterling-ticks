export class GlobalConstants{
    public static title : string = 'sterling-ticks';
    public static apiUrl : string = '/sterling-ticks';

	public static URLS = {
		OTP_GENERATE: GlobalConstants.apiUrl + "/otp/generate",
		OTP_VALIDATE: GlobalConstants.apiUrl + "/otp/validate",
		REGISTER: GlobalConstants.apiUrl + "/register",
		GET_PRODUCT: (modelNo: string) => GlobalConstants.apiUrl + "/products/" + modelNo,
		GET_SIMILAR_PRODUCTS: (modelNo: string) => GlobalConstants.apiUrl + "/products/similarProducts?modelNo=" + modelNo,
		LOGIN: GlobalConstants.apiUrl + "/login",
	}
}