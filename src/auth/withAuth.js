import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function withAuth(Component) {
    return function Authenticatedcomponent(props) {
        const isAuthenticated = !!localStorage.getItem("uid");
        
        const navigate = useNavigate();
        useEffect(() => {
            if(!isAuthenticated) {
                navigate('/login');
            }
        }, [isAuthenticated, navigate]);
        if(isAuthenticated){
            return <Component {...props} />;
        }else{
            navigate("/login");
            return null;


        }

    }
}
export default withAuth;