import {FaUsers,BsChatSquareDots} from 'react-icons/all'
const MainAppNavigationItems = [
    {
        divName : 'UserContainer',
        to : "/UserCount",
        icon : <FaUsers  className="icon"/>,
        
    },{
        divName : 'ChatContainer',
        to : "/ChatContainer",
        icon : <BsChatSquareDots className="icon"/>
    }
]

export default MainAppNavigationItems
