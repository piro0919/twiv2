import React, { FC } from "react";
import { Props } from "react-firebaseui";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

export type SignInProps = Pick<Props, "firebaseAuth" | "uiConfig">;

const SignIn: FC<SignInProps> = ({ firebaseAuth, uiConfig }: SignInProps) => (
  <StyledFirebaseAuth firebaseAuth={firebaseAuth} uiConfig={uiConfig} />
);

export default SignIn;
