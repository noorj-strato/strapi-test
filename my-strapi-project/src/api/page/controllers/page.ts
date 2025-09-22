/**
 * page controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::page.page', ({ strapi }) => ({
    async customAction(context) {
        context.body = 'ok';
    }
}));
