import { Injectable } from '@angular/core';

interface IInitTimer {
  previousTimer: number;
  expiresAt: Date;
  timerValue: { value: number };
  onFinish: () => void;
}

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  constructor() {}

  initTimer({ previousTimer, expiresAt, timerValue, onFinish }: IInitTimer): [any, number] {
    clearInterval(previousTimer);

    const totalTime = Math.floor(
      (expiresAt.getTime() - new Date().getTime()) / 1000
    );

    const thisTimer = setInterval(() => {
      timerValue.value = Math.floor(
        (expiresAt.getTime() - new Date().getTime()) / 1000
      );

      if (timerValue.value <= 0) {
        clearInterval(thisTimer);
        onFinish();
        return;
      }
    }, 1000);

    return [thisTimer, totalTime];
  }
}
