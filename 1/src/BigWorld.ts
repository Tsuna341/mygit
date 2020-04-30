import GlobalStorge from "./GlobalStorge";

// 大千世界
export default class BigWorld extends Laya.Script
{
    // 单例
    private static _instance: BigWorld;
    // 年份
    public worldYear: number = 1243;
    // 人物id
    private playerID: number = 0;

    constructor()
    {
        super();

        // 加载人物ID
        this.loadPlayerID();
    }

    public static GetInstance(): BigWorld
    {
        if (BigWorld._instance == undefined)
        {
            BigWorld._instance = new BigWorld();
        }

        return BigWorld._instance;
    }

    public createNewPlayerID(): number
    {
        // 每个人物的ID都是唯一的，不可能重复
        this.playerID++;
        this.savePlayerID();
        return this.playerID;
    }

    // 存储人物ID
    private savePlayerID(): void
    {
        Laya.LocalStorage.setJSON(GlobalStorge.PLAYERID, this.playerID);
    }

    // 读取人物ID
    private loadPlayerID(): void
    {
        let pSave = Laya.LocalStorage.getJSON(GlobalStorge.PLAYERID);
        if (pSave == undefined || pSave == "")
        {
            // 创建默认新存档
            this.playerID = 0;
            this.savePlayerID();
        } else
        {
            this.playerID = parseInt(pSave);
        }
    }

    // 开启新世界
    private openNewBigWorld(): void
    {
        
    }
}