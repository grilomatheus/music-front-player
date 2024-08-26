import React from "react";
import { useRouter } from "next/router";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./header.module.scss";
import { Song, HeaderProps } from '../../types';

const Header: React.FC<HeaderProps> = ({
	showSearchBar,
	songs = [],
	onSearchSelect,
}) => {
	const router = useRouter();

	const handleLogoClick = () => {
		router.push("/");
	};

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<h1 onClick={handleLogoClick}>MUSE.ai</h1>
				{showSearchBar && (
					<SearchBar
						songs={songs || []}
						onSearchSelect={onSearchSelect}
						maxWidth="360px"
					/>
				)}
			</div>
		</header>
	);
};

export default Header;
