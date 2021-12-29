import { Request, Response } from 'express';

import { CreateCategoryUseCase } from './CreateCategoryUseCase';

// Tirei isso tudo de dentro da rota e passei para cá
class CreateCategoryController {
    constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, description } = request.body;

        await this.createCategoryUseCase.execute({ name, description });

        return response.status(201).send();
    }
}

export { CreateCategoryController };
