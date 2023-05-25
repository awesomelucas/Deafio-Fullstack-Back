import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Contact } from "./contact.entitie";


@Entity("users")
class User {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ length: 60 })
    name: string;

    @Column({ length: 60 })
    email: string;

    @Column()
    password: string;

    @Column()
    phone: string;

    @CreateDateColumn()
    createdAt: Date;

    @OneToMany(() => Contact, (contact) => contact.user)
    contact: Contact[]

}

export {User}