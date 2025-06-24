import { Entity, Column, UpdateDateColumn, CreateDateColumn } from "typeorm";

import { Person } from "./utils/Person";

@Entity("banker")
export class Banker extends Person{

    @Column({unique: true, length: 10})
    employee_number: string;


    @CreateDateColumn({type:"timestamp"})
    created_at: Date;

    @UpdateDateColumn({type:"timestamp"})
    updated_at: Date;
    
    
} 