import BasePlayer, { P_SAVE } from "../base/BasePlayer";
import GlobalStorge from "../../GlobalStorge";
import { Map } from "../../GlobalInterface";
import { E_GENDER } from "../consts/PlayerEnum";

// 主角
export default class LRole extends BasePlayer
{
    private _mapPlayer: P_SAVE;

    // 初始化数据
    private initData(): void
    {
        this.name = this._mapPlayer.name;
        this.gender = this._mapPlayer.gender;
        this.age = this._mapPlayer.age;
        this.hp = this._mapPlayer.hp;
        this.mp = this._mapPlayer.mp;
    }

    // 创建新的存档
    private createNewSave(): void
    {
        let data: P_SAVE = {
            name: "韩立",
            gender: E_GENDER.MAN,
            age: 7,
            hp: 100,
            mp: 0
        }

        this._mapPlayer = data;
    }

    public save(): void
    {
        // 保存数据
        Laya.LocalStorage.setJSON(GlobalStorge.LROLE, this._mapPlayer);
    }

    public loadSave(): void
    {
        // 通过该接口加载这个对象
        let pSave = Laya.LocalStorage.getJSON(GlobalStorge.LROLE);
        if (pSave == undefined || pSave == "")
        {
            // 创建默认新存档
            this.createNewSave();
            this.initData();
            this.save();
        }
        else
        {
            this._mapPlayer = pSave;
            this.initData();
        }
    }

    
}