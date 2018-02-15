import AdapterInterface from './adapterInterface';
import { Response } from 'express';

class JsonAdapter implements AdapterInterface {

  constructor(
    private _response: Response,
  ) {}

  sendToOutput(data: any): void {
    this._response.json(data);
  }
}
export default JsonAdapter;
