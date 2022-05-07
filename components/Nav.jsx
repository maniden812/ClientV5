import { useState, useEffect } from 'react';
import styles from './Nav.module.css';
import { NavLink } from '.';
import { userService } from 'services';

export { Nav };

function Nav() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const subscription = userService.user.subscribe(x => setUser(x));
        return () => subscription.unsubscribe();
    }, []);

    function logout() {
        userService.logout();
    }
    
    return (
        <>
      <nav>
          <div className={styles.header}>  
            <ul className={styles.nav}>
                <li className={styles.Title}><NavLink href="/" exact className={styles.Title}>FuelQuote</NavLink></li>
                {(user) ? <li className={styles.nav}><NavLink href="/OrderHistory" exact className={styles.nav} >OrderHistory</NavLink></li>: <></> }
                {(user) ? <li className={styles.nav}><NavLink href="/Order" exact className={styles.nav} >Order</NavLink>  </li>:<li className={styles.nav}><NavLink  href="/">Home</NavLink></li>}
                {(user) ? <li className={styles.nav}><NavLink href="/users" exact className={styles.nav}>Profile</NavLink></li>:<li className={styles.nav}><NavLink href="/account/register" exact className={styles.nav}>Register</NavLink></li>}
                {(user) ? <li className={styles.nav}><a onClick={logout}>Sign Out</a></li> : <li className={styles.nav}><NavLink href="/account/login" exact className={styles.nav}>Sign In</NavLink></li>}
            </ul>
            </div>
      </nav>
    </>
  );
};
