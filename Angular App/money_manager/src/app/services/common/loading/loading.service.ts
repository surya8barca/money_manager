import { Injectable } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { LoadingComponent } from '../../../common/loading/loading.component';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private overlayRef!: OverlayRef;

  constructor(private overlay: Overlay) { }

  show(): void {
    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay.position()
        .global()
        .centerHorizontally()
        .centerVertically()
    });

    const spinnerPortal = new ComponentPortal(LoadingComponent);
    this.overlayRef.attach(spinnerPortal);
  }

  hide(): void {
    this.overlayRef.detach();
  }
}
