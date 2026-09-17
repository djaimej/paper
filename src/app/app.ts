import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from '@shared/services/theme.service';
import { ToastContainer } from './components/information/toast-container/toast-container';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToastContainer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  // Se instancia para activar el tema en toda la app (el effect aplica la clase en <html>).
  private readonly theme = inject(ThemeService);
}
