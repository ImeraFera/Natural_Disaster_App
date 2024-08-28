export default function (state, action) {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                userData: {
                    ...state.userData,
                    ...action.payload,
                    isAuth: true,
                },
            };

        case 'LOGOUT':
            return {
                ...state,
                userData: {
                    uid: '',
                    mail: '',
                    isAuth: false,
                    profile: {
                        name: '',
                        birthday: '',
                        address: '',
                        tel: '',
                        district: '',
                        province: '',
                        tcNo: '',
                        photoUrl: '',
                    },
                },
            };

        case 'UPDATE_USER':
            return {
                ...state,
                userData: {
                    ...state.userData,
                    ...action.payload,
                    isAuth: true,
                },
            };

        default:
            return state;
    }
}
