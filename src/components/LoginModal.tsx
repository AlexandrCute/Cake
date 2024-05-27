import { FC, FormEvent, useState } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";

import Register from "./Register";
import { doLogin, updateModal } from "../redux/features/authSlice";

import { FaUnlock } from "react-icons/fa";
import { RiLockPasswordFill, RiUser3Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";

const LoginModal: FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [clicked, setClicked] = useState(false);
  const dispatch = useAppDispatch();
  const open = useAppSelector((state) => state.authReducer.modalOpen);

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(doLogin({ username, password }));
  };

  if (open) {
    return (
      <div className="bg-[#0000007d] w-full min-h-screen fixed inset-0 z-30 flex items-center justify-center font-karla">
        <div
          className="relative border shadow rounded p-8 bg-white max-w-md w-full z-40"
          data-test="login-container"
        >
          <RxCross1
            className="absolute cursor-pointer right-5 top-5 hover:opacity-85"
            onClick={() => dispatch(updateModal(false))}
          />
          {clicked ? (
            <Register setClicked={setClicked} />
          ) : (
            <>
              <div className="flex mb-2 space-x-2 justify-center items-center">
                <FaUnlock />
                <h3 className="font-bold text-center text-2xl">Вход</h3>
                <FaUnlock />
              </div>
              <form onSubmit={submitForm} className="flex flex-col space-y-3">
                <div className="relative">
                  <input
                    data-test="input-username"
                    type="text"
                    placeholder="Логин..."
                    className="border w-full border-black py-2 px-8 rounded"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <RiUser3Fill className="absolute top-3 left-2 text-lg" />
                </div>
                <div className="relative">
                  <input
                    data-test="input-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Пароль..."
                    className="border w-full border-black py-2 px-8 rounded"
                  />
                  <RiLockPasswordFill className="absolute top-3 left-2 text-lg" />
                </div>
                <input
                  data-test="input-submit"
                  type="submit"
                  value="Войти"
                  className="bg-blue-500 text-white rounded p-2 hover:bg-blue-700 cursor-pointer"
                />
              </form>
              <p className="text-center mt-1">
                Нет аккаунта?{" "}
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={() => setClicked(true)}
                >
                  Зарегистрироваться
                </span>
              </p>
            </>
          )}
        </div>
      </div>
    );
  }
};

export default LoginModal;
