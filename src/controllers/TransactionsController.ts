import { Request, Response } from "express";
import { Transaction } from "./models/transactionModel";
import axios from "axios";

export class TransactionsController {
	constructor(private api: string) {}


	public async getTransactions(req: Request, res: Response){
		try{
			const response = await axios.get( `${this.api}/get-transactions` );
			response.status !== 200
				? new Error("Internal server error")
				:	res.status(200).send(response.data)
		}
		catch(err){
			console.log(err)
			res.status(500).json({error: "Internal server error", details: (err as Error).message})
		}
	}

	// public async getTransactions(req: Request, res: Response) {
	// 	try {
	// 		const sortBy = req.query.sortBy as string;
	//
	// 		const pipeline = [
	// 			{ $sort: { [sortBy]: 1 } }
	// 		];
	// 		const sortedTransactions = await this.collection.aggregate( pipeline ).toArray();
	// 		res.status( 200 ).json( sortedTransactions );
	// 	} catch ( error ) {
	// 		res.status( 500 ).json( { error: "Internal server error" } );
	// 	}
	// }

	//
	// public async createTransaction(req: Request, res: Response) {
	// 	try {
	// 		const { debit, credit, value, senderName, senderAccount, receiverName, receiverAccount } = req.body;
	// 		const transaction: User = {
	// 			debit,
	// 			credit,
	// 			date: new Date().toISOString(),
	// 			value,
	// 			senderName,
	// 			senderAccount,
	// 			receiverName,
	// 			receiverAccount
	// 		};
	// 		await this.collection.insertOne( transaction );
	// 		res.status( 200 ).json( { transaction } );
	// 	} catch ( error ) {
	// 		res.status( 500 ).json( { error: "Internal server error" } );
	// 	}
	// }
}
