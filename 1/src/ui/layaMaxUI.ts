/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import View=Laya.View;
import Dialog=Laya.Dialog;
import Scene=Laya.Scene;
var REG: Function = Laya.ClassUtils.regClass;
export module ui.layer {
    export class infoLayerUI extends Laya.View {
		public name:Laya.Label;
		public age:Laya.Label;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("layer/infoLayer");
        }
    }
    REG("ui.layer.infoLayerUI",infoLayerUI);
}
export module ui.scene {
    export class MianSceneUI extends Laya.Scene {
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("scene/MianScene");
        }
    }
    REG("ui.scene.MianSceneUI",MianSceneUI);
}