import { logger } from 'global-input-logging';

export interface AppLaunchParams {
    launchType: string | null;
    session: string | null;
    code: string | null;
    url: string | null;
}

export const getAppLaunchParams = (): AppLaunchParams => {
    const params = new URLSearchParams(window.location.search);
    return {
        launchType: params.get('launchType'),
        session: params.get('session'),
        code: params.get('code'),
        url: params.get('url'),
    };
};

export const isLaunchedFromQRCode = (launchParams: AppLaunchParams) =>
    launchParams.launchType === 'qr' && !!launchParams.session && !!launchParams.code && !!launchParams.url;

// Tells the web application (via the WebSocket server) that the user has opened the launch URL,
// so that it can switch to the Encrypted Connection QR Code.
export const notifyAppLaunched = (url: string, session: string, code: string): Promise<boolean> => {
    try {
        const newUrl = new URL(decodeURIComponent(url) + '/global-input/app/launched');
        newUrl.searchParams.append('session', session);
        newUrl.searchParams.append('code', code);
        return fetch(newUrl.toString())
            .then(response => response.json())
            .then(data => !!data && data.result === 'ok')
            .catch(error => {
                logger.error('Error in sendAppLaunchedEvent:' + url, error);
                return false;
            });
    }
    catch (error) {
        logger.error('error in sending app launched event:' + url, error);
        return Promise.resolve(false);
    }
};

let appLaunchedSent: Promise<boolean> | null = null;

// Sent at most once per page load for the URL this page was launched with.
export const sendAppLaunchedEvent = (launchParams: AppLaunchParams): Promise<boolean> => {
    if (!appLaunchedSent) {
        appLaunchedSent = isLaunchedFromQRCode(launchParams)
            ? notifyAppLaunched(launchParams.url as string, launchParams.session as string, launchParams.code as string)
            : Promise.resolve(false);
    }
    return appLaunchedSent;
};

const GET_APP_PROMPT_DISMISSED_KEY = 'globalInput.getAppPromptDismissed';

// Remembers that the user chose "Continue in browser", so the "Get the app" screen is not shown again.
export const isGetAppPromptDismissed = (): boolean => {
    try {
        return !!localStorage.getItem(GET_APP_PROMPT_DISMISSED_KEY);
    }
    catch (error) {
        return false;
    }
};

export const setGetAppPromptDismissed = (dismissed: boolean) => {
    try {
        if (dismissed) {
            localStorage.setItem(GET_APP_PROMPT_DISMISSED_KEY, new Date().toISOString());
        }
        else {
            localStorage.removeItem(GET_APP_PROMPT_DISMISSED_KEY);
        }
    }
    catch (error) {
        logger.error('Unable to save the "Get the app" choice', error);
    }
};

// For testing: opening the app with "getApp=show" in the URL forgets the remembered choice.
export const shouldShowGetAppPrompt = (launchParams: AppLaunchParams): boolean => {
    if (new URLSearchParams(window.location.search).get('getApp') === 'show') {
        setGetAppPromptDismissed(false);
    }
    return isLaunchedFromQRCode(launchParams) && !isGetAppPromptDismissed();
};
