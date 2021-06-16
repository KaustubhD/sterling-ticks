export class GlobalConstants{
    public static title : string = 'sterling-ticks';
    public static apiUrl : string = '';

	public static URLS = {
		OTP_GENERATE: GlobalConstants.apiUrl + "/otp/generate",
		OTP_VALIDATE: GlobalConstants.apiUrl + "/otp/validate",
		REGISTER: GlobalConstants.apiUrl + "/register",
		CART : GlobalConstants.apiUrl + "/cart"
	}
}