import { Injectable } from '@nestjs/common';
import { Client } from 'litecoin';

const client = new Client({
  host: 'localhost',
  port: 19443,
  user: 'admin',
  pass: '123456',
  timeout: 30000,
  ssl: false,
});

const callback = function (err, data) {
  if (err) console.error(err);
  console.log('data--', data);
  return data;
};

@Injectable()
export class LitecoinNodeClient {

  listTransactionsByAccount(
    account: string,
    count: number = 0,
    from: number = 10,
  ) {
    return new Promise((resolve, reject) => {
      client.listTransactions(account, count, from, (err, data) => {
        if (err) {
          console.error(err);
          reject(err);
        }
        console.log('data=', data);
        resolve(data);
      });
    });
  }

  createNewAddress() {
    return new Promise((resolve, reject) => {
      client.getNewAddress('', (err, data) => {
        if (err) {
          console.error(err);
          reject(err);
        }
        console.log('data=', data);
        resolve(data);
      });
    });
  }

  listTransactionsByAddress() {
    return new Promise((resolve, reject) => {

    })
  }
}
