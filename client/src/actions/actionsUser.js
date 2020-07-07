export const ADD_USER = 'ADD_USER';

export function userAdd() {
        return function(dispatch) {
            return fetch(`http://localhost:1337/usuario`)
            .then(res => res.json())
            .then((data) => {
                if (data !== undefined) {
                    dispatch({ type: ADD_USER, payload: data })
                }
            });
        }
};