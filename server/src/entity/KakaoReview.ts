import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

import { Restaurant } from "./Restaurant";

@Entity()
export class KakaoReview {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.kakao_reviews)
  rest_name: Restaurant;

  @Column()
  author: string;

  @Column()
  rate: number;

  @Column()
  content: string;
}
