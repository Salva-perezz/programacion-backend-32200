interface Owner {
  fullName: string;
  phone: string;
}

export interface Car {
  model: string;
  year: number;
  brand: string;
  color: string;
  owner: Owner;
  status: Status;
}

interface CarCreateRequest {
  model: string;
  year: number;
  brand: string;
  color: string;
  status: Status;
}

export enum Status {
  NEW = 0,
  USED,
}

const createCar = (carData: CarCreateRequest, ownerData: Owner): Car => {
  const car: Car = { ...carData, owner: ownerData };

  return car;
};

export default createCar;
