import { Injectable } from "@nestjs/common";
import { LitecoinNodeClient } from "./litecoin-node";

@Injectable()
export class AppService {
  constructor(private readonly litecoinNodeClient: LitecoinNodeClient) {}

  getHello(): string {
    return "Hello World!";
  }
}
