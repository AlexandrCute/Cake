import { FC, useEffect, useState } from "react";

const Profile: FC = () => {
  const [profileData, setProfileData] = useState({
    login: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const loggedUser = users.find(
      (user: { login: string | null }) =>
        user.login === localStorage.getItem("username"),
    );
    if (loggedUser) {
      setProfileData({
        login: loggedUser.login || "Не указано",
        firstName: loggedUser.firstName || "Не указано",
        lastName: loggedUser.lastName || "Не указано",
        email: loggedUser.email || "Не указано",
        phone: loggedUser.phone || "Не указано",
      });
    }
  }, []);

  return (
    <div className="container mx-auto min-h-[83vh] w-full max-w-5xl">
      <h1 className="text-4xl p-4 font-bold font-lora">Ваш аккаунт</h1>
      <div className="font-karla grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-1 p-4">
        <img
          src="/terry.png"
          alt="avatar"
          className="text-center"
        />
        <table>
          <tbody>
            <tr>
              <td className="font-bold">Логин</td>
              <td>{profileData.login}</td>
            </tr>
            <tr>
              <td className="font-bold">Имя</td>
              <td>{profileData.firstName}</td>
            </tr>
            <tr>
              <td className="font-bold">Фамилия</td>
              <td>{profileData.lastName}</td>
            </tr>
            <tr>
              <td className="font-bold">Email</td>
              <td>{profileData.email}</td>
            </tr>
            <tr>
              <td className="font-bold">Телефон</td>
              <td>{profileData.phone}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
