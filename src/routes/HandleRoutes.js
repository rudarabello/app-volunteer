import * as authProvider from '../providers/AuthProvider';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

export const HandleRoute = () => {
    const { signed } = authProvider.useAuth;
    return signed ? <PrivateRoutes /> : <PublicRoutes />;
};
