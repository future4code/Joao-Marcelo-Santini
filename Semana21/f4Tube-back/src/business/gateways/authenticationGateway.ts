export interface AuthenticationGateway {
    generateToken(input: UserInForToken): string;
    getUserInfoFromToken(token: string): UserInForToken;
  }
  
  export interface UserInForToken {
    userId: string;
  }