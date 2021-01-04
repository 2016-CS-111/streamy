import history from '../../history'
import streams from '../../api/streams';
import { 
    CREATE_STREAM, 
    SIGN_IN, 
    SIGN_OUT,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM
} from "./types";

// Actions

export const signIn = (userId) => {
    return ({ 
        type: SIGN_IN,
        payload: userId
    });
};

export const signOut = () => {
    return ({ 
        type: SIGN_OUT
    });
};

// CREATE STREAM
export const createStream = (formValues) => async (dispatch, getState) => {
    const { userId } = getState().auth
    const response = await streams.post('/streams', {...formValues, userId});
    dispatch ({
        type: CREATE_STREAM,
        payload: response.data
    })
    history.push('/');
};

// ALL STREAMS
export const fetchStreams = () => async (dispatch) => {
    const response = await streams.get('/streams');
    dispatch ({
        type: FETCH_STREAMS,
        payload: response.data
    });
};

// GET ONE STREAM
export const fetchStream = (id) => async (dispatch) => {
    const response = await streams.get(`/streams/${id}`);
    dispatch ({
        type: FETCH_STREAM,
        payload: response.data
    });
};

// DELETE STREAM
export const deleteStream = (id) => async (dispatch) => {
    await streams.delete(`/streams/${id}`);
    dispatch ({
        type: DELETE_STREAM,
        payload: id
    });
    history.push('/');
};

// UPDATE/EDIT STREAM
export const editStream = (id, formValues) => async (dispatch) => {
    const response = await streams.patch(`/streams/${id}`, formValues);
    dispatch ({
        type: EDIT_STREAM,
        payload: response.data
    });
    history.push('/');
};