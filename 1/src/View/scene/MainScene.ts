import { ui } from "../../ui/layaMaxUI";
import LRole from "../../Model/player/LRole";
import CfgName from "../../Model/config/CfgName";
import Role from "../../Model/player/Role";

// 主场景
export default class MainScene extends ui.scene.MianSceneUI 
{
    constructor() { super(); }

    onEnable(): void
    {
        for (let index = 0; index < 100; index++)
        {
            let role = new Role();
            role.loadSave();
            console.error("姓名：" + role.name);
        }
    }

    onDisable(): void
    {

    }
}