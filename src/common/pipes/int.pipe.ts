import { HttpException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class IntPipe implements PipeTransform {
  transform(value: number) {
    if (value < 0) {
      throw new HttpException('id는 0보다 작을 수 없습니다.', 401);
    }
    return value;
  }
}
