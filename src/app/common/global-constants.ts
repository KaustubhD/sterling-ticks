export class GlobalConstants{
    public static title : string = 'sterling-ticks';
    public static apiUrl : string = '';

	public static URLS = {
		OTP_GENERATE: GlobalConstants.apiUrl + "/otp/generate",
		OTP_VALIDATE: GlobalConstants.apiUrl + "/otp/validate",
		REGISTER: GlobalConstants.apiUrl + "/register",
		ADD_PRODUCT:GlobalConstants.apiUrl + "/product/add",
		EDIT_PRODUCT:GlobalConstants.apiUrl + "/product/edit",
		DELETE_PRODUCT:GlobalConstants.apiUrl + "/product/delete",
		SEARCH_BRAND:GlobalConstants.apiUrl + "/product/brand"
	}
}