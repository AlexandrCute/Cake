import { FC, FormEvent, useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { updateModal } from "../redux/features/authSlice";
import { RiLockPasswordFill, RiUser3Fill } from "react-icons/ri";
import { GiArchiveRegister } from "react-icons/gi";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

const Register: FC = () => {
    const [formData, setFormData] = useState({
        login: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
    });

    const dispatch = useAppDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Добавьте здесь логику регистрации или отправки данных на сервер
        console.log("Регистрация:", formData);
    };

    return (
        <div className="bg-[#0000007d] w-full min-h-screen fixed inset-0 z-30 flex items-center justify-center font-karla">
            <div className="relative border shadow rounded p-8 bg-white max-w-md w-full z-40">
                <RxCross1
                    className="absolute cursor-pointer right-5 top-5 hover:opacity-85"
                    onClick={() => dispatch(updateModal(false))}
                />
                <div className="flex mb-2 space-x-2 justify-center items-center">
                    <GiArchiveRegister />
                    <h3 className="font-bold text-center text-2xl">Регистрация</h3>
                    <GiArchiveRegister />
                </div>
                <form onSubmit={handleSubmit} action="check.php" method="post" className="flex flex-col space-y-3">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Логин..."
                            className="border w-full border-black py-2 px-8 rounded"
                            name="login"
                            value={formData.login}
                            onChange={handleChange}
                        />
                        <RiUser3Fill className="absolute top-3 left-2 text-lg" />
                    </div>
                    <div className="relative">
                        <input
                            type="password"
                            placeholder="Пароль..."
                            className="border w-full border-black py-2 px-8 rounded"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <RiLockPasswordFill className="absolute top-3 left-2 text-lg" />
                    </div>
                    <input
                        type="text"
                        placeholder="Имя..."
                        className="border w-full border-black py-2 px-8 rounded"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Фамилия..."
                        className="border w-full border-black py-2 px-8 rounded"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                    <div className="relative">
                        <input
                            type="email"
                            placeholder="Почта..."
                            className="border w-full border-black py-2 px-8 rounded"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <AiOutlineMail className="absolute top-3 left-2 text-lg" />
                    </div>
                    <div className="relative">
                        <input
                            type="tel"
                            placeholder="Телефон..."
                            className="border w-full border-black py-2 px-8 rounded"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        <AiOutlinePhone className="absolute top-3 left-2 text-lg" />
                    </div>
                    <input
                        type="submit"
                        value="Зарегистрироваться"
                        className="bg-blue-500 text-white rounded p-2 hover:bg-blue-700 cursor-pointer"
                    />
                </form>
                <p className="text-center mt-1">
                    Уже есть аккаунт?{" "}
                    <span
                        className="text-blue-500 cursor-pointer"
                        onClick={() => dispatch(updateModal(true))}
                    >
                        Войти
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Register;
