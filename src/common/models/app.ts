class App {
  constructor(
    public id: number,
    public developerId: number,
    public title: string,
    public version: string,
    public url: string,
    public shortDescription: string,
    public license: string,
    public thumbnail: string,
    public rating: number,
    public totalDownloads: string,
    public compatible: string[],
  ) {}
}
export default App;
