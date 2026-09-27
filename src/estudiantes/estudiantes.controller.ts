import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query } from '@nestjs/common';
import { EstudiantesService } from './estudiantes.service';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';

@Controller('estudiantes')
export class EstudiantesController {
  constructor(private readonly estudiantesService: EstudiantesService) {}

  @Post()
  create(@Body() dto: CreateEstudianteDto) {
    return this.estudiantesService.create(dto);
  }

  @Get()
  findAll(@Query('sexo') sexo?: string) {
    return this.estudiantesService.findAll(sexo);
  }

  @Get('carnet/:carnet')
  findByCarnet(@Param('carnet') carnet: string) {
    return this.estudiantesService.findByCarnet(carnet);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.estudiantesService.findOne(id);
  }

  @Put(':id')
  replace(@Param('id', ParseIntPipe) id: number, @Body() dto: CreateEstudianteDto) {
    return this.estudiantesService.replace(id, dto);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateEstudianteDto) {
    return this.estudiantesService.update(id, dto);
  }

  @Delete('ultimo')
  removeUltimo() {
    return this.estudiantesService.removeUltimo();
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.estudiantesService.remove(id);
  }

  @Get(':id/cursos')
  verCursos(@Param('id', ParseIntPipe) id: number) {
    return this.estudiantesService.verCursos(id);
  }

  @Post(':id/cursos/:cursoId')
  asignarCurso(@Param('id', ParseIntPipe) id: number, @Param('cursoId', ParseIntPipe) cursoId: number) {
    return this.estudiantesService.asignarCurso(id, cursoId);
  }

  @Delete(':id/cursos/:cursoId')
  desasignarCurso(@Param('id', ParseIntPipe) id: number, @Param('cursoId', ParseIntPipe) cursoId: number) {
    return this.estudiantesService.desasignarCurso(id, cursoId);
  }
}