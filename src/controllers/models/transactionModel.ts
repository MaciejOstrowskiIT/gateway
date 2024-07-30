export interface Transaction {
	debit: number | string;
	credit: number | string;
	date: Date | string;
	senderName: string;
	senderAccount: string;
	receiverName: string;
	receiverAccount: string;
	value: string;
}
