export const parse = (error) => {
    if (error.status == 404) {
        return {
            IsError: true,
            Result: "API istek yolu hatalı.",
            Code: 404
        }
    }
    else if(error.status == 401){
        return {
            IsError: true,
            Result: "Bu istek için yetkilendirme reddedildi.",
            Code: 404
        }
    }
    else{
        return {
            IsError: true,
            Result: `API'ye ulaşılamıyor.\r\n ${JSON.stringify(error)}`,
            Code: 3
        }
    }
};
export default parse;