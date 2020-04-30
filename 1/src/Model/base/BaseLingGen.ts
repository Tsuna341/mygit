import { E_LINGGEN } from "../consts/PlayerEnum";

// 灵根
export default class BaseLingGen extends Laya.Script
{
    public lingGens: Array<E_LINGGEN> = [];

    // 
    private getLingGenAttribute(lingGens: Array<E_LINGGEN>): void
    {
        switch (lingGens.length) {
            case 0:             // 无属性灵根，无法
                {

                }
                break;
        
            default:
                break;
        }
    }
}