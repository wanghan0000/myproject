import { Utils } from "../panda/utils/Utils";

export class BasePlayerData {
    protected name: string = "";
    protected snId: number = 0;
    protected head: number = 1;
    protected sex: number = 0;
    protected coin: number = 0;
    protected headOutLine: number = 0;
    protected vip: number = 0;
    protected params: string[] = [];

    protected isMe_ = false; //��Ǹ�����ǲ����Լ�
    protected niceId: number = 0;
    protected agentCode = "";		//代理商编号

    constructor() {

    }

    public getIp() {
        if (this.params.length >= 4) {
            return this.params[3];
        }
        return "0.0.0.0";
    }

    public setNiceId(niceId: number) {
        this.niceId = niceId;
    }

    public getNiceId(): number {
        return this.niceId;
    }

    public setAgentCode(str: string) {
        this.agentCode = str;
    }

    public getAgentCode(): string {
        return this.agentCode;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public setSnId(snId: number): void {
        this.snId = snId;
    }

    public getSnId(): number {
        return this.snId;
    }

    public setHead(head: number): void {
        this.head = head;
    }

    public getHead(): number {
        return this.head;
    }

    public setSex(sex: number): void {
        this.sex = sex;
    }

    public getSex(): number {
        return this.sex;
    }

    public setCoin(coin: number): void {
        this.coin = coin;
    }

    public getCoin(): number {
        return this.coin;
    }

    public setHeadOutLine(outline: number) {
        this.headOutLine = outline;
    }

    public getHeadOutLine(): number {
        return this.headOutLine;
    }

    public setVIP(vip: number): void {
        this.vip = vip;
    }

    public getVIP(): number {
        return this.vip;
    }

    public setParams(params: string[]): void {
        this.params = params;
    }

    public getParams(): string[] {
        return this.params;
    }

    public longitude_: number = -1;
    public latitude_: number = -1;
    public setLoc(longitude: number = -1, latitude: number = -1) {
        this.longitude_, this.latitude_ = longitude, latitude;
    }

    public getLoc() {
        let longitude = this.longitude_ == -1 && 0 || this.longitude_;
        let latitude = this.latitude_ == -1 && 0 || this.latitude_;
        return { long: longitude, lati: latitude };
    }

    public city = "广州";	//字符串类型，城市:广州
    public getCity() {
        return this.city;
    }

    public setCity(city: string = "广州") {
        this.city = city;
    }

    /**
     *  Name?: (string|null);
        SnId?: (number|null);
        Head?: (number|null);
        Sex?: (number|null);
        Coin?: (number|null);
        HeadOutLine?: (number|null);
        VIP?: (number|null);
        Params?: (string[]|null);
     * @param data 
     */
    public loadData(data: any): void {
        this.name = Utils.getProtoString(data.Name);
        this.snId = Utils.getProtoNumber(data.SnId);
        this.head = Utils.getProtoNumber(data.Head);
        this.sex = Utils.getProtoNumber(data.Sex);
        this.coin = Utils.getProtoNumber(data.Coin);
        this.headOutLine = Utils.getProtoNumber(data.HeadOutLine);
        this.vip = Utils.getProtoNumber(data.VIP);
        this.params = data.Params;
        this.city = data.City;

        this.setLoc(data.Longitude!, data.Latitude!);
    }
}

