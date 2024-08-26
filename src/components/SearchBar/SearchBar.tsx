import React, { useState } from "react";
import styles from "./search-bar.module.scss";
import { useRouter } from "next/router";
import { Song, SearchBarProps } from "../../types";

const SearchBar: React.FC<SearchBarProps> = ({
	songs = [],
	onSearchSelect,
	maxWidth,
}) => {
	const [query, setQuery] = useState("");
	const [suggestions, setSuggestions] = useState<Song[]>([]);
	const router = useRouter();

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setQuery(value);
		if (value && songs.length > 0) {
			const filteredSuggestions = songs.filter((song) =>
				song.song.title.toLowerCase().includes(value.toLowerCase())
			);
			setSuggestions(filteredSuggestions);
		} else {
			setSuggestions([]);
		}
	};

	const handleSelect = (song: Song) => {
		console.log("Selected Song:", song);
		setQuery(song.song.title);
		setSuggestions([]);
		router.push(`/song/${song.id}`);
	};

	return (
		<div className={styles.searchBar} style={{ maxWidth }}>
			<input
				type="text"
				placeholder="Search in your library"
				value={query}
				onChange={handleChange}
				className={styles.searchField}
			/>
			{suggestions.length > 0 && (
				<ul className={styles.suggestions}>
					{suggestions.map((song) => (
						<li
							key={song.id}
							className={styles.suggestionItem}
							onClick={() => handleSelect(song)}
						>
							{song.song.title}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default SearchBar;
