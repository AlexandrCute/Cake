import { FC } from "react";

const Profile: FC = () => {
  return (
    <div className="container mx-auto min-h-[83vh] w-full max-w-5xl">
      <h1 className="text-4xl p-4 font-bold font-lora">Ваш аккаунт</h1>
      <div className="font-karla grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-1 p-4">
        <img src="../../public/terry.png" alt="avatar" className="text-center" />
        <table>
          <tbody>
            <tr>
              <td className="font-bold">Логин</td>
              <td>dabrydnev</td>
            </tr>
            <tr>
              <td className="font-bold">Имя</td>
              <td>Александр</td>
            </tr>
            <tr>
              <td className="font-bold">Фамилия</td>
              <td>Добрыднев</td>
            </tr>
            <tr>
              <td className="font-bold">Email</td>
              <td>alexander.dabrydnev@gmail.com</td>
            </tr>
            <tr>
              <td className="font-bold">Возраст</td>
              <td>20</td>
            </tr>
            <tr>
              <td className="font-bold">Пол</td>
              <td>Мужской</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
