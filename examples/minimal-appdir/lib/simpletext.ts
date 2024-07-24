import {SimpleTextClient, SimpleTextConfig} from "@simpletext/client";

const config: SimpleTextConfig = {
    appId: process.env.SIMPLETEXT_APP_ID!,
    secretKey: process.env.SIMPLETEXT_SECRET!,
}

export const simpletext = new SimpleTextClient(config); 