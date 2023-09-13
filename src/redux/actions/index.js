import { fetchUsers, login, getCurrentUser } from "./user/userActions";
import { fetchGadgets, filterGadgets } from "./gadget/gadgetActions";

const rootActions = {
    fetchUsers,
    login,
    getCurrentUser,
    fetchGadgets,
    filterGadgets
}


export default rootActions
