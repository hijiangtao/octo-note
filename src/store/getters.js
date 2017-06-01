/**
 * getters.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-06-01 21:19:06
 * @version $Id$
 */

export const GET_TITLE = state => state.title

export const GET_DESC = state => state.desc

export const GET_ITEMS = state => state.items

export const GET_ITEMLEN = ({ items }) => items.length
