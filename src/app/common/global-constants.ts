export class GlobalConstants{
    public static title : string = 'sterling-ticks';
    public static apiUrl : string = 'http://localhost:8085/sterling-ticks';

	public static URLS = {
		OTP_GENERATE: GlobalConstants.apiUrl + "/otp/generate",
		OTP_VALIDATE: GlobalConstants.apiUrl + "/otp/validate",
		REGISTER: GlobalConstants.apiUrl + "/register",
		LOGIN: GlobalConstants.apiUrl + "/login",
		ADD_PRODUCT:GlobalConstants.apiUrl + "/products/add",
		EDIT_PRODUCT:GlobalConstants.apiUrl + "/products/edit",
		DELETE_PRODUCT:(modelNo:string)=>GlobalConstants.apiUrl + "/products/delete/"+ modelNo,
        BRAND:GlobalConstants.apiUrl +"/brands"
	}
}