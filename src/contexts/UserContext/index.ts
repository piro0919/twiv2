import { createContext } from "react";

const UserContext = createContext({
  user: {
    email: "",
    name: "",
    photoUrl: "",
    uid: "",
  },
});

export default UserContext;
