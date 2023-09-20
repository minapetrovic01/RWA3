import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject, fromEvent, interval, map, switchMap, takeUntil } from 'rxjs';

@Component({
  selector: 'app-background-canvas',
  template: '<canvas #canvas></canvas>',
  styles: [
    `
      canvas {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: clip;
        background: radial-gradient(#e6dcd2, #cfd0d8);
        z-index: -1;
      }
    `]
})
export class BackgroundCanvasComponent implements OnInit, OnDestroy {

  @ViewChild('canvas', { static: true })
  canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  // private particlesArray: Particle[] = [];

  ngOnInit() {
    this.ctx = this.canvasRef.nativeElement.getContext('2d')!;
    this.canvasRef.nativeElement.width = window.innerWidth;
    this.canvasRef.nativeElement.height = window.innerHeight;

    const resize$ = fromEvent(window, 'resize');
    const mouseMove$ = fromEvent<MouseEvent>(window, 'mousemove');
    const mouseOut$ = fromEvent(window, 'mouseout');

    resize$.pipe(
      switchMap(() => interval(500)),
      takeUntil(this.destroy$)
    ).subscribe(() => this.init());

    // mouseOut$.pipe(
    //   map(() => ({ x: undefined, y: undefined })),
    //   takeUntil(this.destroy$)
    // ).subscribe(mouse);

    // mouseMove$.pipe(
    //   map(event => ({ x: event.x, y: event.y })),
    //   takeUntil(this.destroy$)
    // ).subscribe(newMouse => mouse = newMouse);

    // this.addEventListeners();
    this.init();
    // this.animate();
  }

  private init() {
    // ... (same as before)
  }

  // private animate() {
  //   interval(16).pipe(
  //     takeUntil(this.destroy$)
  //   ).subscribe(() => {
  //     this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  //     for (let i = 0; i < this.particlesArray.length; i++) {
  //       this.particlesArray[i].update(this.ctx);
  //     }
  //     // this.connect();
  //   });
  // }

  // Rest of the code remains the same as before

  private destroy$ = new Subject<void>();

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
 
}

// class Particle {
//   x: number;
//   y: number;
//   directionX: number;
//   directionY: number;
//   size: number;
//   color: string;

//   constructor(
//     x: number,
//     y: number,
//     directionX: number,
//     directionY: number,
//     size: number,
//     color: string
//   ) {
//     this.x = x;
//     this.y = y;
//     this.directionX = directionX;
//     this.directionY = directionY;
//     this.size = size;
//     this.color = color;
//   }

//   draw(ctx: CanvasRenderingContext2D) {
//     ctx.beginPath();
//     ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
//     ctx.fillStyle = '#5A3DDC';
//     ctx.fill();
//   }

//   update(ctx: CanvasRenderingContext2D) {
//     if (this.x > window.innerWidth || this.x < 0) {
//       this.directionX = -this.directionX;
//     }
//     if (this.y > window.innerHeight || this.y < 0) {
//       this.directionY = -this.directionY;
//     }

//     const dx = mouse.x - this.x;
//     const dy = mouse.y - this.y;
//     const distance = Math.sqrt(dx * dx + dy * dy);
//     if (distance < mouse.radius + this.size) {
//       if (mouse.x < this.x && this.x < window.innerWidth - this.size * 10) {
//         this.x += 10;
//       }
//       if (mouse.x > this.x && this.x > this.size * 10) {
//         this.x -= 10;
//       }
//       if (mouse.y < this.y && this.y < window.innerHeight - this.size * 10) {
//         this.y += 10;
//       }
//       if (mouse.y > this.y && this.y > this.size * 10) {
//         this.y -= 10;
//       }
//     }
//     this.x += this.directionX;
//     this.y += this.directionY;
   

  

// }
//}