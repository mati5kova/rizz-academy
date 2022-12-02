import { useNavigate } from 'react-router-dom';

export default function navigateToPage() {
    const navigate = useNavigate();

    const routeChange = (route: string) => {
        return navigate(`/${route}`);
    };

    return [routeChange];
}
