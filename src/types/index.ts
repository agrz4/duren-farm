export interface Product {
    id: number;
    name: string;
    stock: number;
    total: number;
    price: number;
    harvestTime: string;
    image?: string;
}

export interface OrderLog {
    id: string;
    productName: string;
    time: string;
    amount: number;
    status: 'Selesai' | 'Proses';
}
