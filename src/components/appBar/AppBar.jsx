import { Navigation } from '../navigation/Navigation'
import { AuthNav } from '../authNav/AuthNav'
import UserMenu from 'components/UserMenu/userMenu'
import { useAuth } from '../UseAuth/useAuth'
import css from './AppBar.module.css'

const AppBar = () => {
  const { isLoggedIn } = useAuth();

    return (
        <header className={css.head} >
            <Navigation />
       {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
  );
};

export default AppBar;
