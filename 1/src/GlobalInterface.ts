
// 全局的接口

// 要求实现存档和读取方法
export interface I_SaveToFile
{ 
    save();                 // 保存存档
    loadSave();             // 读取存档   
}

// Map
export interface Map<T>
{
    [key:string]:T;
}