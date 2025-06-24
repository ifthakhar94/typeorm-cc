import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, UpdateDateColumn, CreateDateColumn } from "typeorm";

@Entity("client")
export class Client extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column({unique: true})
    email: string;

    @Column({unique: true, length: 10})
    card_number: string;

    @Column({type:"numeric"})
    balance: number;

    @Column({default: true, name:"active"})
    is_active: boolean;

    @Column({type:"simple-array",nullable:true})
    additional_info: {
        age: number;
        hair_color: string;
    }[];

    @Column({type:"simple-array", default:[]})
    family_members: string[];

    @CreateDateColumn({type:"timestamp"})
    created_at: Date;

    @UpdateDateColumn({type:"timestamp"})
    updated_at: Date;
    
    
} 