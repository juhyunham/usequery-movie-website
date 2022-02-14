interface Collection {
  id: number;
  backdrop_path: string;
  name: string;
  poster_path: string;
}

interface Genre {
  id: number;
  name: string;
}

interface Company {
  id: number;
  logo_path: string;
  name: string;
}

export interface Movie {
  id: number;
  title: string;
  original_title: string;
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  original_language: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

interface Country {
  iso_3166_1: string;
  name: string;
}

interface Language {
  iso_639_1: string;
  name: string;
}

export interface MovieDetail extends Movie {
  belongs_to_collection: Collection;
  budget: number;
  genres: Genre[];
  homepage: string;
  imdb_id: string;
  production_companies: Company[];
  production_countries: Country[];
  revenue: number;
  runtime: number;
  spoken_languages: Language[];
  status: string;
  tagline: string;
}

interface TV {
  id: number;
  name: string;
  original_name: string;
  poster_path: string;
  popularity: number;
  backdrop_path: string;
  vote_average: number;
  overview: string;
  origin_country: string[];
  genre_ids: number[];
  original_language: string;
  vote_count: number;
  first_air_date: string;
}

interface Person {
  id: number;
  name: string;
  profile_path: string;
  adult: boolean;
  popularity: number;
  known_for: Array<Movie | TV>;
}

interface Network {
  id: number;
  name: string;
}

interface Season {
  id: number;
  episode_count: number;
  poster_path: string;
  season_number: number;
  air_date: Date;
}

export interface TVDetail extends TV {
  created_by: Person[];
  episode_run_time: number[];
  genres: Genre[];
  homepage: string;
  in_production: boolean;
  languages: string[];
  networks: Network[];
  number_of_episodes: number;
  number_of_seasons: number;
  production_companies: Company[];
  seasons: Season[];
  status: string;
  type: string;
  last_air_date: Date;
}

interface Image {
  aspect_ratio: number;
  file_path: string;
  height: number;
  iso_639_1: null | string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface MovieImage {
  id: number;
  backdrops: Array<Image>;
  posters: Array<Image>;
}

interface Dates {
  maximum: string;
  minimum: string;
}

export interface ListResponse<T> {
  dates: Dates;
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}
