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

  listAllBalances() {
    return new Promise((resolve, reject) => {
      client.listAddressGroupings((err, data) => {
        if (err) {
          console.error(err);
          reject(err);
        }
        console.log('data=', data);
        resolve(data);
      });
    })
  }

  getBlockCount() {
    return new Promise((resolve, reject) => {
      client.getBlockCount((err, data) => {
        if (err) {
          console.error(err);
          reject(err);
        }
        console.log('data=', data);
        resolve(data);
      });
    })
  }

  sendToAddress(address: string, amount: number) {
    return new Promise((resolve, reject) => {
      client.sendToAddress(address, amount, (err, data) => {
        if (err) {
          console.error(err);
          reject(err);
        }
        console.log('data=', data);
        resolve(data);
      });
    })
  }

  getTransaction(txid: string) {
    return new Promise((resolve, reject) => {
      client.getTransaction(txid, (err, data) => {
        if (err) {
          console.error(err);
          reject(err);
        }
        console.log('data=', data);
        resolve(data);
      });
    })
  }

  listReceivedByAddress(address: string) {
    return new Promise((resolve, reject) => {
      client.listReceivedByAddress(6,true,true,address, (err, data) => {
        if (err) {
          console.error(err);
          reject(err);
        }
        console.log('data=', data);
        resolve(data);
      });
    })
  }
}
