import { Link, Outlet } from 'react-router-dom';

function Event(){
    return(
        <>
            <Link to="one"><button>이벤트1</button></Link>
            <Link to="two"><button>이벤트2</button></Link>
            <Outlet></Outlet>
        </>
    )
}

export default Event;