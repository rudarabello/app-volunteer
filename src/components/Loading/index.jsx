import FadeLoader from 'react-spinners/FadeLoader';
import { StyledLoading, override } from './styles';

export const Loading = () => {
    return (
        <StyledLoading>
            <FadeLoader loading color="#ffffff" css={override} height={25} width={8} radius={50} margin={25} />
        </StyledLoading>
    );
};
