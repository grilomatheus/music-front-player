export interface Song {
	id: number;
	song: {
	  title: string;
	  artist: string;
	  album: {
		title: string;
		year?: number;
	  };
	  files: {
		coverArt: string;
		poster?: string;
		audio?: string;
	  };
	};
	isFavorite?: boolean;
  }
  

export interface SearchBarProps {
	songs: Song[];
	onSearchSelect?: (song: Song) => void;
	maxWidth?: string;
}

export interface SongItemProps {
	id: number;
	song: Song["song"];
	onSongSelect: (song: Song) => void;
	isFavorite?: boolean;
	onToggleFavorite?: (id: number) => void;
  }
  
export interface HeaderProps {
	showSearchBar: boolean;
	songs?: Song[];
	onSearchSelect?: (song: Song) => void;
}

export interface FilterBarProps {
	totalSongs: number;
	showFavorites: boolean;
	onToggleFavorites: () => void;
	onSearch: (query: string) => void;
	onSortToggle: () => void;
	isSortedAlphabetically: boolean;
	songs: Song[];
	onSearchSelect: (song: Song) => void;
}

export interface MusicListProps {
	songs: Song[];
	onSongSelect: (song: Song) => void;
	onToggleFavorite: (id: number) => void;
}
