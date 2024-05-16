import { FC, useEffect, useState } from "react";

const Profile: FC = () => {
  const [profileData, setProfileData] = useState({
    login: "",
    name: "",
    surname: "",
    email: "",
    age: "",
    gender: "",
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    setProfileData({
      login: user.login || "Не указано",
      name: user.name || "Не указано",
      surname: user.surname || "Не указано",
      email: user.email || "Не указано",
      age: user.age || "Не указано",
      gender: user.gender || "Не указано",
    });
  }, []);

  return (
    <div className="container mx-auto min-h-[83vh] w-full max-w-5xl">
      <h1 className="text-4xl p-4 font-bold font-lora">Ваш аккаунт</h1>
      <div className="font-karla grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-1 p-4">
        <img
          src="../../public/terry.png"
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
              <td>{profileData.name}</td>
            </tr>
            <tr>
              <td className="font-bold">Фамилия</td>
              <td>{profileData.surname}</td>
            </tr>
            <tr>
              <td className="font-bold">Email</td>
              <td>{profileData.email}</td>
            </tr>
            <tr>
              <td className="font-bold">Возраст</td>
              <td>{profileData.age}</td>
            </tr>
            <tr>
              <td className="font-bold">Пол</td>
              <td>{profileData.gender}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
