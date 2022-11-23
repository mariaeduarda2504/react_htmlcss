export interface IMessageData {
    [x: string]: any
    id?: number
    title?: string
    message?: string
    user?: {
        name: string
    }
    messageTopic?: {
        id: number
        name: string
      }[]
    }
    
export interface IMessageForm {
    id?: number
    title?: string
    message?: string
    created_at?: string
    topic?: number[] | undefined
}
