import { SuccessInterceptor } from './../common/interceptors/success.interceptor';
import { HttpExceptionFilter } from '../common/exceptions/http-exception';
import { EmployeesService } from './employees.service';
import {
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { IntPipe } from 'src/common/pipes/int.pipe';

@Controller('employees')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get()
  getAllEmployees() {
    throw new HttpException({ success: false, message: 'api is broken' }, 401);
  }

  @Get(':id') // parseIntPipe로 int로 변환 만약 string이 들어올 경우 예외처리까지 해준다.
  getEmployees(@Param('id', ParseIntPipe, IntPipe) param) {
    return 'one employees';
  }

  @Post()
  createEmployees() {
    return 'create';
  }

  @Put(':id')
  updateEmployees() {
    return 'update';
  }

  @Delete(':id')
  removeEmployees() {
    return 'remove';
  }
}
