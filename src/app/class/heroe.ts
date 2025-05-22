export class Heroe {
  id: number;
  name: string;
  description: string;
  image: string;
  debutDate: string;  // Changed to camelCase to match backend
  house: string;
  created_by?: string;
  updated_at?: Date;
  updated_by?: string;

  constructor(
    name: string = '',
    description: string = '',
    image: string = '',
    debut_Date: string = '',  // Changed to camelCase
    house: string = '',
    id: number = 0
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.image = image;
    this.debutDate = debut_Date;  // Changed to match property name
    this.house = house;
  }
}