export interface TilawaType {
    _id: string;
    reader: Reader;
    user: User;
    title: string;
    description: string;
    thumbnail:string;
    banner: string;
    url: string;
    reviews:ReviewsType[];
    total_reviews: number;
    translations: Translation[];
    comments:[];
}
export interface User {
    _id: string;
    username: string;
    email:string;
    isAdmin: boolean;
}

export interface Reader {
    _id: string;
    name: string;
    tilawat: TilawaType [];
}

export interface Translation {
    language: string;
}
export interface commentType {
    //_id:string;
    tilawat:TilawaType;
    user:User;
    text:string;
}

export interface ReviewsType {
user:User;
tilawa:TilawaType;
review:number;
}