export type movieType ={
adult?: boolean;
backdrop_path: string;
id:number;
overview: string;
popularity:number;
poster_path:string;
release_date?:number; 
vote_average:number;
vote_count:number;
title:string;
original_title:string;
original_name?:string;
original_language:string;
genres:Array<genreType>;

name:string;
}
export type movieOriginType={
backdrop_path:string;
first_air_date:string; 
genres:Array<number>;
id:number;
name:string;
origin_country:Array<string>;
original_language:string;
original_name:string; 
overview:string;
popularity:number;
poster_path:string;
vote_average:number;
vote_count:number;

}
export type genreType={
    id:number;
    name:string;
}