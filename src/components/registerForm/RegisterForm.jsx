import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from '../registerForm/register.module.css'

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (

    <div className={css.rbox}>
      
          <h2 className={css.rtitle}>Sign up form</h2>
          <form className={css.rform} onSubmit={handleSubmit}>
              <label className={css.rlabel}>
                  Name
                  <input className={css.rinput} type="text" name='name'/>
              </label>
              <label className={css.rlabel}>
                  Email
                  <input className={css.rinput} type="email" name='email' />
              </label>
              <label className={css.rlabel}>
                  Password
                  <input className={css.rinput} type="password" name='password'/>
              </label>
              <button type='submit' className={css.rbtn}>Sign Up</button>
          </form>
    </div>
    // <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
    //   <label className={css.label}>
    //     Username
    //     <input type="text" name="name" />
    //   </label>
    //   <label className={css.label}>
    //     Email
    //     <input type="email" name="email" />
    //   </label>
    //   <label className={css.label}>
    //     Password
    //     <input type="password" name="password" />
    //   </label>
    //   <button type="submit">Register</button>
    // </form>
  );
};
