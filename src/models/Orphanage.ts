import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('orphanages')
export default class Orphanage {
    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column()
    name: String;
    @Column()
    latitude: number;
    @Column()
    longitude: number;
    @Column()
    about: String;
    @Column()
    instructions: String;
    @Column()
    opening_hours: String;
    @Column()
    open_on_weekends: boolean;
};