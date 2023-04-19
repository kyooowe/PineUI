import { model, Schema } from "mongoose";
import { IAccessToken } from "../../interface/access_token/access_token.interface";

// Add 7 days in current date
const today = new Date();
const result = new Date().setDate(today.getDate() + 7);

//#region Schema and Model
const accessTokenSchema = new Schema<IAccessToken>({
	userId: { type: String, required: true },
	accessToken: { type: String, required: true },
	dateCreated: { type: Date, default: Date.now() },
	dateExpired: { type: Date, default: result }
});

const AccessTokenModel = model<IAccessToken>("AccessToken", accessTokenSchema);
//#endregion

export { AccessTokenModel };
