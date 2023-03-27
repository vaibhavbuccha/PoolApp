export const sessionDetail = () => {
    const sessionId = sessionStorage?.getItem('sessionId');
    const sessionDetails = sessionStorage?.getItem('sessionDetails');
    const sessionObj = { isActive: false, sessionId, sessionDetails }
    if(sessionId){
        sessionObj.isActive = true;
    }
    return sessionObj;
}

export const destroySession = () => {
    sessionStorage.removeItem('sessionId');
    sessionStorage.removeItem('sessionDetails');
}