export const PLUS = "PLUS";
export const MINUS = "MINUS";
export const PLUS_ASYNC = "PLUS_ASYNC";
export const MINUS_ASYNC = "MINUS_ASYNC";

export const toggleAdd = () => ({
    type : PLUS
}); 

export const toggleMinus = () => ({
    type : MINUS
});

export const toggleAddASync = () => ({
    type : PLUS_ASYNC
});

export const toggleMinusAsync = () => ({
    type : MINUS_ASYNC
});