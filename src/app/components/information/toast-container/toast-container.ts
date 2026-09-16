import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Toast } from '@components/information/toast/toast';
import { ToastService } from '@shared/services/toast.service';

@Component({
  selector: 'app-toast-container',
  imports: [Toast],
  templateUrl: './toast-container.html',
  styleUrl: './toast-container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastContainer {
  protected readonly service = inject(ToastService);
}
