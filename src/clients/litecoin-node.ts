import { Injectable } from "@nestjs/common";
import { Client } from "litecoin";

const client = new Client({
  host: "localhost",
  port: 19443,
  user: "admin",
  pass: "123456",
  timeout: 30000,
  ssl: false
});

const callback = function(err, data) : string {
  if (err) console.error(err);
  console.log("data--", data);
  return data
};

@Injectable()
export class LitecoinNodeClient {


  listTransactionsByAccount(account: string, count: number = 0, from: number = 10) {
    client.listTransactions(
      account,
      count,
      from,
      callback
    );
  }

  async createNewAddress() {
    return new Promise((resolve, reject) => {
      client.getNewAddress("", callback);
    })
  }

  listTransactionsByAddress() {

  }
}