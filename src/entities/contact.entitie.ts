import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm'
import { User } from './user.entitie';


@Entity('contacts')
export class Contact {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ length: 60 })
    name: string;

    @Column({ length: 60 })
    email: string;

    @Column()
    phone: string;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne(() => User, (user) => user.contact, { nullable: false })
    user: User;

}