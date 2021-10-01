import { NavLink } from "react-router-dom"
import styles from './MainHeader.module.css'


const MainHeader = () => {

	return <header className={styles.header}>
		<nav>
			<ul>
				<li>
				{/* special Link component with activeClassName prop to define onActive styles, good for nav */}
					<NavLink activeClassName={styles.active} to="/Greetings">Welcome </NavLink>
				</li>
				<li>
					<NavLink activeClassName={styles.active} to="/Programs">Offer </NavLink>
				</li>
			</ul>
		</nav>
	</header>
}

export default MainHeader