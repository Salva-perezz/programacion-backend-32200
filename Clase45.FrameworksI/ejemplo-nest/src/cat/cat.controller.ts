import { Body, Controller, Get, Post } from '@nestjs/common';
import CreateCatDto from 'src/dto/create-cat.dto';
import { Cat } from 'src/interfaces/cat/cat.interface';
import { CatService } from './cat.service';

@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Post()
  create(@Body() createCatData: CreateCatDto) {
    this.catService.create(createCatData);
  }

  @Get()
  findAll(): Cat[] {
    return this.catService.findAll();
  }
}
