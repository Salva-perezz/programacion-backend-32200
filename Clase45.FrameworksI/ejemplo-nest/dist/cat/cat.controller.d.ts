import CreateCatDto from 'src/dto/create-cat.dto';
import { Cat } from 'src/interfaces/cat/cat.interface';
import { CatService } from './cat.service';
export declare class CatController {
    private readonly catService;
    constructor(catService: CatService);
    create(createCatData: CreateCatDto): void;
    findAll(): Cat[];
}
