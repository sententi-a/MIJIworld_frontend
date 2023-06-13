import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

import { Restaurant } from "./Restaurant";

@Entity()
export class NaverReview {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.naver_reviews)
  rest_name: Restaurant;

  @Column()
  author: string;

  @Column()
  rate: number;

  @Column()
  content: string;
}
