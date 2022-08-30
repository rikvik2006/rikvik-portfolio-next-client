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
    email: string;
    username: string;
    password: string;
    name: string;
    surename: string;
    avatar: string;
    createdAt: Date;
}