import {
    AuthenticationGateway,
    UserInForToken
  } from "../business/gateways/authenticationGateway";
  import * as jwt from "jsonwebtoken";
  
  export class JwtAuthorizer implements AuthenticationGateway {
    private SECRET_KEY = "BATATINHA";
    private expiresIn = "10h";
  
    public generateToken(input: UserInForToken): string {
      const token = jwt.sign(
        {
          userId: input.userId
        },
        this.SECRET_KEY,
        {
          expiresIn: this.expiresIn
        }
      );
  
      return token;
    }
  
    public getUserInfoFromToken(token: string): UserInForToken {
      const result = jwt.verify(token, this.SECRET_KEY) as UserInForToken; 
      return {
        userId: result.userId
      };
    }
  }