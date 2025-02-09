"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleRoutes = void 0;
const role_controller_1 = require("./role_controller");
class RoleRoutes {
    baseEndPoint = '/api/roles';
    constructor(app) {
        const controller = new role_controller_1.RoleController();
        app
            .route(this.baseEndPoint)
            .get(controller.getAllHandler)
            .post(controller.addHandler);
        app
            .route(this.baseEndPoint + '/:id')
            .get(controller.getDetailsHandler)
            .put(controller.updateHandler)
            .delete(controller.deleteHandler);
    }
}
exports.RoleRoutes = RoleRoutes;
