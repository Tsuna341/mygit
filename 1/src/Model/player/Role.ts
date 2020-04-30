import BasePlayer, { P_SAVE } from "../base/BasePlayer";
import GlobalStorge from "../../GlobalStorge";
import { Map } from "../../GlobalInterface";
import { E_GENDER } from "../consts/PlayerEnum";
import CfgName from "../config/CfgName";
import BigWorld from "../../BigWorld";

// 其他
export default class Role extends BasePlayer
{
    // 
    private _mapPlayer: Map<P_SAVE> = {};

    // 初始化数据
    private initData(): void
    {
        this.name = this._mapPlayer[this.ID].name;
        this.gender = this._mapPlayer[this.ID].gender;
        this.age = this._mapPlayer[this.ID].age;
        this.hp = this._mapPlayer[this.ID].hp;
        this.mp = this._mapPlayer[this.ID].mp;
    }

    // 随机创建数据
    private createRandomData(): void
    {
        this.ID = BigWorld.GetInstance().createNewPlayerID();

        let data: P_SAVE = {
            name: this.randomName(),
            gender: this.randomGender(),
            age: this.randomAge(),
            hp: this.randomHp(),
            mp: 0
        }

        this._mapPlayer[this.ID] = data;
    }

    public save(): void
    {
        // 保存数据
        Laya.LocalStorage.setJSON(GlobalStorge.ROLE, this._mapPlayer);
    }

    public loadSave(): void
    {
        // 通过该接口加载这个对象
        let pSave = Laya.LocalStorage.getJSON(GlobalStorge.ROLE);
        // if (pSave == undefined || pSave == "")
        // {
        // 创建默认新存档
        this._mapPlayer = pSave;
        this.createRandomData();
        this.initData();
        this.save();
        // }
        // else
        // {
        //     this._mapPlayer = pSave;
        //     this.initData();
        // }
    }

    // 随机一个名字
    private randomName(): string
    {
        return CfgName.GetInstance().getRandomName();
    }

    // 随机性别
    private randomGender(): E_GENDER
    {
        return Math.random() > 0.5 ? E_GENDER.MAN : E_GENDER.WOMAN;
    }

    // 随机年龄
    private randomAge(): number
    {
        return Math.floor(Math.random() * 50) + 1;
    }

    // hp
    private randomHp(): number
    {
        return Math.floor(Math.random() * 100) + 1;
    }
}