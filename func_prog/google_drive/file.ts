export const SEP = "$%$"
export class DriveFile{
    
    name : string
    type : string
    data : string
    public constructor(name : string, type : string, data : string){
        this.name = name
        this.type = type
        this.data = data
    }
    public toString() : string {
        return "name:" + SEP + this.name + SEP + "type:" + SEP + this.type + SEP + "data:" + SEP + this.data
    }
}