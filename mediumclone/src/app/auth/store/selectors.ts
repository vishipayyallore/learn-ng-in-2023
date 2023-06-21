import { AuthStateInterface } from '@auth/types/authState.interface';

export const selectFeature = (state: { auth: AuthStateInterface }) => state.auth;
