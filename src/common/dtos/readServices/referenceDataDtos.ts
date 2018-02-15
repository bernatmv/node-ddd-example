export class GetAppRequestDto {
  constructor(
    public id: number,
  ) {}
}

export class AppDto {
  constructor(
    public id: number,
    public developer_id: number, //tslint:disable-line
    public title: string,
    public version: string,
    public url: string,
    public short_description: string, //tslint:disable-line
    public license: string,
    public thumbnail: string,
    public rating: number,
    public total_downloads: string, //tslint:disable-line
    public compatible: string[],
  ) {}
}

export class GetDeveloperRequestDto {
  constructor(
    public id: number,
  ) {}
}

export class DeveloperDto {
  constructor(
    public id: number,
    public name: string,
    public url: string,
  ) {}
}

export class ProductDto {
  constructor(
    public id: number,
    public author_info: AuthorDto, //tslint:disable-line
    public title: string,
    public version: string,
    public url: string,
    public short_description: string, //tslint:disable-line
    public license: string,
    public thumbnail: string,
    public rating: number,
    public total_downloads: string, //tslint:disable-line
    public compatible: string[],
  ) {}
}

export class AuthorDto {
  constructor(
    public name: string,
    public url: string,
  ) {}
}
