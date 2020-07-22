export const book = (state, action) => {
    switch (acton.type) {
        case 'CREATE_BOOk':
            
            return {id: action.id, title: action.title, category: action.category };

        case 'REMOVE_BOOK':

            break;
    
        default:
            return state;
    }

}