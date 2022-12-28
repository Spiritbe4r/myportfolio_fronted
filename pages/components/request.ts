import axios, { AxiosError } from 'axios';
import { HomeDataType, aboutType, socialLinkType } from './types';

const baseUrl = 'https://api.bearcodev.com/portfolio-path/'
export const getHomeData = async (): Promise<HomeDataType | null> => {
    const resp = await axios.get(baseUrl + 'userdetailmodel/',{
     headers: {
        'Accept-Encoding': 'application/json'
    }
    }).catch(
        (error: AxiosError) => {
            console.log(error);
        })
    if (resp) {
        return resp.data[0] as HomeDataType
    }

    return null;
}

export const getSocialLink = async (): Promise<socialLinkType[] | []> => {
    const resp = await axios.get(baseUrl + 'userSocialLink/').catch(
        (error: AxiosError) => {
            console.log(error);
        })
    if (resp) {
        return resp.data
    }

    return [];
}

export const getAboutParagraphs = async (): Promise<aboutType[] | []> => {
    const resp = await axios.get(baseUrl + 'userContent/').catch(
        (error: AxiosError) => {
            console.log(error);
        })
    if (resp) {
        return resp.data
    }

    return [];
}
