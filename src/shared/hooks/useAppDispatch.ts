import { useDispatch } from 'react-redux';

import { AppDispatchType } from '@/app/providers/storeProvider/config/store';

export const useAppDispatch: () => AppDispatchType = useDispatch;
