import { Request, Response } from "express";
import { JwtAuthorizer } from "../../../services/jwtAuthorizer";
import { BcryptService } from "../../../services/bcryptService";
import { UserDatabase } from "../../../data/userDatabase";
import { ChangePasswordUC } from "../../../business/usecases/user/changePassword";

export const changePasswordEndpoint = async (req: Request, res: Response) => {
  try {
    const uc = new ChangePasswordUC(
      new UserDatabase(),
      new JwtAuthorizer(),
      new BcryptService()
    );

    const result = await uc.execute({
      token: req.headers.auth as string,
      email: req.body.email,
      oldPassword: req.body.oldPassword,
      newPassword: req.body.newPassword
    });

    res.status(200).send(result);
  } catch (err) {
    res.status(err.status || 400).send({
      errMessage: err.message
    });
  }
};