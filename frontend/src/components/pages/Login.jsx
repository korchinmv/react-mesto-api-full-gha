import MainForm from "./../MainForm";
import { useForm } from "../../hooks/useForm";

const Login = ({ title, loginUser }) => {
  const { form, handleChange } = useForm({
    password: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { password, email } = form;
    loginUser(password, email);
  };
  return (
    <>
      <MainForm
        title={title}
        nameForm="login"
        nameButton="Войти"
        submit={handleSubmit}
      >
        <input
          className="main-form__input"
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          className="main-form__input"
          name="password"
          type="password"
          placeholder="Пароль"
          value={form.password}
          onChange={handleChange}
          required
        />
      </MainForm>
    </>
  );
};

export default Login;
