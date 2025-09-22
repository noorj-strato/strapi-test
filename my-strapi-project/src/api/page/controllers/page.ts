/**
 * page controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::page.page', ({ strapi }) => ({
    async customAction(context) {
        context.body = 'ok';
    },
    async find(context) {
        // Call the default core action
        const { data, meta } = await super.find(context);

        const currentDate = new Date();
        meta.date = currentDate.toISOString();
        // Customize the response
        return { data, meta };
    }
}));
