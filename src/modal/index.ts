export interface DishModal {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
  }
  
  export interface RestaurantModal {
    id: string;
    imgUrl: string;
    title: string;
    rating: number;
    genre: string;
    address: string;
    short_description: string;
    dishes: Array<any>;
    long: number;
    lat: number;
  }

  export interface UserModal {
    id: string,
    phone: string,
    password: string,
    location: string,
    avatar: string
  }