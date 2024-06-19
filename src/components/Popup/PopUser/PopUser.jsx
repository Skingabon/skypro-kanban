import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../../AppRoutes/routing.js";
import * as S from "./popUser.styled.js";

const PopUser = ({ user }) => {
  return (
    <S.HeaderPopUserSet>
      <S.SetUserSetName>{user.name}</S.SetUserSetName>
      <S.SetUserMail>{user.login}</S.SetUserMail>
      <S.PopUserSetTheme>
        <p>Темная тема</p>
        <input type="checkbox" className="checkbox" name="checkbox" />
      </S.PopUserSetTheme>
      <S.ButtonUser>
        <Link to={routes.EXIT}>Выйти</Link>
      </S.ButtonUser>
    </S.HeaderPopUserSet>
  );
};
export default PopUser;
