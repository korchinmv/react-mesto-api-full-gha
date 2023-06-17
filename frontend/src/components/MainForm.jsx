import { Link } from "react-router-dom";

const MainForm = ({ nameForm, nameButton, title, children, submit }) => {
  return (
    <div className="container">
      <form className="main-form" action="#" name={nameForm} onSubmit={submit}>
        <h2 className="main-form__title">{title}</h2>
        {children}
        <button className="main-form__submit hover" type="submit">
          {nameButton}
        </button>

        {nameForm === "register" && (
          <Link className="main-form__sign hover" to="/sign-in">
            Уже зарегистрированы? Войти
          </Link>
        )}
      </form>
    </div>
  );
};

export default MainForm;
