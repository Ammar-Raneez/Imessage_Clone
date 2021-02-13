export interface ISidebarChatInfo {
    data: any;
}

export interface ISidebarChat extends ISidebarChatInfo {
    id: string,
}

//gives all data to IMessage
export interface IMessage extends ISidebarChat {};