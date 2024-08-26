import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import Header from "../../src/components/Header/Header";
import SongItem from "../../src/components/SongItem/SongItem";
import ReactAudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import styles from "./song-detail.module.scss";
import { Song } from "../../src/types";
import { useFavoriteSongs } from "../../src/context/FavoriteSongsContext";
import MusicLoading from "../../src/components/FilterBar/MusicLoading/MusicLoading";

const SongDetailPage: React.FC = () => {
	const router = useRouter();
	const { id } = router.query;
	const [song, setSong] = useState<Song | null>(null);
	const [suggestedSongs, setSuggestedSongs] = useState<Song[]>([]);
	const [songs, setSongs] = useState<Song[]>([]);
	const [isPlaying, setIsPlaying] = useState(false);
	const audioRef = useRef<ReactAudioPlayer>(null);

	const { favorites, toggleFavorite } = useFavoriteSongs();

	useEffect(() => {
		if (id) {
			fetch(`http://localhost:3000/song/${id}`)
				.then((response) => response.json())
				.then((data) => {
					setSong(data);

					fetch("http://localhost:3000/songs")
						.then((response) => response.json())
						.then((allSongs) => {
							const suggestions = allSongs.songs
								.filter(
									(s: Song) => s.id !== parseInt(id as string)
								)
								.slice(0, 5);
							setSuggestedSongs(suggestions);
							setSongs(allSongs.songs);
						});
				});
		}
	}, [id]);

	const handleSongSelect = (selectedSong: Song) => {
		router.push(`/song/${selectedSong.id}`);
	};

	const handlePlayPauseClick = () => {
		if (isPlaying) {
			audioRef.current?.audio.current?.pause();
		} else {
			audioRef.current?.audio.current?.play();
		}
		setIsPlaying(!isPlaying);
	};

	const isFavorite = song ? favorites.includes(song.id) : false;

	return (
		<>
			<Header
				showSearchBar={true}
				songs={songs}
				onSearchSelect={handleSongSelect}
			/>
			<div className={styles.songDetailPage}>
				{song ? (
					<>
						<div className={styles.mainSection}>
							<div className={styles.songPoster}>
								<img
									src={`/assets/images/${song.song.files.coverArt}`}
									alt={`${song.song.title} poster`}
								/>
							</div>
							<img
								className={styles.backgroundPoster}
								src={`/assets/images/${song.song.files.poster}`}
								alt={`${song.song.title} poster`}
							/>
							<div className={styles.songDetails}>
								<div className={styles.topSection}>
									<div
										className={styles.playButton}
										onClick={handlePlayPauseClick}
									>
										<i
											className={`fas ${
												isPlaying
													? "fa-pause-circle"
													: "fa-play-circle"
											}`}
										/>
									</div>
									<div className={styles.songInfo}>
										<div className={styles.songTitle}>
											<h2>{song.song.title}</h2>
											<button
												className={`${
													styles.favoriteButton
												} ${
													isFavorite
														? styles.favorited
														: ""
												}`}
												onClick={() =>
													toggleFavorite(song.id)
												}
											>
												<i
													className={`fa${
														isFavorite ? "s" : "r"
													} fa-heart ${
														styles.heartIcon
													}`}
												/>
											</button>
										</div>
										<p className={styles.songDesc}>
											{song.song.artist} |{" "}
											{song.song.album.title} |{" "}
											{song.song.album.year}
										</p>
									</div>
								</div>
								<div className={styles.audioSection}>
									<ReactAudioPlayer
										ref={audioRef}
										className={styles.audioPlayer}
										src={`/assets/audio/${song.song.files.audio}`}
										autoPlay={false}
									/>
								</div>
							</div>
						</div>
						<div className={styles.suggestionsSection}>
							<h5>Other albums</h5>
							<div className={styles.suggestionsList}>
								{suggestedSongs.map((suggestedSong) => (
									<SongItem
										key={suggestedSong.id}
										id={suggestedSong.id}
										song={suggestedSong.song}
										onSongSelect={handleSongSelect}
									/>
								))}
							</div>
						</div>
					</>
				) : (
					<MusicLoading  />
				)}
			</div>
		</>
	);
};

export default SongDetailPage;
