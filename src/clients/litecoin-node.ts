import { Injectable } from "@nestjs/common";
import { Client } from 'litecoin';

const client = new Client({
  host: 'localhost',
  port: 19443,
  user: 'admin',
  pass: '123456',
  timeout: 30000,
  ssl: false,
});

const callback = function(err, data) {
      if (err) console.error(err);
        console.log('Data: ' + data);
}

@Injectable()
export class LitecoinNodeClient {



  execute() {
      client.listTransactions(
              "QiufNxo8yBPtrdYxgZsw1ek8ZACL4ooYtT",
              0, 10,
              callback
      );
  
  }
}