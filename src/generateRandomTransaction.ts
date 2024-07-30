// private names = [
// 	"John Doe", "Alice Smith", "Bob Johnson", "Emma Brown", "Michael Davis", "Sophia Wilson",
// 	"James Anderson", "Olivia Taylor", "William Jackson", "Isabella White", "David Harris",
// 	"Mia Thomas", "Daniel Martinez", "Charlotte Robinson", "Matthew Clark", "Amelia Rodriguez",
// 	"Joseph Lewis", "Emily Lee", "Andrew Walker", "Evelyn Hall", "Anthony Allen", "Abigail Young",
// 	"Christopher Hernandez", "Harper King", "Elizabeth Wright", "Ryan Lopez", "Avery Hill",
// 	"Benjamin Scott", "Sofia Green", "Samuel Adams", "Ella Baker", "Nicholas Gonzalez", "Madison Nelson",
// 	"Tyler Carter", "Scarlett Mitchell", "Alexander Perez", "Grace Roberts", "Henry Turner", "Chloe Phillips",
// 	"Ethan Campbell", "Victoria Parker", "Jack Evans", "Lily Edwards", "William Collins", "Hannah Stewart",
// 	"Owen Sanchez", "Natalie Morris", "Connor Cooper", "Ava Rivera", "Noah Cook", "Liam Torres", "Sophie Murphy"
// ];
//
// constructor(private collection: any) {}
//
// private namesWithAccounts = this.names.map( (name, index) => {
// 	const account = `${ Math.floor( Math.random() * this.names.length * 123456789 ) }`;
// 	return { name, account };
// } );
//
// private generateRandomTransaction(): Transaction {
// 	const getRandomDate = (): Date => {
// 		const start = new Date( 2000, 0, 1 ).getTime();
// 		const end = new Date().getTime();
// 		const randomTimestamp = start + Math.random() * (end - start);
// 		return new Date( randomTimestamp );
// 	};
//
// 	const randomDate = getRandomDate();
// 	const randomSender = Math.floor( Math.random() * this.names.length );
// 	const randomReceiver = Math.floor( Math.random() * this.names.length );
//
// 	return {
// 		debit: (Math.random() * 1000).toFixed( 2 ),
// 		credit: (Math.random() * 1000).toFixed( 2 ),
// 		date: randomDate,
// 		senderName: this.namesWithAccounts.at( randomSender )?.name as string,
// 		senderAccount: this.namesWithAccounts.at( randomSender )?.account as string,
// 		receiverName: this.namesWithAccounts.at( randomReceiver )?.name as string,
// 		receiverAccount: this.namesWithAccounts.at( randomReceiver )?.account as string,
// 		value: (Math.random() * 1000).toFixed( 2 ),
// 	};
// }
//
// import { Request, Response } from "express";
//
// public async setData(req: Request, res: Response) {
// 	try {
// 		const numberOfTransactions = 20;
// 		const transactions: Transaction[] = [];
//
// 		for ( let i = 0; i < numberOfTransactions; i++ ) {
// 			const transaction = this.generateRandomTransaction();
// 			transactions.push( transaction );
// 			await this.collection.insertOne( transaction );
// 		}
// 		res.status( 200 ).json( transactions );
// 	} catch ( error ) {
// 		res.status( 500 ).json( { error: "Internal server error" } );
// 	}
// }
