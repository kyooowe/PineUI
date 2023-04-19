//#region Import
import { Request, Response } from "express";
import { SingleApiResponse } from "../../helpers/response.helper";
import jwt from "jsonwebtoken";

import * as dotenv from "dotenv";
import { AccessTokenModel } from "../../models/access_token/access_token.model";
import { IAccessToken } from "../../interface/access_token/access_token.interface";
dotenv.config();
//#endregion

const secretKey = process.env.TOKEN_KEY as string;

const AccessToken = async (req: Request, res: Response) => {

    // Extract headers
    const headerAccessToken = req.headers['accesstoken'] as string

    try {

        // Get user access token
        const userAccessToken = await AccessTokenModel.findOne<IAccessToken>({ accessToken: headerAccessToken })
        
        if (userAccessToken) {

            // Check if access token is expired
            const expirationDate = new Date(userAccessToken.dateExpired)
            const currentDate = new Date()

            if (currentDate > expirationDate)
                return res.status(200).json(
                    SingleApiResponse({
                        success: true,
                        data: null,
                        statusCode: 404,
                        message: 'Access token expired!'
                    })
                )

            // Token Generation
            const token = jwt.sign({ id: userAccessToken.userId.toString() }, `${secretKey}`, {
                expiresIn: "2h"
            });

            return res.status(200).json(
                SingleApiResponse({
                    success: true,
                    data: token,
                    statusCode: 200
                })
            )
        }

        return res.status(200).json(
            SingleApiResponse({
                success: true,
                data: null,
                statusCode: 404,
                message: 'No access token found!'
            })
        )

    } catch (error: unknown) {
        return res.status(500).json(
            SingleApiResponse({
                success: false,
                data: null,
                statusCode: 500
            })
        );
    }
}

export { AccessToken }