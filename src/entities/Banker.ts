import { Entity, Column, UpdateDateColumn, CreateDateColumn, ManyToMany, JoinTable } from "typeorm";

import { Person } from "./utils/Person";
import { Client } from "./Client";

@Entity("banker")
export class Banker extends Person{

    @Column({unique: true, length: 10})
    employee_number: string;

    @ManyToMany(
        ()=> Client,
    )
    @JoinTable({
        name: "banker_clients",
        joinColumn: {
            name: "banker",
            referencedColumnName: "id",
        },
        inverseJoinColumn: {
            name: "client",
            referencedColumnName: "id",
        },
    })
    clients: Client[];


    @CreateDateColumn({type:"timestamp"})
    created_at: Date;

    @UpdateDateColumn({type:"timestamp"})
    updated_at: Date;
    
    
} 