import React from 'react';
import {useRouteMatch} from 'react-router-dom'

const generatePage = page =>{
    const component = () => require(`./components/screens/pages/${page}`).default
    try {
        return React.createElement(component())
    } catch (error) {
        console.warn(error);
    }
}
export default function PageRenderer() {
    const {
        params : {page}
    } = useRouteMatch()
    return generatePage(page)
}