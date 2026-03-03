import { OHLCV } from "../properties/OHLCV";

export async function CSVtoArrayOHLCV(filename: string): Promise<OHLCV[]> {
    const response = await fetch(`assets/${filename}`);
    if (!response.ok) {
        throw new Error(`Failed to load CSV file: ${filename}`);
    }
    const csvData = await response.text();
    const lines = csvData.split("\n");
    const result: OHLCV[] = [];
    const headers = lines[0].split(",");
    for (let i = 1; i < lines.length; i++) {
        if (!lines[i].trim()) continue;
        const obj: any = {};
        const currentline = lines[i].split(",");
        for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
        }
        result.push(obj as OHLCV);
    }
    return result;
}