import readXlsxFile from "read-excel-file";
import { Row } from "read-excel-file/node";

export interface FileobjType{
        fields: Row;
        data: Row[];
        length: number;
}

async function readFile(filepath:File){
    try{
        const rows: Row[]  = await readXlsxFile(filepath);
        return rows;
    }
    catch (err){
        console.log("Error Found \n", err)
    }
}

async function extract_file_info(file : File){
    const rows : Row[] | undefined = await readFile(file);
    if (rows){
        const obj = {
            fields: rows[0],
            data: rows.slice(1),
            length: rows[0].length
        }

        return obj;
    }
}


export default extract_file_info;

