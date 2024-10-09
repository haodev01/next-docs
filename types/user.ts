export type User = {
  id: string;
  name: string;
  email: string;
  image: string;
};
interface Geolocation {
  lat: string;
  long: string;
}
interface Address {
  city: string;
  street: string;
  number: number;
  zipcode: string;
  geolocation: Geolocation;
}

interface Name {
  firstname: string;
  lastname: string;
}

export interface UserLogin {
  id: number;
  email: string;
  username: string;
  password: string;
  name: Name;
  address: Address;
  phone: string;
}

export interface UserLoginForm {
  username: string;
  password: string;
}
