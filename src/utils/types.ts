export type Product = {
    id: string;
    name: string;
    icon: string;
    description: string;
    tags: string[];
    price: number;
    remaning: number;
};


export type Skil = {
    id: string;
    name: string;
    description: string;
}

export interface User {
    id: string,
    email: string;
    username: string;
    password: string;
    name: string;
    surname: string;
    avatar: string;
    createdAt: Date;
}

export type HeadersType = {
    headers: string | boolean;
}