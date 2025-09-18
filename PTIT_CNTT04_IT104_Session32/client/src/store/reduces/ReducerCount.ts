// mục đích của hàm để tính toán trả về state mới dựa vào action
const  initialState = {
    count :0
}
export const reducerCounter : any = (state= initialState , action:any)=>{
    switch (action.type) {
        case "INCREMENT":
            return state.count+=1;
        default:
            return state
    }
}