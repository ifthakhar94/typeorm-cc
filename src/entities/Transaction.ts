import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, UpdateDateColumn, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { Client } from "./Client";

enum TransactionType {
    DEPOSIT = "deposit",
    WITHDRAW = "withdraw",
    TRANSFER = "transfer",
}

@Entity("transaction")
export class Transaction extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "enum",
        enum: TransactionType,
        // default: TransactionType.DEPOSIT,
    })
    type: string;

    @Column()
    amount: number;

    @ManyToOne(
        ()=>Client,
        client => client.transactions,
    )
    @JoinColumn({name: "client_id"})
    client: Client;

    
    
    
    
    
}