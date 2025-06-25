import { Entity, Column, UpdateDateColumn, CreateDateColumn, OneToMany, ManyToMany } from "typeorm";
import { Person } from "./utils/Person";
import { Transaction } from "./Transaction";
import { Banker } from "./Banker";

@Entity("client")
export class Client extends Person{
 

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

    @OneToMany(
        ()=>Transaction,
        transaction => transaction.client,
    )
    transactions: Transaction[];

    @ManyToMany(
        ()=>Banker,
    )
    bankers: Banker[];
    

    @CreateDateColumn({type:"timestamp"})
    created_at: Date;

    @UpdateDateColumn({type:"timestamp"})
    updated_at: Date;

  
    
} 