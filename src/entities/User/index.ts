export { type IUserSchema, type UserType, userSchema } from './model/types/userTypes';
export { getUserData } from './model/selectors/getUserData/getUserData';
export { getUserInited } from './model/selectors/getUserInited/getUserInited';
export { userReducer, userActions } from './model/slice/userSlice';
