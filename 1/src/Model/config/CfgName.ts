export interface I_NameCfg
{
    firstNames: Array<string>,
    lastNames: Array<string>
}

export default class CfgName extends Laya.Script
{
    private file: string = "cfg/name.json";
    private static _instance: CfgName;
    private nameCfg: I_NameCfg;

    constructor() 
    {
        super();

        // 初始化
        this.nameCfg = { firstNames: [], lastNames: [] };
        // 读资源
        Laya.loader.load(this.file, new Laya.Handler(this, this.LoadComplete));
    }

    public static GetInstance(): CfgName
    {
        if (CfgName._instance == undefined)
        {
            CfgName._instance = new CfgName();
        }

        return CfgName._instance;
    }

    private LoadComplete(): void
    {
        let res = Laya.loader.getRes(this.file);
        if (res == undefined)
        {
            console.error("没有找到名字的配置，请检查" + this.file);
            return;
        }

        // 解析配置
        for (const key in res)
        {
            if (res.hasOwnProperty(key))
            {
                if (key == "firstNames")
                {
                    const element = res[key];
                    this.nameCfg.firstNames = element;
                }

                if (key == "lastNames")
                {
                    const element = res[key];
                    this.nameCfg.lastNames = element;
                }
            }
        }

        Laya.loader.clearRes(this.file);
    }

    // 随机一个名字
    public getRandomName(): string
    {
        let firstLength = this.nameCfg.firstNames.length;
        let lastLength = this.nameCfg.lastNames.length;
        let i = Math.floor(Math.random() * firstLength);
        let j = Math.floor(Math.random() * lastLength);
        let name = this.nameCfg.firstNames[i] + this.nameCfg.lastNames[j];
        return name;
    }
}